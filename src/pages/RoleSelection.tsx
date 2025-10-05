import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { UserCircle2, Briefcase, ArrowLeft, Check } from 'lucide-react';

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelection = (role: 'customer' | 'provider') => {
    navigate('/auth', { state: { role } });
  };

  const customerFeatures = [
    'Browse thousands of services',
    'Compare prices and reviews',
    'Book services instantly',
    'Track your service history',
    'Leave reviews and ratings'
  ];

  const providerFeatures = [
    'Showcase your services',
    'Get discovered by customers',
    'Manage your bookings',
    'Build your reputation',
    'Grow your business'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background flex items-center justify-center p-4">
      <div className="w-full max-w-6xl space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Join Famaserv
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose how you want to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Card */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer group"
                onClick={() => handleRoleSelection('customer')}>
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <UserCircle2 className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl">I'm a Customer</CardTitle>
              <CardDescription className="text-base">
                Looking for professional services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {customerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full h-12 text-lg hover-scale"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelection('customer');
                }}
              >
                Continue as Customer
              </Button>
            </CardContent>
          </Card>

          {/* Provider Card */}
          <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 cursor-pointer group"
                onClick={() => handleRoleSelection('provider')}>
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="h-10 w-10 text-primary" />
              </div>
              <CardTitle className="text-3xl">I'm a Professional</CardTitle>
              <CardDescription className="text-base">
                Ready to offer my services
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="space-y-3">
                {providerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full h-12 text-lg hover-scale"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleSelection('provider');
                }}
              >
                Continue as Professional
              </Button>
            </CardContent>
          </Card>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Already have an account?{' '}
          <button 
            onClick={() => navigate('/auth')}
            className="text-primary hover:underline font-medium"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
