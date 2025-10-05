import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Hero = () => {
  const navigate = useNavigate();
  const [counters, setCounters] = useState({ users: 0, providers: 0, jobs: 0 });

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 20);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(10000, 'users');
            animateCounter(5000, 'providers');
            animateCounter(50000, 'jobs');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsElement = document.getElementById('stats-section');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/30 via-background to-background py-20 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Trusted by 10,000+ customers</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Find the Perfect
            <span className="block bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
              Service Provider
            </span>
            Near You
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with skilled professionals for auto care, home services, beauty, and more. 
            Quality service, verified providers, guaranteed satisfaction.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="group hover-scale h-14 px-8 text-lg rounded-full"
              onClick={() => navigate('/search')}
            >
              Browse Services
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover-scale h-14 px-8 text-lg rounded-full border-2"
              onClick={() => navigate('/role-selection')}
            >
              Become a Pro
            </Button>
          </div>

          {/* Stats */}
          <div id="stats-section" className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {counters.users.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Active Users</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {counters.providers.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-foreground">
                {counters.jobs.toLocaleString()}+
              </div>
              <div className="text-sm text-muted-foreground">Jobs Done</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
