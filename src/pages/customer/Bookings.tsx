import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Bookings() {
  const bookings = {
    active: [
      {
        id: 1,
        service: 'Car Wash Service',
        provider: 'Mike Auto Care',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        date: '2025-10-10',
        time: '10:00 AM',
        location: 'Auckland Central',
        phone: '+64 21 123 4567',
        status: 'confirmed',
      },
      {
        id: 2,
        service: 'Home Cleaning',
        provider: 'Sarah Clean Pro',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        date: '2025-10-12',
        time: '2:00 PM',
        location: 'Auckland CBD',
        phone: '+64 21 987 6543',
        status: 'pending',
      },
    ],
    completed: [
      {
        id: 3,
        service: 'Plumbing Repair',
        provider: 'Tom Plumber',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        date: '2025-10-01',
        time: '9:00 AM',
        location: 'Auckland North',
        phone: '+64 21 555 0123',
        status: 'completed',
      },
    ],
    cancelled: [],
  };

  const BookingCard = ({ booking }: { booking: any }) => (
    <Card>
      <CardContent className="pt-6">
        <div className="flex gap-4">
          <img
            src={booking.avatar}
            alt={booking.provider}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{booking.service}</h3>
                <p className="text-sm text-muted-foreground">{booking.provider}</p>
              </div>
              <Badge
                variant={
                  booking.status === 'confirmed'
                    ? 'default'
                    : booking.status === 'pending'
                    ? 'secondary'
                    : 'outline'
                }
              >
                {booking.status}
              </Badge>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {booking.date}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {booking.time}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {booking.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {booking.phone}
              </div>
            </div>

            <div className="mt-4 flex gap-2">
              {booking.status === 'completed' ? (
                <>
                  <Button variant="outline" size="sm">
                    Rebook
                  </Button>
                  <Button size="sm">Rate Service</Button>
                </>
              ) : (
                <>
                  <Button variant="outline" size="sm">
                    Message
                  </Button>
                  <Button variant="destructive" size="sm">
                    Cancel
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-muted-foreground mt-2">Manage your service bookings</p>
      </div>

      <Tabs defaultValue="active" className="space-y-6">
        <TabsList>
          <TabsTrigger value="active">Active ({bookings.active.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({bookings.completed.length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({bookings.cancelled.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {bookings.active.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {bookings.completed.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          {bookings.cancelled.length === 0 ? (
            <Card>
              <CardContent className="pt-6 text-center text-muted-foreground">
                No cancelled bookings
              </CardContent>
            </Card>
          ) : (
            bookings.cancelled.map((booking: any) => (
              <BookingCard key={booking.id} booking={booking} />
            ))
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
