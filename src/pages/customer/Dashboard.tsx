import { Search, TrendingUp, Clock, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const recentActivity = [
    { id: 1, title: 'Car Wash Service', provider: 'Mike Auto Care', time: '2 hours ago' },
    { id: 2, title: 'Home Cleaning', provider: 'Sarah Clean Pro', time: '1 day ago' },
    { id: 3, title: 'Plumbing Repair', provider: 'Tom Plumber', time: '3 days ago' },
  ];

  const stats = [
    { label: 'Active Bookings', value: '3', icon: Clock, color: 'text-blue-500' },
    { label: 'Completed', value: '12', icon: TrendingUp, color: 'text-green-500' },
    { label: 'Favorites', value: '8', icon: Heart, color: 'text-red-500' },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-4xl font-bold">Hi {user?.name?.split(' ')[0]} 👋</h1>
        <p className="text-muted-foreground mt-2">Welcome back to your dashboard</p>
      </div>

      {/* Quick Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for services or providers..."
                className="pl-10 h-12"
              />
            </div>
            <Button className="h-12 px-6" onClick={() => navigate('/search')}>
              Search
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <stat.icon className={`h-12 w-12 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <div>
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.provider}</p>
                </div>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
