import {
  Smartphone,
  Globe,
  Layout,
  Palette,
  ShoppingCart,
  Code,
  Cloud,
  Server,
  HeadsetIcon,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  slug: string;
}

export const services: Service[] = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description:
      'We build high-performance mobile applications for Android, iOS, and cross-platform using modern frameworks like Flutter and React Native.',
    icon: Smartphone,
    features: [
      'Android & iOS Development',
      'Cross-platform Solutions',
      'Flutter & React Native',
      'API Integration',
      'Payment Integration',
      'Push Notifications',
      'App Store Deployment',
    ],
    slug: 'mobile-app-development',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description:
      'From corporate websites to complex web portals, we create fast, responsive, and visually stunning websites that drive results.',
    icon: Globe,
    features: [
      'Corporate Websites',
      'Business Websites',
      'Landing Pages',
      'E-commerce Websites',
      'Web Portals',
      'Booking Systems',
    ],
    slug: 'web-development',
  },
  {
    id: 'web-app-development',
    title: 'Web Application Development',
    description:
      'We develop powerful web applications including SaaS platforms, CRM systems, dashboards, and custom management solutions.',
    icon: Layout,
    features: [
      'SaaS Platforms',
      'CRM & ERP Systems',
      'Marketplaces',
      'Dashboards',
      'Inventory Systems',
      'Customer Portals',
    ],
    slug: 'web-app-development',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Our design team creates intuitive, beautiful user experiences backed by research and modern design principles.',
    icon: Palette,
    features: [
      'UX Research',
      'UI Design',
      'Figma Prototypes',
      'Design Systems',
      'Responsive Interfaces',
      'User Testing',
    ],
    slug: 'ui-ux-design',
  },
  {
    id: 'ecommerce-development',
    title: 'E-Commerce Development',
    description:
      'We build scalable e-commerce solutions with product management, secure payments, and inventory tracking.',
    icon: ShoppingCart,
    features: [
      'Online Stores',
      'Product Management',
      'Shopping Cart',
      'Secure Payments',
      'Order Management',
      'Vendor Management',
    ],
    slug: 'ecommerce-development',
  },
  {
    id: 'api-development',
    title: 'API & Backend Development',
    description:
      'We architect and build robust APIs and backend systems that power your applications with security and scalability.',
    icon: Code,
    features: [
      'REST APIs',
      'Authentication Systems',
      'Database Architecture',
      'Payment Integrations',
      'Third-party Integrations',
      'Real-time Systems',
    ],
    slug: 'api-development',
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud & Deployment',
    description:
      'We handle infrastructure, deployment, and DevOps so your applications run reliably at any scale.',
    icon: Cloud,
    features: [
      'AWS & DigitalOcean',
      'Docker & Nginx',
      'CI/CD Pipelines',
      'SSL Configuration',
      'Monitoring & Alerts',
      'Automated Backups',
    ],
    slug: 'cloud-deployment',
  },
  {
    id: 'web-hosting-domain',
    title: 'Web Hosting & Domain Services',
    description:
      'We provide reliable web hosting and domain registration services, ensuring your website stays fast, secure, and always online.',
    icon: Server,
    features: [
      'Domain Registration',
      'Shared & VPS Hosting',
      'Website Migration',
      'SSL Certificates',
      'Email Hosting',
      'DNS Management',
      'Uptime Monitoring',
    ],
    slug: 'web-hosting-domain-services',
  },
  {
    id: 'it-services',
    title: 'IT Services',
    description:
      'We offer comprehensive IT support and consulting to keep your business technology running smoothly and securely.',
    icon: HeadsetIcon,
    features: [
      'IT Consulting',
      'Network Setup & Support',
      'Hardware & Software Support',
      'Data Backup & Recovery',
      'Cybersecurity Solutions',
      'IT Infrastructure Management',
      'Technical Support',
    ],
    slug: 'it-services',
  },
];
