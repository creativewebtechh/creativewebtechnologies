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
    image: '/sellhub-marketplace.png',
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    category: 'Web Application',
    description:
      'A comprehensive fleet management dashboard for tracking vehicles, managing routes, monitoring driver performance, and optimizing logistics operations.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Mapbox'],
    slug: 'fleet-management',
    image: '/fleet-management.png',
  },
  {
    id: 'healthcare-portal',
    title: 'Healthcare Patient Portal',
    category: 'Web Application',
    description:
      'A secure patient portal for healthcare providers featuring appointment scheduling, medical records access, and telemedicine integration.',
    technologies: ['Next.js', 'Laravel', 'PostgreSQL', 'REST API'],
    slug: 'healthcare-portal',
    image: '/healthcare-portal.png',
  },
  {
    id: 'fitness-tracker',
    title: 'FitTrack Mobile App',
    category: 'Mobile App',
    description:
      'A cross-platform fitness application with workout tracking, nutrition planning, progress analytics, and social features for community engagement.',
    technologies: ['Flutter', 'Firebase', 'Node.js', 'REST API'],
    slug: 'fitness-tracker',
    image: '/fitness-tracker.png',
  },
  {
    id: 'fastpay',
    title: 'FastPay',
    category: 'Fintech',
    description:
      'A secure digital payments platform enabling instant transfers, merchant checkout, and real-time transaction tracking with fraud detection built in.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    slug: 'fastpay',
    image: '/fastpay.png',
  },
  {
    id: 'logverify',
    title: 'LogVerify',
    category: 'Web Application',
    description:
      'A digital marketplace platform connecting verified buyers and sellers, with built-in identity verification, secure listings, and transaction protection.',
    technologies: ['React', 'Laravel', 'PostgreSQL', 'REST API'],
    slug: 'logverify',
    image: '/logverify.png',
  },
  {
    id: 'quickbite-delivery',
    title: 'QuickBite Delivery',
    category: 'Mobile App',
    description:
      'A food delivery app connecting customers with local restaurants, featuring live order tracking, in-app payments, and rider dispatch management.',
    technologies: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    slug: 'quickbite-delivery',
    image: '/quickbite-delivery.png',
  },
];
