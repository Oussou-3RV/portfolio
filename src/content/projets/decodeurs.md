---
title: Gestion de décodeurs
summary: Une application de gestion de décodeurs avec une API REST sécurisée et des droits différents selon le rôle de l'utilisateur. Projet d'équipe.
kind: Projet de cours
course: INF-1007
status: Terminé
team: true
year: "2025"
order: 4
featured: false
stack: [java, spring-boot, vue, jwt, rbac, postgresql]
diagram:
  caption: L'interface Vue appelle une API Spring Boot qui vérifie le jeton et le rôle avant chaque action.
  nodes:
    - { id: web, label: Interface, detail: Vue 3, col: 1, row: 0 }
    - { id: api, label: API REST, detail: Spring Boot · RBAC, col: 1, row: 1 }
    - { id: db, label: Base de données, detail: PostgreSQL, col: 1, row: 2 }
  edges: [[web, api], [api, db]]
---

## Le projet

Application web de gestion de décodeurs réalisée en équipe dans le cours INF-1007.

## Ma part

- API REST sécurisée avec authentification JWT et contrôle d'accès par rôles (RBAC).
- Écrans de l'interface Vue 3.
- Rédaction des livrables techniques de l'équipe.
