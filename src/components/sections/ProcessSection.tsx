import { processSteps } from '../../data/process';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

export function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section className="bg-light">
      <SectionHeading
        title="Our Process"
        subtitle="A proven methodology that ensures successful delivery of every project."
        centered
      />

      <div
        ref={ref}
        className="relative"
      >
        {/* Timeline Line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={clsx(
                'relative flex flex-col md:flex-row items-start gap-8 transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4',
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Content */}
              <div
                className={clsx(
                  'flex-1 md:w-1/2',
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                )}
              >
                <div
                  className={clsx(
                    'bg-white rounded-xl p-6 shadow-sm inline-block text-left',
                    index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  )}
                >
                  <div className="text-accent font-bold text-lg mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-white shadow-sm" />

              {/* Spacer */}
              <div className="hidden md:block flex-1 md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}