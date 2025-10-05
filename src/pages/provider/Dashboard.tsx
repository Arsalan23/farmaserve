import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  Plus, 
  Eye, 
  MessageSquare, 
  Star, 
  TrendingUp,
  FileText,
  Video
} from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { label: 'Profile Views', value: '1,234', icon: Eye, trend: '+12%' },
    { label: 'Service Views', value: '856', icon: FileText, trend: '+8%' },
    { label: 'Inquiries', value: '45', icon: MessageSquare, trend: '+23%' },
    { label: 'Avg. Rating', value: '4.8', icon: Star, trend: '★★★★★' },
  ];

  const quickActions = [
    { label: 'Add New Service', icon: Plus, link: '/provider/services/new', color: 'bg-primary' },
    { label: 'Upload Reel', icon: Video, link: '/provider/reels/new', color: 'bg-secondary' },
    { label: 'View Services', icon: FileText, link: '/provider/services', color: 'bg-accent' },
    { label: 'View Analytics', icon: TrendingUp, link: '/provider/analytics', color: 'bg-muted' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <img 
              src={user?.avatar} 
              alt={user?.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Welcome back, {user?.name}!
              </h1>
              <p className="text-muted-foreground">Here's your business overview</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.trend} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <Link key={index} to={action.link}>
                  <Button 
                    variant="outline" 
                    className="w-full h-24 flex flex-col items-center justify-center gap-2 hover-lift"
                  >
                    <action.icon className="h-6 w-6" />
                    <span className="text-sm">{action.label}</span>
                  </Button>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">New inquiry received</p>
                  <p className="text-sm text-muted-foreground">Car wash service - Downtown</p>
                </div>
                <span className="text-sm text-muted-foreground">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">New review: 5 stars</p>
                  <p className="text-sm text-muted-foreground">"Excellent service!"</p>
                </div>
                <span className="text-sm text-muted-foreground">1 day ago</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
                <div>
                  <p className="font-medium">Service view milestone</p>
                  <p className="text-sm text-muted-foreground">500 views reached</p>
                </div>
                <span className="text-sm text-muted-foreground">3 days ago</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
