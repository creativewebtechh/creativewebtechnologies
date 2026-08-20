export interface TechnologyCategory {
  name: string;
  technologies: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    name: 'Frontend',
    technologies: ['React', 'Next.js', 'Vue', 'HTML5', 'CSS3', 'Tailwind CSS', 'TypeScript'],
  },
  {
    name: 'Backend',
    technologies: ['Laravel', 'PHP', 'Node.js', 'Express', 'Python', 'REST APIs'],
  },
  {
    name: 'Mobile',
    technologies: ['Flutter', 'React Native', 'Kotlin', 'Swift'],
  },
  {
    name: 'Databases',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    name: 'Infrastructure',
    technologies: ['AWS', 'DigitalOcean', 'Cloudflare', 'Docker', 'Nginx'],
  },
];