import { siteConfig } from '../../data/site';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

export function Trust() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-16 bg-white border-b border-border">
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {siteConfig.stats.map((stat, index) => (
            <div
              key={stat.label}
              className={clsx(
                'text-center transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.value}
              </div>
              <div className="text-muted font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}