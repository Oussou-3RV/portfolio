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

/**
 * Section « Ce que j'utilise » : une grille d'icônes, dans l'ordre d'affichage.
 * `icon` est le nom d'export dans le paquet simple-icons (logos libres de droits, CC0).
 */
export const skillIcons = [
  { label: 'Java', icon: 'siOpenjdk' },
  { label: 'Spring Boot', icon: 'siSpringboot' },
  { label: 'PostgreSQL', icon: 'siPostgresql' },
  { label: 'Vue 3', icon: 'siVuedotjs' },
  { label: 'React', icon: 'siReact' },
  { label: 'Angular', icon: 'siAngular' },
  { label: 'TypeScript', icon: 'siTypescript' },
  { label: 'JavaScript', icon: 'siJavascript' },
  { label: 'Tailwind CSS', icon: 'siTailwindcss' },
  { label: 'Python', icon: 'siPython' },
  { label: 'C# / .NET', icon: 'siDotnet' },
  { label: 'Docker', icon: 'siDocker' },
  { label: 'Git', icon: 'siGit' },
  { label: 'Maven', icon: 'siApachemaven' },
  { label: 'JWT', icon: 'siJsonwebtokens' },
  { label: 'Supabase', icon: 'siSupabase' },
  { label: 'Firebase', icon: 'siFirebase' },
  { label: 'Vercel', icon: 'siVercel' },
] as const;
