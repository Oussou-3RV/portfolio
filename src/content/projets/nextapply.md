---
title: NextApply
summary: Un assistant de recherche d'emploi qui travaille dans mon navigateur. Il repère les offres déjà vues, signale celles qui demandent trop d'expérience et remplit les formulaires à partir de mon profil.
kind: Projet personnel
status: En cours
year: "2026"
order: 1
stack: [java, spring-boot, react, typescript, chrome-ext, postgresql, supabase, flyway, openai, tests]
diagram:
  caption: Une extension Chrome et une application React parlent à la même API Spring Boot. Seul le serveur appelle l'IA.
  nodes:
    - { id: ext, label: Extension Chrome, detail: MV3 · TypeScript, col: 0, row: 0 }
    - { id: web, label: Application web, detail: React · TypeScript, col: 2, row: 0 }
    - { id: api, label: API REST, detail: Java 21 · Spring Boot, col: 1, row: 1 }
    - { id: db, label: Base de données, detail: PostgreSQL · Supabase, col: 0, row: 2 }
    - { id: ai, label: IA, detail: OpenAI · JSON structuré, col: 2, row: 2 }
  edges: [[ext, api], [web, api], [api, db], [api, ai]]
---

## Le problème

Chercher un stage en informatique, c'est remplir dix fois les mêmes formulaires, oublier si on a déjà postulé à une offre vue sur deux sites, et ouvrir des annonces qui exigent cinq ans d'expérience. Je voulais un outil qui m'enlève ces tâches, sans jamais envoyer une candidature à ma place.

## Ce que je construis

- **Un profil structuré** (identité, scolarité, expériences, compétences) stocké dans PostgreSQL, avec des migrations Flyway.
- **L'import du CV** : l'API extrait le texte d'un PDF, puis l'IA propose un profil que je relis avant de l'enregistrer.
- **Une extension Chrome** qui ajoute une offre depuis la page, détecte les doublons et remplit les formulaires.
- **Un score de compatibilité expliqué** et une lettre de motivation à relire (prochaines étapes).

## Choix techniques

- Le navigateur ne parle jamais directement à OpenAI : seul le backend appelle l'API, avec des sorties structurées validées par un schéma JSON.
- L'authentification passe par Supabase Auth ; Spring Security vérifie les jetons JWT côté serveur.
- Pas de collecte automatique d'offres : l'extension agit seulement quand je clique.
- Tests JUnit côté serveur, Vitest côté application et extension.

## Où j'en suis

Les fondations, le profil et l'extraction du CV fonctionnent. Je travaille sur l'écran de relecture du profil, puis sur l'extension.
