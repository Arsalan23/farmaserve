import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import { mockServices } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const Services = () => {
  const { user } = useAuth();
  const userServices = mockServices.filter(s => s.providerId === user?.id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Services</h1>
            <p className="text-muted-foreground">Manage your service listings</p>
          </div>
          <Link to="/provider/services/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Service
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userServices.length > 0 ? (
            userServices.map((service) => (
              <Card key={service.id} className="hover-lift">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {service.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Price Range</p>
                      <p className="font-semibold">
                        ${service.priceRange?.min} - ${service.priceRange?.max}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="font-semibold">★ {service.rating}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Eye className="h-3 w-3" />
                      View
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1 gap-1">
                      <Edit className="h-3 w-3" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground mb-4">You haven't created any services yet</p>
              <Link to="/provider/services/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Service
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
