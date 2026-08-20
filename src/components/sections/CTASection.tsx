import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';

export function CTASection() {
  return (
    <Section className="bg-gradient-to-br from-accent to-accent-700 text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Have an idea? Let's build it.
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Tell us what you're building and we'll help turn your idea into a reliable digital product.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/get-a-quote">
            <Button variant="secondary" size="lg">
              Start Your Project
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-accent"
            >
              <MessageCircle className="mr-2" size={20} />
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}