import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      service: 'Car Wash Service',
      provider: 'Mike Auto Care',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
      rating: 5,
      comment: 'Excellent service! Very professional and thorough.',
      date: '2025-10-01',
    },
    {
      id: 2,
      service: 'Home Cleaning',
      provider: 'Sarah Clean Pro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
      rating: 4,
      comment: 'Great cleaning service, very satisfied.',
      date: '2025-09-28',
    },
    {
      id: 3,
      service: 'Plumbing Repair',
      provider: 'Tom Plumber',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
      rating: 5,
      comment: 'Fixed the issue quickly and professionally!',
      date: '2025-09-25',
    },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Reviews</h1>
        <p className="text-muted-foreground mt-2">Your feedback on services</p>
      </div>

      <div className="space-y-6">
        {reviews.map((review) => (
          <Card key={review.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt={review.provider}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <CardTitle className="text-lg">{review.service}</CardTitle>
                    <p className="text-sm text-muted-foreground">{review.provider}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground">{review.comment}</p>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Edit Review
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
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
