import { technologyCategories } from '../data/technologies';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export function TechnologiesPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technologies</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            We use modern, proven technologies to build reliable, scalable, and
            high-performance digital products.
          </p>
        </div>
      </section>

      {/* Technology Categories */}
      <Section>
        <SectionHeading
          title="Our Tech Stack"
          subtitle="We choose technologies based on project requirements, scalability needs, and long-term maintainability."
          centered
        />

        <div
          ref={ref}
          className="space-y-12"
        >
          {technologyCategories.map((category, index) => (
            <div
              key={category.name}
              className={clsx(
                'transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6">{category.name}</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="bg-light rounded-xl p-4 text-center hover:bg-accent-50 transition-colors"
                  >
                    <span className="font-medium text-dark">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why These Technologies */}
      <Section className="bg-light">
        <SectionHeading
          title="Why These Technologies?"
          subtitle="We select technologies that align with project goals and deliver long-term value."
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-lg font-semibold text-primary mb-3">Proven & Reliable</h4>
            <p className="text-muted">
              We use battle-tested technologies with strong communities and extensive documentation.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-lg font-semibold text-primary mb-3">Scalable</h4>
            <p className="text-muted">
              Our technology choices support growth from small applications to enterprise systems.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6">
            <h4 className="text-lg font-semibold text-primary mb-3">Future-Ready</h4>
            <p className="text-muted">
              We stay current with emerging technologies while prioritizing stability and maintainability.
            </p>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}