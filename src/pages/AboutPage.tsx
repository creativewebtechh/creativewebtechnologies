import { Target, Eye, Heart, Lightbulb, Users, Rocket } from 'lucide-react';
import { Section } from '../components/ui/Section';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CTASection } from '../components/sections/CTASection';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const values = [
  {
    icon: Target,
    title: 'Mission',
    description: 'To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern digital landscape.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description: 'To be a trusted technology partner for businesses seeking to transform their ideas into powerful digital products.',
  },
  {
    icon: Heart,
    title: 'Values',
    description: 'We believe in transparency, quality, collaboration, and delivering measurable value to every client we work with.',
  },
];

const approaches = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We stay current with emerging technologies and best practices to deliver modern solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients throughout the development process to ensure alignment.',
  },
  {
    icon: Rocket,
    title: 'Excellence',
    description: 'We hold ourselves to high standards of quality in design, code, and communication.',
  },
];

export function AboutPage() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient from-primary via-primary-900 to-primary-950 text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Learn about Creative Web Technologies — who we are, what we believe in, and how we help businesses succeed.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading mb-6">Who We Are</h2>
            <p className="text-muted mb-4">
              Creative Web Technologies is a software development company specializing in building
              high-performance websites, mobile applications, web applications, and custom software
              solutions for businesses.
            </p>
            <p className="text-muted mb-4">
              We combine technical expertise with a deep understanding of business needs to deliver
              digital products that help organizations innovate, automate, and scale their operations.
            </p>
            <p className="text-muted">
              Our team of experienced developers, designers, and strategists works collaboratively
              to transform ideas into reliable, scalable, and user-friendly digital solutions.
            </p>
          </div>
          <div className="bg-light rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">30+</div>
                <div className="text-muted">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">20+</div>
                <div className="text-muted">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-muted">Support</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section className="bg-light">
        <SectionHeading
          title="What Drives Us"
          subtitle="Our mission, vision, and values guide everything we do."
          centered
        />

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              className={clsx(
                'bg-white rounded-xl p-8 text-center transition-all duration-500',
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-accent-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
              <p className="text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Our Approach */}
      <Section>
        <SectionHeading
          title="Our Approach"
          subtitle="How we work with clients to deliver successful outcomes."
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((approach) => (
            <div key={approach.title} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-accent-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <approach.icon className="text-accent" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{approach.title}</h3>
                <p className="text-muted">{approach.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}