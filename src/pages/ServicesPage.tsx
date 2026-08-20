import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export function ServicesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive digital product development services tailored to help your business
            innovate, automate, and scale.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div
          ref={ref}
          className="space-y-16"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className={clsx(
                'grid lg:grid-cols-2 gap-12 items-center transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4',
                index % 2 !== 0 && 'lg:grid-flow-dense'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={index % 2 !== 0 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-accent-50 rounded-xl flex items-center justify-center">
                    <service.icon className="text-accent" size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-primary">{service.title}</h2>
                </div>
                <p className="text-muted mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="text-accent font-medium hover:underline inline-flex items-center"
                >
                  Learn More
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>

              <div className={index % 2 !== 0 ? 'lg:col-start-1' : ''}>
                <Card className="bg-light">
                  <div className="aspect-video bg-gradient-to-br from-accent-50 to-violet-50 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <service.icon className="text-accent mx-auto mb-4" size={48} />
                      <span className="text-muted">{service.title}</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}