# Portfolio — Ousmane Balde

Site personnel : Astro 7, GSAP 3 (ScrollTrigger, SplitText), CSS sans framework.

## Commandes

```bash
npm install        # une seule fois
npm run dev        # http://localhost:4321
npm run build      # génère le site statique dans dist/
npm run check      # vérification TypeScript / Astro
```

## Où modifier quoi

| Je veux… | Fichier |
|---|---|
| changer mon courriel, GitHub, CV | `src/data/site.ts` |
| ajouter ou modifier un projet | `src/content/projets/<nom>.md` (le schéma d'architecture est dans le frontmatter) |
| ajouter une technologie | `techs` dans `src/data/site.ts`, puis l'identifiant dans `stack:` du projet |
| changer les couleurs ou les tailles | les variables en haut de `src/styles/global.css` |
| régler les animations | `src/scripts/motion.ts` |
| remplacer mon CV | `public/CV-Ousmane-Balde.pdf` |

Les compteurs de la section « Ce que j'utilise » sont calculés à partir des projets : il suffit d'ajouter une techno dans `stack:` pour qu'elle apparaisse.

## Animations

- **Entrée** : le titre apparaît ligne par ligne (SplitText), la photo se pose.
- **Travelling** : la photo reste épinglée et la caméra avance jusqu'au moniteur (ScrollTrigger `pin` + `scrub`). La position de l'écran dans la photo est dans `MONITOR` (`motion.ts`) ; à changer si tu remplaces la photo. Quand l'écran remplit la vue, un message s'affiche (« Voici ce que j'ai construit. Bonne visite. ») : le texte se change dans `src/pages/index.astro` (`.screen-message`).
- **Projets** : les schémas se tracent lien par lien à l'arrivée.
- Avec « Réduire les animations » activé dans le système, tout s'affiche sans mouvement.

## Déploiement (Vercel)

1. Pousser le dépôt sur GitHub.
2. Sur vercel.com : *Add New Project*, choisir le dépôt ; Vercel détecte Astro tout seul.
3. Mettre la vraie adresse dans `site` de `astro.config.mjs`.
