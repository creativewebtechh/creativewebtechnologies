import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import { Section } from '../ui/Section';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import clsx from 'clsx';

export function PortfolioSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section>
      <SectionHeading
        title="Featured Projects"
        subtitle="Take a look at some of our recent work and see how we help businesses achieve their goals."
        centered
      />

      <div
        ref={ref}
        className="grid md:grid-cols-2 gap-8"
      >
        {projects.slice(0, 4).map((project, index) => (
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
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-accent text-2xl font-bold">
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
                {project.technologies.slice(0, 3).map((tech) => (
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

      <div className="text-center mt-12">
        <Link to="/portfolio">
          <span className="text-accent font-medium hover:underline inline-flex items-center">
            View All Projects
            <ArrowRight className="ml-2" size={16} />
          </span>
        </Link>
      </div>
    </Section>
  );
}