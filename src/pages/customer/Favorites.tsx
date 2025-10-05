import { Heart, Star, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export default function Favorites() {
  const navigate = useNavigate();

  const favorites = [
    {
      id: 'p1',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      category: 'Auto Care',
      rating: 4.9,
      reviewCount: 127,
      location: 'Los Angeles, CA',
      completedJobs: 450,
    },
    {
      id: 'p2',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      category: 'Home Cleaning',
      rating: 4.8,
      reviewCount: 89,
      location: 'San Francisco, CA',
      completedJobs: 320,
    },
    {
      id: 'p3',
      name: 'Tom Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      category: 'Plumbing',
      rating: 4.7,
      reviewCount: 156,
      location: 'New York, NY',
      completedJobs: 580,
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Favorites</h1>
        <p className="text-muted-foreground mt-2">Your saved service providers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((provider) => (
          <Card key={provider.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={provider.avatar}
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-3 right-3 p-2 rounded-full bg-background/90 hover:bg-background transition-colors">
                  <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">{provider.name}</h3>
                  <p className="text-sm text-muted-foreground">{provider.category}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{provider.rating}</span>
                    <span className="text-muted-foreground">
                      ({provider.reviewCount} reviews)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {provider.location}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4" />
                    {provider.completedJobs} jobs completed
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button
                    className="flex-1"
                    onClick={() => navigate(`/provider/${provider.id}`)}
                  >
                    View Profile
                  </Button>
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
