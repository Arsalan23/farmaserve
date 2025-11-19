import { useState } from 'react';
import { Heart, MessageCircle, Share2, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { mockCommunityStories } from '@/data/mockBookings';
import { Navbar } from '@/components/layout/Navbar';

export default function CommunityStories() {
  const [filter, setFilter] = useState<'all' | 'achievement' | 'testimonial' | 'milestone' | 'community'>('all');

  const filteredStories = filter === 'all' 
    ? mockCommunityStories 
    : mockCommunityStories.filter(story => story.category === filter);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'achievement': return 'bg-primary/10 text-primary';
      case 'testimonial': return 'bg-green-500/10 text-green-600';
      case 'milestone': return 'bg-purple-500/10 text-purple-600';
      case 'community': return 'bg-blue-500/10 text-blue-600';
      default: return 'bg-muted';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Community Stories
            </h1>
            <p className="text-muted-foreground text-lg">
              Real stories from our amazing community of providers and customers
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs defaultValue="all" className="mb-8" onValueChange={(value) => setFilter(value as any)}>
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="all">All Stories</TabsTrigger>
              <TabsTrigger value="achievement">Achievements</TabsTrigger>
              <TabsTrigger value="testimonial">Testimonials</TabsTrigger>
              <TabsTrigger value="milestone">Milestones</TabsTrigger>
              <TabsTrigger value="community">Community</TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Stories Feed */}
          <div className="space-y-6">
            {filteredStories.map((story) => (
              <Card key={story.id} className="hover-lift transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.userAvatar}
                        alt={story.userName}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{story.userName}</p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Badge variant="outline" className="text-xs">
                            {story.userType === 'provider' ? 'Service Provider' : 'Customer'}
                          </Badge>
                          <span>•</span>
                          <span>{new Date(story.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(story.category)}>
                      {story.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Story Content */}
                  <p className="text-foreground leading-relaxed">{story.content}</p>

                  {/* Story Images */}
                  {story.images && story.images.length > 0 && (
                    <div className="grid grid-cols-1 gap-2">
                      {story.images.map((image, idx) => (
                        <img
                          key={idx}
                          src={image}
                          alt={`Story from ${story.userName}`}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  {/* Interaction Buttons */}
                  <div className="flex items-center gap-4 pt-4 border-t">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Heart className="h-4 w-4" />
                      <span>{story.likes}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>{story.comments}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Share2 className="h-4 w-4" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <Card className="mt-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-2xl font-bold mb-2">Share Your Story</h3>
              <p className="text-muted-foreground mb-4">
                Have a great experience to share? Inspire our community!
              </p>
              <Button size="lg">Share Your Success</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
