import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { CustomEase } from 'gsap/CustomEase';

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);

// Courbes partagées avec le CSS (--ease-out) : sortie franche, jamais d'ease-in sur l'interface.
CustomEase.create('out', '0.23, 1, 0.32, 1');
CustomEase.create('inOut', '0.77, 0, 0.175, 1');

declare global {
  interface Window { __motionReady?: boolean }
}

/** Position de l'écran du moniteur dans la photo d'origine (1500 × 2000), en fractions. */
const MONITOR = { x: 0.1853, y: 0.5375, w: 0.3313, h: 0.1615 };
const PHOTO = { w: 1500, h: 2000 };

/** Rectangle du moniteur dans le repère de la figure, en tenant compte de object-fit: cover. */
function monitorRect(figure: HTMLElement, img: HTMLImageElement) {
  const w = figure.clientWidth;
  const h = figure.clientHeight;
  const [px, py] = getComputedStyle(img).objectPosition.split(' ').map((v) => parseFloat(v) / 100);
  const scale = Math.max(w / PHOTO.w, h / PHOTO.h);
  const rw = PHOTO.w * scale;
  const rh = PHOTO.h * scale;
  const ox = (w - rw) * (px ?? 0.5);
  const oy = (h - rh) * (py ?? 0.5);
  return { x: ox + MONITOR.x * rw, y: oy + MONITOR.y * rh, w: MONITOR.w * rw, h: MONITOR.h * rh };
}

function heroEntrance(stage: HTMLElement) {
  const title = stage.querySelector<HTMLElement>('[data-hero-title]');
  const intro = stage.querySelectorAll<HTMLElement>('[data-intro]');
  const img = stage.querySelector<HTMLElement>('[data-photo-img]');
  if (!title) return;

  const split = SplitText.create(title, { type: 'lines', mask: 'lines', linesClass: 'line' });
  gsap.set([title, ...intro], { visibility: 'visible' });

  const tl = gsap.timeline({ defaults: { ease: 'out' } });
  if (img) tl.from(img, { scale: 1.06, opacity: 0, duration: 1.4, transformOrigin: '70% 40%' }, 0);
  tl.from(split.lines, { yPercent: 105, duration: 0.95, stagger: 0.08 }, 0.15)
    .from(intro, { y: 18, autoAlpha: 0, duration: 0.8, stagger: 0.06 }, 0.45);
  return () => split.revert();
}

/** Le travelling : la photo reste épinglée et la caméra avance jusqu'à l'écran. */
function dollyIntoScreen(stage: HTMLElement) {
  const figure = stage.querySelector<HTMLElement>('[data-photo]');
  const img = stage.querySelector<HTMLImageElement>('[data-photo-img]');
  const fill = stage.querySelector<HTMLElement>('[data-screen-fill]');
  const copy = stage.querySelector<HTMLElement>('[data-copy]');
  if (!figure || !img || !fill || !copy) return;

  const placeFill = () => {
    const r = monitorRect(figure, img);
    Object.assign(fill.style, { left: `${r.x}px`, top: `${r.y}px`, width: `${r.w}px`, height: `${r.h}px` });
  };

  const target = () => {
    const r = monitorRect(figure, img);
    const vw = stage.clientWidth;
    // Sur mobile la scène peut dépasser la fenêtre : on centre l'écran dans ce que le visiteur voit.
    const vh = Math.min(stage.clientHeight, window.innerHeight);
    const k = Math.max(vw / r.w, vh / r.h) * 1.04;
    return {
      k,
      x: vw / 2 - figure.offsetLeft - k * (r.x + r.w / 2),
      y: vh / 2 - figure.offsetTop - k * (r.y + r.h / 2),
    };
  };

  placeFill();
  gsap.set(figure, { transformOrigin: '0 0', willChange: 'transform' });

  // Le dégradé qui fond la photo dans le mur reste opaque tant que le bord de la photo est dans le cadre,
  // puis s'efface sur 60px une fois ce bord sorti : aucune arête nette pendant le zoom.
  const fade = stage.querySelector<HTMLElement>('[data-fade]');
  const narrow = window.matchMedia('(max-width: 899px)');
  const syncFade = () => {
    if (!fade) return;
    const edge = narrow.matches
      ? figure.offsetTop + Number(gsap.getProperty(figure, 'y'))
      : figure.offsetLeft + Number(gsap.getProperty(figure, 'x'));
    fade.style.opacity = String(Math.min(1, Math.max(0, (edge + 60) / 60)));
  };

  const tl = gsap.timeline({
    onUpdate: syncFade,
    scrollTrigger: {
      trigger: stage,
      start: 'top top',
      // 150 % : le zoom garde sa longueur d'avant, plus un temps de pause sur le message.
      end: '+=150%',
      pin: true,
      scrub: 0.8,
      invalidateOnRefresh: true,
      onRefresh: placeFill,
      onUpdate: (self) => {
        // L'en-tête passe en mode « écran » quand l'écran remplit la vue.
        const onScreen = self.progress > 0.6;
        if (onScreen === (stage.dataset.themeNow === 'screen')) return;
        if (onScreen) stage.dataset.themeNow = 'screen';
        else delete stage.dataset.themeNow;
        window.dispatchEvent(new Event('header:refresh'));
      },
    },
  });

  tl.to(copy, { y: -60, autoAlpha: 0, duration: 0.3, ease: 'none' }, 0)
    .to(figure, {
      x: () => target().x,
      y: () => target().y,
      scale: () => target().k,
      duration: 1,
      ease: 'power2.inOut',
    }, 0)
    // L'écran « s'allume » en bleu nuit avant d'être assez grand pour qu'on lise ce qu'il affichait.
    .to(fill, { autoAlpha: 1, duration: 0.2, ease: 'none' }, 0.24);

  // Le message dans l'écran allumé : le titre monte ligne par ligne derrière un masque (même geste
  // que le titre d'accueil), puis « Bonne visite. » apparaît. Une courte pause suit avant les projets.
  const message = stage.querySelector<HTMLElement>('[data-screen-message]');
  const msgTitle = stage.querySelector<HTMLElement>('[data-sm-title]');
  const msgHint = stage.querySelector<HTMLElement>('[data-sm-hint]');
  let msgSplit: SplitText | undefined;
  if (message && msgTitle && msgHint) {
    msgSplit = SplitText.create(msgTitle, { type: 'lines', mask: 'lines' });
    tl.set(message, { visibility: 'visible' }, 0.7)
      .from(msgSplit.lines, { yPercent: 105, duration: 0.22, stagger: 0.05, ease: 'out' }, 0.7)
      .from(msgHint, { autoAlpha: 0, y: 12, duration: 0.15, ease: 'out' }, 0.92)
      .to({}, { duration: 0.2 }); // pause : le message reste lisible avant que la section suivante monte
  }

  const onResize = () => placeFill();
  window.addEventListener('resize', onResize);
  return () => {
    window.removeEventListener('resize', onResize);
    delete stage.dataset.themeNow;
    if (fade) fade.style.opacity = '';
    msgSplit?.revert();
  };
}

/** Les fiches projets entrent quand on les atteint ; les schémas se tracent lien par lien. */
function projectReveals() {
  document.querySelectorAll<HTMLElement>('[data-project]').forEach((project) => {
    const bits = project.querySelectorAll('[data-reveal]');
    const edges = project.querySelectorAll<SVGPathElement>('[data-edge]');
    const nodes = project.querySelectorAll('[data-node]');
    const tl = gsap.timeline({
      defaults: { ease: 'out' },
      scrollTrigger: { trigger: project, start: 'top 78%', once: true },
    });
    tl.from(bits, { y: 22, autoAlpha: 0, duration: 0.8, stagger: 0.06 }, 0)
      .from(nodes, { autoAlpha: 0, y: 8, duration: 0.5, stagger: 0.07 }, 0.15)
      .fromTo(edges, { strokeDasharray: 1, strokeDashoffset: 1 }, { strokeDashoffset: 0, duration: 0.7, stagger: 0.08, ease: 'inOut' }, 0.35);
  });
}

/**
 * Grille de compétences : les cases apparaissent en vague, depuis le coin haut-gauche,
 * en suivant la grille (GSAP stagger « grid »). Une seule fois, à l'arrivée sur la section.
 */
function techGridReveal() {
  const grid = document.querySelector<HTMLElement>('[data-tech-grid]');
  if (!grid) return;
  const cells = grid.querySelectorAll<HTMLElement>('[data-tech]');
  const icons = grid.querySelectorAll<SVGElement>('[data-tech] svg');
  const tl = gsap.timeline({
    defaults: { ease: 'out' },
    scrollTrigger: { trigger: grid, start: 'top 80%', once: true },
  });
  tl.from(cells, {
    autoAlpha: 0,
    y: 18,
    duration: 0.7,
    stagger: { each: 0.045, grid: 'auto', from: 'start' },
  }).from(
    icons,
    { scale: 0.85, duration: 0.7, stagger: { each: 0.045, grid: 'auto', from: 'start' }, transformOrigin: '0% 100%' },
    0.08,
  );
}

function contactTitle() {
  const title = document.querySelector<HTMLElement>('#contact [data-split]');
  if (!title) return;
  SplitText.create(title, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
    onSplit: (self) =>
      gsap.from(self.lines, {
        yPercent: 105,
        duration: 0.9,
        stagger: 0.08,
        ease: 'out',
        scrollTrigger: { trigger: title, start: 'top 82%', once: true },
      }),
  });
}

export function initHome() {
  const stage = document.querySelector<HTMLElement>('[data-stage]');
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    let revertEntrance: (() => void) | undefined;
    let revertDolly: (() => void) | undefined;

    document.fonts.ready.then(() => {
      if (stage) {
        revertEntrance = heroEntrance(stage);
        revertDolly = dollyIntoScreen(stage);
      }
      projectReveals();
      techGridReveal();
      contactTitle();
      window.__motionReady = true;
      ScrollTrigger.refresh();
    });

    return () => {
      revertEntrance?.();
      revertDolly?.();
    };
  });

  // Mouvement réduit : tout est visible, rien ne bouge.
  mm.add('(prefers-reduced-motion: reduce)', () => {
    document.documentElement.classList.remove('motion');
    window.__motionReady = true;
  });
}

/** Pages projet : le grand schéma se trace une fois, à l'arrivée. */
export function initProject() {
  const mm = gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    const diagram = document.querySelector('[data-diagram]');
    if (!diagram) return;
    const tl = gsap.timeline({ defaults: { ease: 'out' }, delay: 0.15 });
    tl.from(diagram.querySelectorAll('[data-node]'), { autoAlpha: 0, y: 10, duration: 0.6, stagger: 0.08 })
      .fromTo(
        diagram.querySelectorAll('[data-edge]'),
        { strokeDasharray: 1, strokeDashoffset: 1 },
        { strokeDashoffset: 0, duration: 0.7, stagger: 0.08, ease: 'inOut' },
        0.25,
      );
  });
}
