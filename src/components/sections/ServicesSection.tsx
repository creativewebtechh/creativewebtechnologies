import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

export function ServicesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section>
      <SectionHeading
        title="Our Services"
        subtitle="We offer comprehensive digital product development services to help businesses innovate and grow."
        centered
      />

      <div
        ref={ref}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {services.slice(0, 6).map((service, index) => (
          <Link
            key={service.id}
            to={`/services/${service.slug}`}
            className={clsx(
              'transition-all duration-500',
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            )}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Card className="h-full">
              <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-accent" size={28} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">
                {service.title}
              </h3>
              <p className="text-muted mb-4">{service.description}</p>
              <div className="flex items-center text-accent font-medium">
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to="/services">
          <span className="text-accent font-medium hover:underline inline-flex items-center">
            View All Services
            <ArrowRight className="ml-2" size={16} />
          </span>
        </Link>
      </div>
    </Section>
  );
}