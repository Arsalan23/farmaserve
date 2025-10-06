import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Crown, 
  Zap, 
  CheckCircle2, 
  TrendingUp,
  Calendar,
  CreditCard,
  Sparkles
} from 'lucide-react';

const Subscription = () => {
  const navigate = useNavigate();
  const [currentPlan] = useState({
    name: 'Free',
    expiresAt: null,
    creditsRemaining: 0,
    totalCredits: 0,
  });

  const plans = [
    {
      id: 'basic',
      name: 'Basic Boost',
      type: 'monthly',
      price: 29,
      credits: 10,
      description: 'Perfect for getting started',
      features: [
        '10 promotion credits/month',
        'Boost profile visibility',
        'Priority in search results',
        'Basic analytics',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      type: 'monthly',
      price: 79,
      credits: 30,
      description: 'Most popular for growing businesses',
      features: [
        '30 promotion credits/month',
        'Featured profile badge',
        'Top 3 in category results',
        'Advanced analytics',
        'Boost reels & stories',
        'Priority customer support',
      ],
      color: 'from-purple-500 to-pink-500',
      popular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      type: 'monthly',
      price: 149,
      credits: 100,
      description: 'Maximum visibility & growth',
      features: [
        '100 promotion credits/month',
        'Premium featured badge',
        'Guaranteed top placement',
        'Full analytics suite',
        'Unlimited reel boosts',
        'Dedicated account manager',
        'Custom promotional campaigns',
      ],
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const oneTimeBoosts = [
    {
      id: 'boost-5',
      name: '5 Credits Pack',
      price: 15,
      credits: 5,
      description: 'Quick boost for your profile',
    },
    {
      id: 'boost-15',
      name: '15 Credits Pack',
      price: 39,
      credits: 15,
      description: 'Best value one-time boost',
      popular: true,
    },
    {
      id: 'boost-30',
      name: '30 Credits Pack',
      price: 69,
      credits: 30,
      description: 'Power boost for maximum reach',
    },
  ];

  const handleSubscribe = (planId: string) => {
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      navigate('/provider/payment', {
        state: {
          planName: plan.name,
          amount: plan.price,
          type: 'subscription',
          features: plan.features,
        }
      });
    }
  };

  const handleBoost = (boostId: string) => {
    const boost = oneTimeBoosts.find(b => b.id === boostId);
    if (boost) {
      navigate('/provider/payment', {
        state: {
          planName: boost.name,
          amount: boost.price,
          type: 'boost',
          features: [`${boost.credits} promotion credits`, boost.description],
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
            Subscription & Billing
          </h1>
          <p className="text-muted-foreground">
            Boost your visibility and grow your business
          </p>
        </div>

        {/* Current Plan Status */}
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="h-5 w-5 text-primary" />
                  Current Plan: {currentPlan.name}
                </CardTitle>
                <CardDescription>
                  {currentPlan.name === 'Free' 
                    ? 'Upgrade to get more visibility and features'
                    : `${currentPlan.creditsRemaining} credits remaining`
                  }
                </CardDescription>
              </div>
              {currentPlan.name !== 'Free' && (
                <Badge variant="outline" className="text-sm">
                  <Calendar className="h-3 w-3 mr-1" />
                  Active
                </Badge>
              )}
            </div>
          </CardHeader>
          {currentPlan.name !== 'Free' && (
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Credits Used</span>
                  <span className="font-medium">
                    {currentPlan.totalCredits - currentPlan.creditsRemaining} / {currentPlan.totalCredits}
                  </span>
                </div>
                <Progress 
                  value={((currentPlan.totalCredits - currentPlan.creditsRemaining) / currentPlan.totalCredits) * 100} 
                />
              </div>
            </CardContent>
          )}
        </Card>

        {/* Monthly Plans */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Monthly Subscription Plans</h2>
            <p className="text-muted-foreground">
              Get recurring credits and premium features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`relative overflow-hidden hover-lift ${
                  plan.popular ? 'border-2 border-primary shadow-lg shadow-primary/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <Badge className="rounded-tl-none rounded-br-none bg-primary">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{plan.credits} credits/month</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className="w-full"
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => handleSubscribe(plan.id)}
                  >
                    {currentPlan.name === plan.name ? 'Current Plan' : 'Subscribe Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* One-Time Boosts */}
        <div className="mb-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">One-Time Credit Packs</h2>
            <p className="text-muted-foreground">
              Purchase credits as needed without commitment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {oneTimeBoosts.map((boost) => (
              <Card 
                key={boost.id}
                className={`hover-lift ${boost.popular ? 'border-2 border-primary' : ''}`}
              >
                {boost.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">Best Value</Badge>
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl">{boost.name}</CardTitle>
                  <CardDescription>{boost.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">${boost.price}</span>
                    <span className="text-muted-foreground"> one-time</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{boost.credits} credits</span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => handleBoost(boost.id)}
                  >
                    <CreditCard className="h-4 w-4 mr-2" />
                    Purchase Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How Credits Work */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              How Promotion Credits Work
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Profile Boost</h3>
                <p className="text-sm text-muted-foreground mb-2">1 credit = 7 days featured</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Appear at the top of category searches</li>
                  <li>• Featured badge on your profile</li>
                  <li>• 3x more visibility to customers</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Reel/Story Boost</h3>
                <p className="text-sm text-muted-foreground mb-2">1 credit = 3 days promoted</p>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Featured in global reels feed</li>
                  <li>• Priority placement in category</li>
                  <li>• Increased engagement & inquiries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Subscription;