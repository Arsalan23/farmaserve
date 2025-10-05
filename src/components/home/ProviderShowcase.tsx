import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

export const ProviderShowcase = () => {
  const topProviders = [
    {
      name: 'John Smith',
      category: 'Auto Care',
      rating: 4.9,
      jobs: 250,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      category: 'Home Cleaning',
      rating: 5.0,
      jobs: 180,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    {
      name: 'Mike Chen',
      category: 'Plumbing',
      rating: 4.8,
      jobs: 320,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
    },
    {
      name: 'Emily Davis',
      category: 'Beauty & Wellness',
      rating: 4.9,
      jobs: 210,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Meet Our Top Providers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experienced professionals ready to serve you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topProviders.map((provider, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-1">
                    <Star className="h-4 w-4 fill-current" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{provider.name}</h3>
                  <Badge variant="secondary" className="mt-1">
                    {provider.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-medium">{provider.rating}</span>
                  </div>
                  <div className="text-muted-foreground">
                    {provider.jobs} jobs
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};