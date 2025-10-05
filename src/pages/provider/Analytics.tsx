import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, Eye, MessageSquare, Star, FileText, Video } from 'lucide-react';

const Analytics = () => {
  const metrics = [
    { label: 'Total Profile Views', value: '1,234', change: '+12%', icon: Eye },
    { label: 'Service Views', value: '856', change: '+8%', icon: FileText },
    { label: 'Total Inquiries', value: '45', change: '+23%', icon: MessageSquare },
    { label: 'Average Rating', value: '4.8', change: '5 reviews', icon: Star },
    { label: 'Reels Views', value: '2,341', change: '+34%', icon: Video },
    { label: 'Engagement Rate', value: '8.2%', change: '+2.1%', icon: TrendingUp },
  ];

  const topServices = [
    { name: 'Full Car Wash', views: 234, inquiries: 15 },
    { name: 'Interior Detailing', views: 198, inquiries: 12 },
    { name: 'Ceramic Coating', views: 167, inquiries: 8 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics</h1>
          <p className="text-muted-foreground">Track your business performance</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.label}
                </CardTitle>
                <metric.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {metric.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Top Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Top Performing Services</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-4 bg-muted rounded-lg"
                >
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {service.views} views · {service.inquiries} inquiries
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">#{index + 1}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <p>Chart visualization coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
