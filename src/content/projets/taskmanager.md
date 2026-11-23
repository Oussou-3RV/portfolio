---
title: TaskManager
summary: Une console d'orchestration de bout en bout. Un opérateur soumet des tâches, choisit une politique de placement et suit les décisions en direct, sur quatre services lancés d'une seule commande.
kind: Projet de cours
course: Console d'orchestration de bout en bout
status: Terminé
year: "2026"
order: 3
stack: [java, spring-boot, vue, jwt, rbac, postgresql, flyway, docker, tests]
diagram:
  caption: Quatre services dans Docker Compose. Un identifiant de trace suit chaque requête de l'interface jusqu'à la base.
  nodes:
    - { id: web, label: Console opérateur, detail: Vue 3 · Vite, col: 1, row: 0 }
    - { id: api, label: API REST, detail: Spring Boot · JWT, col: 1, row: 1 }
    - { id: db, label: Base de données, detail: PostgreSQL 16 · Flyway, col: 0, row: 2 }
    - { id: placement, label: Moteur (fourni), detail: Python · Flask, col: 2, row: 2, provided: true }
  edges: [[web, api], [api, db], [api, placement]]
---

## Le problème

Une console d'exploitation doit être fiable de bout en bout : authentification, droits, persistance et visibilité sur ce qui se passe entre les services. Le moteur de décision était fourni ; le reste était à construire et à mesurer.

## Ce que j'ai construit

- **Une API Spring Boot** qui reçoit les tâches, appelle le moteur de placement pour chacune et enregistre la décision.
- **Trois rôles** (administrateur, opérateur, auditeur) avec authentification JWT et contrôle d'accès.
- **Une interface Vue 3** pour soumettre des tâches, suivre les décisions en direct et consulter l'historique.
- **Le traçage** : un identifiant de trace propagé à travers les quatre couches.
- **Un protocole de test de charge** qui décompose la latence par couche (réseau, API, logique de placement, base de données) sur une pile Docker isolée.

## Choix techniques

- `docker compose up` démarre toute la pile : base, migrations, backend, moteur et interface.
- Toute la configuration passe par des variables d'environnement ; aucun secret dans le code.
- Migrations Flyway et données d'amorçage pour les comptes de démonstration.
- Tests de contrat de l'API à partir d'une spécification OpenAPI.
