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
    image: '/src/assets/projects/sellhub-marketplace.png',
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'Web Application',
    description:
      'A comprehensive fleet management dashboard for tracking vehicles, managing routes, monitoring driver performance, and optimizing logistics operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Mapbox'],
    slug: 'fleet-management',
    image: '/src/assets/projects/fleet-management.png',
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    category: 'Web Application',
    description:
      'A secure patient portal for healthcare providers featuring appointment scheduling, medical records access, and telemedicine integration.',
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'REST API'],
    slug: 'healthcare-portal',
    image: '/src/assets/projects/healthcare-portal.png',
  },
  {
    id: 'fitness-tracker',
    title: 'FitTrack Mobile App',
    category: 'Mobile App',
    description:
      'A cross-platform fitness application with workout tracking, nutrition planning, progress analytics, and social features for community engagement.',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'REST API'],
    slug: 'fitness-tracker',
    image: '/src/assets/projects/fitness-tracker.png',
  },
  {
    id: 'fastpay',
    title: 'FastPay',
    category: 'Fintech',
    description:
      'A secure digital payments platform enabling instant transfers, merchant checkout, and real-time transaction tracking with fraud detection built in.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    slug: 'fastpay',
    image: '/src/assets/projects/fastpay.png',
  },
  {
    id: 'logverify',
    title: 'LogVerify',
    category: 'Logistics',
    description:
      'A supply chain verification system that tracks shipments end-to-end, validates chain-of-custody records, and flags discrepancies in real time.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'REST API'],
    slug: 'logverify',
    image: '/src/assets/projects/logverify.png',
  },
];
