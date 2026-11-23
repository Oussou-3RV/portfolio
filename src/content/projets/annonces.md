---
title: Annonces de logements
summary: Une interface d'annonces de location construite avec Angular 19 en composants autonomes, déployée sur Firebase.
kind: Projet de cours
course: INF-1013
status: Terminé
year: "2025"
order: 5
featured: false
stack: [angular, typescript, tailwind, firebase]
diagram:
  caption: Des composants Angular autonomes lisent des services simulés ; le site est servi par Firebase Hosting.
  nodes:
    - { id: ui, label: Composants, detail: Angular 19 · Tailwind, col: 1, row: 0 }
    - { id: svc, label: Services simulés, detail: RxJS · BehaviorSubject, col: 1, row: 1 }
    - { id: host, label: Hébergement, detail: Firebase Hosting · SSR, col: 1, row: 2 }
  edges: [[ui, svc], [svc, host]]
---

## Le projet

Interface d'annonces de logements à louer, réalisée dans le cours INF-1013.

## Ce que j'ai fait

- Architecture en composants autonomes (standalone) avec Angular 19 et Tailwind CSS.
- Services simulés avec `BehaviorSubject` pour faire vivre l'interface sans backend.
- Déploiement sur Firebase Hosting et résolution des problèmes de routage et de rendu côté serveur (SSR).
