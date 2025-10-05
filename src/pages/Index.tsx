import { Navbar } from '@/components/layout/Navbar';
import { HeroBanner } from '@/components/home/HeroBanner';
import { Hero } from '@/components/home/Hero';
import { TrustBanner } from '@/components/home/TrustBanner';
import { CategoriesSection } from '@/components/home/CategoriesSection';
import { FeaturedServices } from '@/components/home/FeaturedServices';
import { ProviderShowcase } from '@/components/home/ProviderShowcase';
import { HowItWorks } from '@/components/home/HowItWorks';
import { Footer } from '@/components/home/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroBanner />
        <Hero />
        <TrustBanner />
        <CategoriesSection />
        <FeaturedServices />
        <ProviderShowcase />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
