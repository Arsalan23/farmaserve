import { mockServices } from '@/data/mockData';
import { ServiceCard } from './ServiceCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedServices = () => {
  const handleServiceClick = () => {
    // Will redirect to login once auth is implemented
    console.log('Service clicked - will redirect to login');
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Top-rated professionals ready to help
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex group">
            View All
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockServices.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              onClick={handleServiceClick}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full group">
            View All Services
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};
