import { Hero } from '../components/sections/Hero';
import { Trust } from '../components/sections/Trust';
import { ServicesSection } from '../components/sections/ServicesSection';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { PortfolioSection } from '../components/sections/PortfolioSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { CTASection } from '../components/sections/CTASection';

export function HomePage() {
  return (
    <>
      <Hero />
      <Trust />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <ProcessSection />
      <CTASection />
    </>
  );
}