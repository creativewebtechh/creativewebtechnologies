export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We understand your business, users, goals, and requirements to establish a clear foundation for the project.',
  },
  {
    number: '02',
    title: 'Plan',
    description:
      'We define the scope, architecture, features, and development roadmap to ensure a structured approach.',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Our design team creates the user experience and interface that aligns with your brand and user needs.',
  },
  {
    number: '04',
    title: 'Develop',
    description:
      'We build the application using modern engineering practices, clean architecture, and quality code.',
  },
  {
    number: '05',
    title: 'Test',
    description:
      'Comprehensive testing of functionality, responsiveness, performance, and security before deployment.',
  },
  {
    number: '06',
    title: 'Launch',
    description:
      'We deploy and configure the production environment, ensuring everything runs smoothly from day one.',
  },
  {
    number: '07',
    title: 'Support',
    description:
      'Ongoing maintenance, improvements, and scaling support to keep your product growing with your business.',
  },
];