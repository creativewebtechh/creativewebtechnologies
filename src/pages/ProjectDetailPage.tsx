import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Section } from '../components/ui/Section';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
          <p className="text-muted mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/portfolio">
            <Button variant="primary">View All Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="primary">{project.category}</Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">{project.description}</p>
        </div>
      </section>

      {/* Project Details */}
      <Section>
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {/* Project Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-accent text-4xl font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <span className="text-muted">{project.title}</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-4">Project Overview</h2>
            <p className="text-muted mb-8">{project.description}</p>

            <h2 className="text-2xl font-bold text-primary mb-4">Key Features</h2>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-muted">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Comprehensive feature set tailored to business requirements
              </li>
              <li className="flex items-center gap-3 text-muted">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Modern, responsive user interface
              </li>
              <li className="flex items-center gap-3 text-muted">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Scalable architecture for future growth
              </li>
              <li className="flex items-center gap-3 text-muted">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                Secure data handling and authentication
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-light rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-primary mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-muted">Category</span>
                  <p className="font-medium text-dark">{project.category}</p>
                </div>
                <div>
                  <span className="text-sm text-muted">Technologies</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/get-a-quote">
                  <Button variant="primary" className="w-full">
                    Start a Similar Project
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}