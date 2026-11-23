---
title: IntelliQCM
summary: Un générateur de quiz assisté par IA. On dépose un cours en PDF, l'application crée un questionnaire, corrige chaque réponse et termine par un conseil personnalisé.
kind: Projet personnel
status: Déployé
year: "2026"
order: 2
stack: [java, spring-boot, vue, javascript, jwt, oauth2, postgresql, openai, vercel]
diagram:
  caption: L'interface Vue envoie le cours à l'API, qui génère les questions avec GPT-4o mini et enregistre chaque session.
  nodes:
    - { id: web, label: Interface, detail: Vue 3 · Pinia, col: 1, row: 0 }
    - { id: api, label: API REST, detail: Spring Boot · OAuth2, col: 1, row: 1 }
    - { id: db, label: Base de données, detail: PostgreSQL · JPA, col: 0, row: 2 }
    - { id: ai, label: IA, detail: OpenAI GPT-4o mini, col: 2, row: 2 }
  edges: [[web, api], [api, db], [api, ai]]
---

## Le problème

Relire un cours ne suffit pas pour savoir si on l'a compris. Je voulais pouvoir déposer n'importe quel cours et obtenir tout de suite des questions pour m'entraîner.

## Ce que j'ai construit

- **Génération du quiz** à partir d'un PDF ou d'un texte collé : nombre de questions (5 à 20) et difficulté au choix.
- **Quiz question par question** avec correction immédiate, ou **mode examen** avec minuterie et résultat à la fin.
- **Comptes utilisateurs** : inscription par courriel avec vérification, connexion Google (OAuth2), routes protégées.
- **Tableau de bord** : quiz terminés, score moyen, progression dans le temps, thèmes les plus faibles, historique détaillé.
- **Modèle gratuit / premium** avec un compteur de quiz quotidien géré par le serveur.

## Choix techniques

- JWT pour l'authentification, gardes Vue Router et store Pinia côté interface.
- Relations JPA entre utilisateurs, sessions de quiz et réponses.
- La clé OpenAI reste sur le serveur ; l'interface ne reçoit que les questions.
- Interface responsive : navigation en bas sur mobile, barre latérale sur ordinateur.
