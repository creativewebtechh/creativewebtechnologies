export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  slug: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'sellhub-marketplace',
    title: 'SellHub Marketplace',
    category: 'Web Application',
    description:
      'A multi-vendor marketplace platform enabling sellers to list, manage, and sell products with real-time inventory tracking and secure payment processing.',
    technologies: ['React', 'Laravel', 'MySQL', 'Sanctum', 'REST API'],
    slug: 'sellhub-marketplace',
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'Web Application',
    description:
      'A comprehensive fleet management dashboard for tracking vehicles, managing routes, monitoring driver performance, and optimizing logistics operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Mapbox'],
    slug: 'fleet-management',
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    category: 'Web Application',
    description:
      'A secure patient portal for healthcare providers featuring appointment scheduling, medical records access, and telemedicine integration.',
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'REST API'],
    slug: 'healthcare-portal',
  },
  {
    id: 'fitness-tracker',
    title: 'FitTrack Mobile App',
    category: 'Mobile App',
    description:
      'A cross-platform fitness application with workout tracking, nutrition planning, progress analytics, and social features for community engagement.',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'REST API'],
    slug: 'fitness-tracker',
  },
];