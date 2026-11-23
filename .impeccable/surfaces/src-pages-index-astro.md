---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/projets"]
---

# Accueil du portfolio (src/pages/index.astro) et pages projets

Mode : Persuade. Public : recruteurs TI au Québec (stage, emploi étudiant). Action : ouvrir un projet, écrire, télécharger le CV. Preuve : 4 fiches projets réelles + photo réelle d'Ousmane à son bureau. Contraintes : sérieux, animations GSAP, prefers-reduced-motion, WCAG AA, français.

## Direction contract

THESIS: Le site commence sur le vrai bureau d'Ousmane ; défiler fait avancer la caméra dans son écran, où vivent les projets. Refuse le hero « Salut, je suis X » sur fond sombre + grille de cartes.

OWN-WORLD: Fond taupe du mur de la photo (#a68c71), encre bleu nuit (#121a30), sections « écran » bleu nuit profond (#0b1222) avec texte ivoire froid (#f1ece4), un seul accent ambre (#d9921e) tiré des rayures du chandail, réservé à « disponible » et au focus. Une seule famille : Schibsted Grotesk (900 titres, 400/500 texte). Boutons rectangulaires à angles vifs, filets 1.5px, aucune carte arrondie.

STORY: Le recruteur comprend en une phrase ce qu'Ousmane construit, voit sa stack, entre dans l'écran, parcourt 4 projets décrits par ce qu'ils font et comment, voit le parcours (UQTR, Maroc, emplois), puis écrit ou télécharge le CV.

FIRST VIEWPORT: Desktop : photo à droite (≈55 %), fondue par masque dans le fond taupe ; à gauche, ligne de rôle, titre 900 très grand « Je construis des applications web complètes, de l'API à l'écran. », phrase de stack, boutons « Voir mes projets » (plein bleu nuit) et « Télécharger mon CV ». Nav en haut avec « Me contacter ». Mobile : photo plein cadre, le titre posé sur le mur.

FORM: Plan rapproché (travelling avant photographique), candidat grounded du registre plus sobre, choisi par l'utilisateur au tour de relance 1. seed:1e487677ab1a81cc. Signature : ScrollTrigger épingle la photo et zoome jusqu'au moniteur ; l'écran se remplit de bleu nuit et devient la section projets. Grammaire de mouvement : SplitText par lignes avec masque à l'entrée, ease expo.out, une seule chorégraphie par section, rien d'animé au clavier.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
