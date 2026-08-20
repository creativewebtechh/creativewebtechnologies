import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

export function PortfolioPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Explore our portfolio of successful projects and see how we help businesses
            achieve their digital goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section>
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio/${project.slug}`}
              className={clsx(
                'transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full group">
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <span className="text-accent text-3xl font-bold">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                    <span className="text-muted text-sm">{project.category}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="primary">{project.category}</Badge>
                </div>

                <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-accent font-medium">
                  View Case Study
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}