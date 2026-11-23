export const site = {
  name: 'Ousmane Balde',
  role: 'Développeur full-stack',
  city: 'Trois-Rivières, Québec',
  email: 'baldemarc224@gmail.com',
  github: 'https://github.com/Oussou-3RV',
  cv: '/CV-Ousmane-Balde.pdf',
  description:
    "Ousmane Balde, étudiant en informatique à l'UQTR. Je construis des applications web complètes : API Java et Spring Boot, interfaces Vue, React ou Angular, PostgreSQL et Docker.",
};

export type TechGroup = 'Langages' | 'Serveur' | 'Interface' | 'Données' | 'Outils et déploiement';

/** Catalogue des technologies. Les projets y font référence par identifiant. */
export const techs = {
  java: { label: 'Java', group: 'Langages' },
  typescript: { label: 'TypeScript', group: 'Langages' },
  javascript: { label: 'JavaScript', group: 'Langages' },
  sql: { label: 'SQL', group: 'Langages' },
  'spring-boot': { label: 'Spring Boot', group: 'Serveur' },
  jwt: { label: 'JWT', group: 'Serveur' },
  rbac: { label: 'Rôles (RBAC)', group: 'Serveur' },
  oauth2: { label: 'OAuth2 Google', group: 'Serveur' },
  openai: { label: 'API OpenAI', group: 'Serveur' },
  vue: { label: 'Vue 3', group: 'Interface' },
  react: { label: 'React', group: 'Interface' },
  angular: { label: 'Angular 19', group: 'Interface' },
  tailwind: { label: 'Tailwind CSS', group: 'Interface' },
  'chrome-ext': { label: 'Extension Chrome (MV3)', group: 'Interface' },
  postgresql: { label: 'PostgreSQL', group: 'Données' },
  flyway: { label: 'Flyway', group: 'Données' },
  supabase: { label: 'Supabase', group: 'Données' },
  docker: { label: 'Docker Compose', group: 'Outils et déploiement' },
  maven: { label: 'Maven', group: 'Outils et déploiement' },
  git: { label: 'Git', group: 'Outils et déploiement' },
  tests: { label: 'Tests (JUnit, Vitest)', group: 'Outils et déploiement' },
  firebase: { label: 'Firebase Hosting', group: 'Outils et déploiement' },
  vercel: { label: 'Vercel, Render', group: 'Outils et déploiement' },
} as const satisfies Record<string, { label: string; group: TechGroup }>;

export type TechId = keyof typeof techs;

export const techGroups: TechGroup[] = ['Langages', 'Serveur', 'Interface', 'Données', 'Outils et déploiement'];

/** Pratiqué dans des cours ou des projets qui ne sont pas présentés ici. */
export const alsoPracticed = ['C#', 'Python (OpenCV, YOLOv8)', 'Flask', 'Railway'];
