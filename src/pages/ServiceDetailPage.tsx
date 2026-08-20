import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services } from '../data/services';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { CTASection } from '../components/sections/CTASection';

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="pt-32 pb-16 text-center">
        <div className="container">
          <h1 className="text-4xl font-bold text-primary mb-4">Service Not Found</h1>
          <p className="text-muted mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/services">
            <Button variant="primary">View All Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center">
              <Icon className="text-accent" size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl">{service.description}</p>
        </div>
      </section>

      {/* Features */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading mb-6">What We Offer</h2>
            <p className="text-muted mb-8">
              Our {service.title.toLowerCase()} service covers everything you need to build
              a successful digital product, from initial concept to deployment and beyond.
            </p>
            <div className="space-y-4">
              {service.features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="text-accent" size={14} />
                  </div>
                  <span className="text-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-light rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary mb-6">Ready to Get Started?</h3>
            <p className="text-muted mb-6">
              Let's discuss your project requirements and how we can help you achieve your goals.
            </p>
            <Link to="/get-a-quote">
              <Button variant="primary" className="w-full">
                Get a Free Quote
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Services */}
      <Section className="bg-light">
        <h2 className="section-heading mb-8 text-center">Other Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services
            .filter((s) => s.id !== service.id)
            .slice(0, 3)
            .map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.slug}`}
                className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center mb-4">
                  <s.icon className="text-accent" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-muted text-sm line-clamp-2">{s.description}</p>
              </Link>
            ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}