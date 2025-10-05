import { useState, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockProviders, mockServices, mockReviews } from '@/data/mockData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/home/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, BadgeCheck, Briefcase, Calendar, Heart, MessageCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';

export default function ProviderProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated, user } = useAuth();
  const [isSharing, setIsSharing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const provider = mockProviders.find((p) => p.id === id);
  const providerServices = provider ? mockServices.filter((s) => s.providerId === provider.id) : [];
  const providerReviews = provider ? mockReviews.filter((r) => r.providerId === provider.id) : [];

  if (!provider) {
    return <div>Provider not found</div>;
  }

  const handleContactClick = () => {
    if (!isAuthenticated) {
      toast({
        title: 'Please sign in',
        description: 'Log in to contact providers and manage your requests.',
      });
      navigate('/auth');
      return;
    }

    setIsContactModalOpen(true);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    if (!name || !email || !message) {
      toast({
        title: 'Missing information',
        description: 'Please complete all fields before sending your request.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast({
        title: 'Request sent',
        description: `We'll notify ${provider.name} with your message.`,
      });
      setIsContactModalOpen(false);
      event.currentTarget.reset();
    } catch (error) {
      toast({
        title: 'Unable to send request',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleShareProfile = async () => {
    try {
      setIsSharing(true);
      const shareData = {
        title: `${provider.name} on Famaserv`,
        text: `Check out ${provider.name}'s professional services on Famaserv`,
        url: window.location.href,
      };

      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: 'Profile link copied',
          description: 'Share it with your friends or colleagues.',
        });
      }
    } catch (error) {
      toast({
        title: 'Unable to share profile',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSharing(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background">
        <Navbar />

        <main className="pt-4">
          {/* Profile Header */}
          <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Avatar & Basic Info */}
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                      <AvatarImage src={provider.avatar} />
                      <AvatarFallback className="text-3xl">{provider.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl md:text-4xl font-bold">{provider.name}</h1>
                        {provider.verified && <BadgeCheck className="h-7 w-7 text-primary" />}
                      </div>
                      <p className="text-lg text-muted-foreground">{provider.bio}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold text-lg">{provider.rating}</span>
                        <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold">{provider.completedJobs}</span>
                        <span className="text-muted-foreground">jobs completed</span>
                      </div>
                    </div>

                    {/* Location & Member Since */}
                    <div className="flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span>Member since {new Date(provider.memberSince).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <h3 className="font-semibold">Skills & Expertise</h3>
                      <div className="flex flex-wrap gap-2">
                        {provider.skills.map((skill, idx) => (
                          <Badge key={idx} variant="secondary" className="text-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button size="lg" className="gap-2" onClick={handleContactClick}>
                        <MessageCircle className="h-4 w-4" />
                        Contact
                      </Button>
                      <Button
                        variant="outline"
                        size="lg"
                        onClick={handleShareProfile}
                        disabled={isSharing}
                      >
                        {isSharing ? 'Sharing...' : 'Share Profile'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Tabs */}
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="reels" className="w-full">
                <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                  <TabsTrigger
                    value="reels"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    Work Gallery ({provider.reels.length})
                  </TabsTrigger>
                  <TabsTrigger
                    value="services"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    Services ({providerServices.length})
                  </TabsTrigger>
                  <TabsTrigger
                    value="reviews"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
                  >
                    Reviews ({providerReviews.length})
                  </TabsTrigger>
                </TabsList>

                {/* Reels/Work Gallery */}
                <TabsContent value="reels" className="mt-8">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {provider.reels.map((reel) => (
                      <Card
                        key={reel.id}
                        className="group cursor-pointer overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <div className="aspect-square relative">
                          <img
                            src={reel.mediaUrl}
                            alt={reel.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                              <p className="text-white text-sm font-medium line-clamp-2">{reel.caption}</p>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1">
                                  <Heart className="h-4 w-4 text-white fill-white" />
                                  <span className="text-white text-sm">{reel.likes}</span>
                                </div>
                                <span className="text-white/70 text-xs">
                                  {new Date(reel.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                  {provider.reels.length === 0 && (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No work gallery items yet</p>
                    </div>
                  )}
                </TabsContent>

                {/* Services */}
                <TabsContent value="services" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {providerServices.map((service) => (
                      <Card key={service.id} className="group cursor-pointer hover:shadow-xl transition-all">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={service.images[0]}
                            alt={service.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <CardContent className="p-5 space-y-3">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                          <div className="flex items-center justify-between pt-2 border-t">
                            {service.priceRange && (
                              <span className="font-semibold text-primary">
                                ${service.priceRange.min} - ${service.priceRange.max}
                              </span>
                            )}
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{service.rating}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                {/* Reviews */}
                <TabsContent value="reviews" className="mt-8">
                  <div className="space-y-4">
                    {providerReviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={review.customerAvatar} />
                              <AvatarFallback>{review.customerName[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 space-y-2">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold">{review.customerName}</h4>
                                <span className="text-sm text-muted-foreground">
                                  {new Date(review.createdAt).toLocaleDateString()}
                                </span>
                              </div>
                              <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${
                                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'
                                    }`}
                                  />
                                ))}
                              </div>
                              <p className="text-muted-foreground">{review.comment}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact {provider.name}</DialogTitle>
            <DialogDescription>
              Share a few details about your request and the provider will get back to you shortly.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4" onSubmit={handleContactSubmit}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                defaultValue={user?.name ?? ''}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                defaultValue={user?.email ?? ''}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                rows={4}
                placeholder={`Hi ${provider.name}, I'd like to know more about...`}
                required
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
