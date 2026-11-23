# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro (choisi par l'utilisateur le 2026-11-22), site statique, pages projets en
Markdown / content collections. Déploiement visé : Vercel (hypothèse, non confirmée).

## Users

- **Principal : recruteurs et responsables techniques au Québec** qui évaluent un
  candidat pour un stage, un emploi étudiant ou un premier emploi en TI
  (développement web / full-stack). Ils arrivent depuis un CV, LinkedIn ou une
  candidature, passent peu de temps, et veulent savoir vite : ce qu'il sait faire,
  avec quelles technologies, et une preuve concrète.
- Secondaire (hypothèse) : enseignants, pairs et superviseurs de stage de l'UQTR.

## Product Purpose

Portfolio personnel d'Ousmane Balde, étudiant au baccalauréat en informatique à
l'UQTR (fin prévue : hiver 2027). Il doit montrer ce qu'Ousmane peut construire,
avec les langages et outils qu'il a réellement utilisés, et mener au contact
(courriel, GitHub, CV).

Ça marche quand un recruteur comprend en quelques secondes le profil
(full-stack Java/Spring Boot + front Vue/React/Angular), ouvre au moins un projet,
et trouve comment le joindre.

## Positioning

Pas « un étudiant passionné » de plus : des projets complets de bout en bout
(API sécurisée, base de données, front, déploiement, conteneurs) décrits
par ce qu'ils font et comment ils sont construits. Les emplois hors TI
(entretien ménager, caisse) restent dans le CV, pas sur le site (décision de
l'utilisateur, 2026-11-23 : non pertinents pour un recruteur TI).

## Operating Context

- Lu sur ordinateur (recruteur au bureau) et sur téléphone (lien ouvert depuis un
  courriel ou LinkedIn).
- Langue : français (hypothèse ; une version anglaise pourra venir plus tard).
- Chemin attendu : profil → projets → détail d'un projet → contact / CV.

## Capabilities and Constraints

- Projets à présenter (confirmés) :
  - **NextApply** : assistant de recherche d'emploi personnel. Java 21 / Spring Boot,
    React + Vite + TypeScript, extension Chrome MV3, Supabase (PostgreSQL, Auth),
    OpenAI. En cours.
  - **IntelliQCM** : générateur de quiz assisté par IA. Vue 3, Spring Boot, OpenAI
    GPT-4o mini, JWT, déployé (Vercel / Render).
  - **TaskManager** : console d'orchestration de bout en bout (cours). Vue 3,
    Spring Boot, moteur Python/Flask, PostgreSQL, Docker Compose, Flyway, JWT +
    rôles, traçage entre 4 couches, tests de charge.
  - **Projets de cours web** : gestion de décodeurs (INF-1007 ; Spring Boot,
    Vue 3, JWT, RBAC, PostgreSQL, équipe) et annonces de logements (INF-1013 ;
    Angular 19, Tailwind, Firebase Hosting, SSR).
- Exclu à sa demande : le projet de vision par ordinateur.
- Doit afficher les langages et outils réellement pratiqués : Java, C#, JavaScript,
  TypeScript, Python, SQL ; Spring Boot, Vue 3, React, Angular 19, Flask, Tailwind ;
  PostgreSQL, Supabase, Firebase ; Git, Docker, Docker Compose, Maven, Vercel,
  Render, Railway ; REST, JWT, RBAC.

## Brand Commitments

- Aucun logo ni identité visuelle existante.
- Voix (confirmée) : directe et concrète, au « je », centrée sur ce qu'il peut faire
  et ce qu'il a construit. Peu d'adjectifs, des faits.

## Evidence on Hand

- CV : `~/Downloads/CV_Ba_Informatique.pdf` (source des faits ci-dessus).
- Code des projets : `~/Desktop/ProjetTech/NextApply`,
  `~/Desktop/UQTR/hiver-26/coursIA/intelliqcm`, `~/Desktop/UQTR/stage1-ETE/TaskManager`.
- GitHub : https://github.com/Oussou-3RV ; courriel public du CV.
- Absents (ne pas inventer) : photo, captures d'écran, URL de démo publiques,
  témoignages, chiffres de performance, LinkedIn.

## Product Principles

1. Prouver plutôt qu'affirmer : chaque compétence renvoie à un projet où elle sert.
2. Lisible en 10 secondes : profil, stack et contact visibles sans fouiller.
3. Honnête sur le niveau : étudiant, projets de cours et projets perso nommés comme tels.
4. Rapide et accessible partout, y compris sur un vieux téléphone.

## Accessibility & Inclusion

WCAG 2.2 AA ; respect de `prefers-reduced-motion` ; navigation clavier complète.
