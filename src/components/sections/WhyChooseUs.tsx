import { Shield, Zap, Users, Lock, Rocket, Headphones } from 'lucide-react';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

const reasons = [
  {
    icon: Zap,
    title: 'Modern Technology',
    description: 'We use modern technologies and development practices to build future-proof solutions.',
  },
  {
    icon: Shield,
    title: 'Scalable Architecture',
    description: 'We build systems designed to grow with your business and handle increasing demands.',
  },
  {
    icon: Users,
    title: 'User-Centered Design',
    description: 'We create intuitive experiences that real users love and understand.',
  },
  {
    icon: Lock,
    title: 'Security First',
    description: 'Security is considered throughout the entire development process.',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'We deliver fast and efficient applications that provide great user experiences.',
  },
  {
    icon: Headphones,
    title: 'Long-Term Support',
    description: 'We provide ongoing support and maintenance after launch.',
  },
];

export function WhyChooseUs() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section dark>
      <SectionHeading
        title="Why Choose Us"
        subtitle="We combine technical expertise with a deep understanding of business needs to deliver exceptional digital products."
        centered
        light
      />

      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {reasons.map((reason, index) => (
          <div
            key={reason.title}
            className={clsx(
              'transition-all duration-500',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}