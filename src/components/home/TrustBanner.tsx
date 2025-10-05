import { CheckCircle2, Shield, Star, Users } from 'lucide-react';

export const TrustBanner = () => {
  const features = [
    {
      icon: Shield,
      title: 'Verified Providers',
      description: 'All professionals are background-checked'
    },
    {
      icon: Star,
      title: 'Top Rated',
      description: 'Only 4.5+ star rated professionals'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guaranteed or money back'
    },
    {
      icon: Users,
      title: 'Trusted Community',
      description: '10,000+ happy customers served'
    }
  ];

  return (
    <section className="py-12 bg-primary/5 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};