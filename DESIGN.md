---
name: Ousmane Balde, portfolio
description: Le bureau réel d'Ousmane ; défiler fait entrer la caméra dans son écran, où vivent les projets.
colors:
  ink: "#121a30"
  ink-soft: "#2d3550"
  amber: "#d9921e"
  wall: "#a68c71"
  wall-light: "#d6cab9"
  screen: "#0b1222"
  screen-raised: "#131c31"
  paper: "#f1ece4"
  paper-2: "#aab3c8"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 1.7rem + 4vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2rem, 1.6rem + 1.9vw, 3.4rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2.1rem)"
    fontWeight: 850
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  lede:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.2rem, 1.1rem + 0.45vw, 1.45rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1rem, 0.96rem + 0.2vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk Variable, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(0.84rem, 0.8rem + 0.15vw, 0.92rem)"
    fontWeight: 500
    lineHeight: 1.55
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  dot: "50%"
spacing:
  2xs: "0.5rem"
  xs: "0.75rem"
  s: "1rem"
  m: "1.5rem"
  l: "2.5rem"
  xl: "4rem"
  2xl: "clamp(5rem, 3.5rem + 6vw, 9rem)"
  gutter: "clamp(1rem, 0.5rem + 3vw, 4rem)"
components:
  button-solid-wall:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-solid-screen:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.screen}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-outline-wall:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-outline-screen:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "0.8rem 1.35rem"
    height: "3rem"
  button-small:
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.55rem 1rem"
    height: "2.6rem"
  row-link-hover:
    backgroundColor: "{colors.screen-raised}"
  diagram-node:
    backgroundColor: "{colors.screen}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    height: "72px"
  available-dot:
    backgroundColor: "{colors.amber}"
    rounded: "{rounded.dot}"
    size: "0.6em"
---

# Design System: Ousmane Balde, portfolio

## Overview

**Creative North Star: "Le travelling dans l'écran"**

Le système part d'une photo réelle : Ousmane à son bureau. Ses couleurs sont prélevées dans cette photo (le mur taupe, le chandail bleu nuit et ses rayures ambre, l'écran éteint) et le site alterne deux matières : le **mur**, clair et chaud, où l'on parle de la personne (accueil, compétences, parcours), et l'**écran**, bleu nuit profond, où l'on montre le travail (projets, contact, en-tête des fiches). Passer de l'un à l'autre est le geste signature : la photo reste épinglée pendant que la caméra avance jusqu'au moniteur, l'écran s'allume en bleu nuit et devient la section Projets.

La densité est celle d'un document technique sérieux : une seule famille de caractères, de très gros titres en graisse 900, du texte concret, des filets fins plutôt que des boîtes. Aucune carte arrondie, aucune ombre, aucune image décorative ; la seule image est la photo, et les projets sont illustrés par des schémas d'architecture dessinés en SVG à partir de leurs données.

Le mouvement est cinématographique mais rare : une entrée par section, des lignes de titre qui montent derrière un masque, des schémas qui se tracent lien par lien, une sortie franche (jamais d'ease-in). Avec `prefers-reduced-motion: reduce`, tout est visible d'emblée et rien ne bouge.

**Key Characteristics:**
- Deux matières qui alternent : mur (taupe `wall`, encre `ink`) et écran (`screen`, texte `paper`), commutées par `data-theme`.
- Une seule famille, Schibsted Grotesk Variable, de 400 à 900.
- Angles vifs partout ; filets de 1.5px (`--rule`) comme seule structure.
- Un unique accent ambre, rare.
- Schémas d'architecture SVG au trait comme illustration des projets.
- Mouvement GSAP : SplitText par lignes masquées, courbe `out` (0.23, 1, 0.32, 1), une chorégraphie par section.

## Colors

Une palette prélevée dans une seule photo : deux fonds de matière, deux encres, un accent.

### Primary
- **Bleu nuit chandail** (`ink`) : l'encre du mur. Texte, filets de titre de colonne, fond des boutons pleins sur le mur, contour du repère « disponible », couleur de focus sur le mur.

### Secondary
- **Ambre rayure** (`amber`) : le seul accent. Repère « disponible », anneau de focus sur l'écran, sélection de texte, curseur de saisie, message de confirmation de copie. Jamais en fond de surface, jamais en couleur de titre.

### Neutral
- **Mur taupe** (`wall`) : fond des sections « mur » (accueil, compétences, parcours) et de l'en-tête sur ces sections ; sert aussi au dégradé qui fond la photo dans le mur.
- **Mur sous la lampe** (`wall-light`) : fond de lecture longue, réservé au corps des fiches projets.
- **Encre adoucie** (`ink-soft`) : texte secondaire sur `wall-light` uniquement.
- **Écran éteint** (`screen`) : fond des sections « écran » (projets, contact, intro des fiches, 404), `theme-color` du navigateur, fond du corps derrière tout.
- **Écran allumé** (`screen-raised`) : survol des lignes de liste sur l'écran.
- **Ivoire froid** (`paper`) : texte principal et fond des boutons pleins sur l'écran.
- **Gris bleuté** (`paper-2`) : texte secondaire sur l'écran (méta, légendes, chapôs de section).

Les filets dérivent de l'encre courante : `rgb(18 26 48 / 0.55)` sur le mur, `/ 0.35` sur `wall-light`, `rgb(241 236 228 / 0.22)` sur l'écran.

### Named Rules
**La règle des deux matières.** Toute section déclare `data-theme="wall"`, `"wall-light"` ou `"screen"` et ne colore rien en dur : elle lit `--bg`, `--fg`, `--fg-2`, `--line`, `--focus`, `--btn-bg`, `--btn-fg`. Le mur parle de la personne, l'écran montre le travail.

**La règle de la rayure.** L'ambre est réservé à « disponible », au focus sur l'écran et aux retours d'état. S'il apparaît ailleurs, il cesse de signifier quelque chose.

## Typography

**Display Font:** Schibsted Grotesk Variable (avec Helvetica Neue, Arial)
**Body Font:** Schibsted Grotesk Variable (même famille)
**Label/Mono Font:** pas de famille distincte ; `ui-monospace` seulement pour le `code` dans les fiches.

**Character:** une grotesque de presse unique, poussée à 900 et resserrée (-0.04em) pour les titres, détendue à 400/500 pour le texte. Le contraste vient de la graisse et de la taille, jamais d'une seconde famille.

L'échelle est fluide, en six pas `--step--1` à `--step-4`, ratio d'environ 1.2 aux petits pas, élargi vers le haut.

### Hierarchy
- **Display** (900, `--step-4`, 0.98) : le titre de l'accueil, le titre des fiches projets, le titre du contact, le titre 404. Un seul par vue.
- **Headline** (900, `--step-3`, 1.02, -0.035em) : titres de section (850) et noms de projets dans la liste, « Projet suivant ».
- **Title** (850, `--step-2`) : intertitres du corps des fiches ; l'adresse courriel du contact (700, -0.02em).
- **Lede** (400, `--step-1`, 1.45, 34 à 48ch) : phrase d'accroche de l'accueil, résumé des projets, chapô de section. `--step-1` en 700 sert aussi aux noms dans les listes secondaires.
- **Body** (400, `--step-0`, 1.55 ; 1.65 en lecture longue, mesure 68ch) : texte courant.
- **Label** (500, `--step--1`, +0.01em) : méta des projets, piles de technologies, dates, légendes, pied de page. Jamais en capitales.

Les intitulés de colonne (Formation, Expérience) sont en `--step-0` 700, posés sur un filet d'encre de 1.5px. Les chiffres (dates) sont en `tabular-nums`. Dans « Ce que j'utilise », le nom sous chaque logo est en `--step-0` 700 (`--step--1` sous 560px).

### Named Rules
**La règle d'une seule voix.** Une famille, pas de capitales espacées, pas de surtitre au-dessus des titres. La hiérarchie se fait par la graisse (400 / 500 / 700 / 850 / 900) et la taille.

## Layout

Conteneur `.wrap` de 88rem maximum avec une gouttière fluide (`gutter`, 1rem à 4rem). Sur ordinateur, les contenus à deux volets utilisent une grille de 12 colonnes : texte en colonnes 1 à 6, schéma en colonnes 8 à 12, la colonne 7 laissée vide. Sous 899px, tout passe sur une colonne.

L'accueil est une scène plein écran (`100svh`, min 38rem) : photo à droite sur 58 % de la largeur, fondue dans le mur par un dégradé horizontal ; texte à gauche, limité à `min(56vw, 52rem)`. Sur mobile, la photo s'ancre en bas sur 60svh avec un dégradé vertical, et le texte se pose sur le mur au-dessus.

Rythme vertical par l'échelle `--space-*` : les sections respirent en `2xl` (5 à 9rem) d'un côté et `xl` (4rem) de l'autre ; les en-têtes de section se ferment par un filet et `l` (2.5rem) ; les éléments d'un bloc s'espacent en `s` ou `m`. L'en-tête fixe mesure `--header-h` (4.5rem) et les premières sections le compensent.

« Ce que j'utilise » est une grille d'icônes tracée au filet de 1px (6 colonnes, 4 sous 899px, 3 sous 560px), cases en 4:3 (carrées sur mobile) : logo Simple Icons en encre `ink` en haut à gauche, nom en bas. Jamais les couleurs de marque des logos. Elle entre en vague depuis le coin haut-gauche (stagger GSAP `grid`, 45ms par case, une seule fois). Pas de compteurs ni de liens : le lien entre technos et projets vit dans les fiches projets. Le parcours est en trois colonnes proportionnées (1.2 / 1.4 / 0.8).

## Elevation & Depth

Système entièrement plat. La profondeur vient de l'alternance des matières (mur clair, écran sombre) et du seul vrai volume du site : la photo, dans laquelle la caméra entre. Aucun `box-shadow` porteur ; le seul anneau est le contour de 2px en encre autour du repère « disponible » sur le mur, qui le détache du taupe.

### Named Rules
**La règle du filet.** On sépare par un filet de 1.5px (`--rule`) ou 1px pour les lignes internes de liste, jamais par une ombre ou une boîte. Un survol peut éclaircir un fond (`screen-raised`), il ne soulève rien.

## Shapes

Angles vifs (0px) sur les boutons, les nœuds de schéma, les champs et toute surface. Le focus a un rayon de 1px pour que l'anneau ne soit pas crénelé. Seule exception : le repère « disponible », un disque plein (50 %). Les icônes sont dessinées au même trait carré (1.75, `stroke-linecap: square`) sur une grille de 24, sans bibliothèque. Les schémas ont des liens orthogonaux (vertical, horizontal, vertical) et des nœuds rectangulaires ; un nœud fourni par un tiers est en pointillé (5 4).

## Components

### Buttons
Rectangulaires, francs, lisibles au pouce.
- **Shape:** angles vifs (0px), contour de 1.5px dans la couleur de texte courante, hauteur minimale 3rem, padding 0.8rem 1.35rem, texte 700 en `--step-0`, icône de 1.05em après ou avant le libellé.
- **Plein** (`btn--solid`) : `--btn-bg` / `--btn-fg`, soit encre sur ivoire sur le mur, ivoire sur bleu nuit sur l'écran. Un seul bouton plein par groupe d'actions.
- **Contour** : fond transparent, texte et contour en `--fg`.
- **Hover / Focus:** survol (pointeur fin seulement) par voile de 10 % de `--fg` sur le contour, ou plein mélangé à 86 % avec le fond ; transitions de couleur 160ms ; pression `translateY(1px)` en 120ms. Focus : contour 2px `--focus`, décalé de 3px.
- **Petit** (`btn--small`) : 2.6rem, padding 0.55rem 1rem, `--step--1` ; utilisé pour « Me contacter » dans l'en-tête.

### Lien flèche
Lien d'action secondaire (« Lire la fiche ») : 700, souligné par un filet de 1.5px en `currentColor`, flèche qui avance de 3px au survol en 200ms.

### Piles de technologies
Liste en ligne sans puces ni pastilles : `--step--1` 500, écart 0.4rem / 1.1rem, en `--fg-2`. Pas de chips encadrées.

### Lignes de liste
Liste secondaire (« Autres projets de cours ») et « Projet suivant » : ligne pleine largeur entre deux filets, grille titre / méta / pile / flèche, survol qui éclaire le fond en `screen-raised` et pousse la flèche de 4 à 6px.

### Navigation
En-tête fixe de 4.5rem, transparent sur la scène d'accueil, puis plein dans la couleur de la section survolée : il lit le `data-theme` de la section sous lui et bascule en « écran » pendant le zoom. Marque en 850 `--step-1` ; liens 500 avec un soulignement de 1.5px qui se déploie de gauche à droite au survol (220ms) ; « Me contacter » en petit bouton plein. Les liens Compétences et Parcours disparaissent sous 860px, CV sous 420px.

### Schéma d'architecture (signature)
SVG généré depuis les données du projet : nœuds rectangulaires de 72px (libellé 700 18px, détail 400 15.5px en `--fg-2`), fond `--bg`, trait `--fg` 1.5px ; liens orthogonaux à 70 % d'opacité. Deux mises en page (large 640, étroite 410 sous 640px) pour que le texte reste lisible. Légende en `--step--1` sous un filet. À l'entrée, les nœuds apparaissent puis les liens se tracent un par un.

### Repère « disponible »
Disque ambre de 0.6em, anneau d'encre de 2px sur le mur (aucun sur l'écran), suivi d'un texte 700.

### Mouvement
Courbes partagées entre CSS et GSAP : `out` = `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`) pour toute entrée, `inOut` = `(0.77, 0, 0.175, 1)` pour le tracé des liens. Titres : SplitText par lignes avec masque, `yPercent: 105`, 0.9 à 0.95s, décalage 0.08s. Blocs : `y: 18-22`, fondu, 0.8s, décalage 0.06s. Travelling : photo épinglée sur 150 % de défilement, `scrub: 0.8`, `power2.inOut`, l'écran s'allume en bleu nuit à 24 % de la course ; une fois l'écran plein, « Voici ce que j'ai construit. » monte ligne par ligne (même geste que le titre d'accueil, `--step-4` 900 en `paper`), suivi de « Bonne visite. » en `paper-2`, puis une courte pause avant la section Projets. Chaque déclencheur ne joue qu'une fois. Rien ne s'anime en réponse au clavier. Sans `prefers-reduced-motion: no-preference`, aucune animation et aucun pré-état masqué ; un filet de sécurité de 2.5s affiche tout si le script ne démarre pas.

## Do's and Don'ts

### Do:
- **Do** poser chaque nouvelle section sur `data-theme` (`wall`, `wall-light` ou `screen`) et utiliser les variables de thème plutôt que des couleurs en dur.
- **Do** mettre le travail (projets, démonstrations, contact) sur l'écran et la personne (profil, compétences, parcours) sur le mur.
- **Do** séparer par des filets de 1.5px (`--rule`), et 1px pour les lignes internes d'une liste.
- **Do** garder les titres en Schibsted Grotesk 900 (850 pour les titres de section), resserrés entre -0.03em et -0.04em.
- **Do** illustrer un projet par son schéma d'architecture plutôt que par une capture inventée.
- **Do** utiliser la courbe `out` (0.23, 1, 0.32, 1) pour toute entrée, une seule chorégraphie par section, et tout rendre visible sous `prefers-reduced-motion: reduce`.
- **Do** limiter les survols aux pointeurs fins (`@media (hover: hover) and (pointer: fine)`).

### Don't:
- **Don't** arrondir un bouton, une carte ou un nœud : angles vifs partout, sauf le disque « disponible ».
- **Don't** utiliser l'ambre comme fond, couleur de titre ou décoration ; il signale la disponibilité, le focus sur l'écran et les retours d'état.
- **Don't** ajouter d'ombre portée ni de carte encadrée pour séparer des contenus.
- **Don't** introduire une seconde famille de caractères ni des capitales espacées.
- **Don't** placer de surtitre (petite ligne au-dessus d'un titre) : le titre porte seul la hiérarchie.
- **Don't** utiliser d'ease-in sur l'interface ni animer une réponse au clavier.
- **Don't** encadrer les technologies en pastilles : une pile en ligne, en `--fg-2`.
