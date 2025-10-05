import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Heart, Eye, Trash2 } from 'lucide-react';
import { mockProviders } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const Reels = () => {
  const { user } = useAuth();
  const provider = mockProviders.find(p => p.id === user?.id);
  const reels = provider?.reels || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent/30 via-background to-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Reels & Stories</h1>
            <p className="text-muted-foreground">Showcase your recent work</p>
          </div>
          <Link to="/provider/reels/new">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Upload Reel
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reels.length > 0 ? (
            reels.map((reel) => (
              <Card key={reel.id} className="overflow-hidden hover-lift">
                <div className="aspect-[9/16] relative overflow-hidden">
                  <img 
                    src={reel.mediaUrl} 
                    alt="Reel"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs">
                    {reel.mediaType}
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm mb-3 line-clamp-2">{reel.caption}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {reel.likes}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {Math.floor(Math.random() * 500) + 100}
                      </span>
                    </div>
                    <span>{new Date(reel.createdAt).toLocaleDateString()}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full gap-1">
                    <Trash2 className="h-3 w-3" />
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-muted-foreground mb-4">You haven't uploaded any reels yet</p>
              <Link to="/provider/reels/new">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Upload Your First Reel
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reels;
