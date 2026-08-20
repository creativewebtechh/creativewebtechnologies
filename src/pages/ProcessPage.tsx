import { processSteps } from '../data/process';
import { Section } from '../components/ui/Section';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export function ProcessPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Process</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            A proven methodology that ensures successful delivery of every project,
            from initial concept to launch and beyond.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <Section>
        <div ref={ref} className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={clsx(
                'flex flex-col md:flex-row items-start gap-8 transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center">
                  <span className="text-accent text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-3">{step.title}</h2>
                <p className="text-muted text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline Visual */}
      <Section className="bg-light">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/20" />

            <div className="space-y-12">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="relative flex items-start gap-8"
                >
                  {/* Dot */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full border-4 border-accent flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-sm flex-1">
                    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
                    <p className="text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}