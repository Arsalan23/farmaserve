import { Booking, Notification, CommunityStory } from '@/types';

export const mockBookings: Booking[] = [
  {
    id: 'b1',
    serviceId: '1',
    providerId: 'p1',
    customerId: 'customer-1',
    customerName: 'John Customer',
    date: '2024-01-20',
    time: '10:00 AM',
    status: 'confirmed',
    price: 200,
    location: '123 Main St, Los Angeles, CA'
  },
  {
    id: 'b2',
    serviceId: '2',
    providerId: 'p2',
    customerId: 'customer-1',
    customerName: 'John Customer',
    date: '2024-01-18',
    time: '2:00 PM',
    status: 'completed',
    price: 150,
    location: '456 Oak Ave, San Francisco, CA'
  },
  {
    id: 'b3',
    serviceId: '3',
    providerId: 'p3',
    customerId: 'customer-1',
    customerName: 'John Customer',
    date: '2024-01-22',
    time: '9:00 AM',
    status: 'pending',
    price: 120,
    location: '789 Pine Rd, New York, NY'
  },
  {
    id: 'b4',
    serviceId: '5',
    providerId: 'p5',
    customerId: 'customer-2',
    customerName: 'Sarah Johnson',
    date: '2024-01-25',
    time: '3:00 PM',
    status: 'confirmed',
    price: 100,
    location: '321 Beach Dr, Miami, FL'
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    userId: 'customer-1',
    title: 'Booking Confirmed',
    message: 'Your car detailing service with Mike Johnson is confirmed for Jan 20 at 10:00 AM',
    type: 'booking',
    read: false,
    createdAt: '2024-01-16T14:30:00Z',
    actionUrl: '/customer/bookings'
  },
  {
    id: 'n2',
    userId: 'customer-1',
    title: 'New Review',
    message: 'Mike Johnson left you a 5-star review! Check it out.',
    type: 'review',
    read: false,
    createdAt: '2024-01-15T10:20:00Z',
    actionUrl: '/customer/reviews'
  },
  {
    id: 'n3',
    userId: 'customer-1',
    title: 'Special Offer',
    message: 'Get 10% off your next cleaning service! Book within 48 hours.',
    type: 'promo',
    read: true,
    createdAt: '2024-01-14T09:00:00Z'
  },
  {
    id: 'n4',
    userId: 'provider-1',
    title: 'New Booking Request',
    message: 'Sarah Johnson requested your car wash service for Jan 25',
    type: 'booking',
    read: false,
    createdAt: '2024-01-16T16:45:00Z',
    actionUrl: '/provider/dashboard'
  },
  {
    id: 'n5',
    userId: 'provider-1',
    title: 'Achievement Unlocked!',
    message: 'Congratulations! You earned the "On Time Champion" badge',
    type: 'system',
    read: false,
    createdAt: '2024-01-10T14:30:00Z'
  }
];

export const mockCommunityStories: CommunityStory[] = [
  {
    id: 'cs1',
    userId: 'p1',
    userName: 'Mike Johnson',
    userAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    userType: 'provider',
    content: 'Amazing day! Just completed my 450th car detailing job with Famaserv. Thank you to all my wonderful customers for trusting me with their vehicles. Here\'s to many more shining cars! 🚗✨',
    images: ['https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800'],
    likes: 156,
    comments: 23,
    createdAt: '2024-01-15T16:30:00Z',
    category: 'milestone'
  },
  {
    id: 'cs2',
    userId: 'customer-2',
    userName: 'Sarah Johnson',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer2',
    userType: 'customer',
    content: 'Huge shoutout to Sarah Chen from Clean Pro! She deep-cleaned my entire apartment before my family visited, and it was absolutely spotless. Professional, friendly, and eco-conscious. Highly recommend! 🌟',
    images: [],
    likes: 89,
    comments: 12,
    createdAt: '2024-01-14T11:20:00Z',
    category: 'testimonial'
  },
  {
    id: 'cs3',
    userId: 'p3',
    userName: 'John Martinez',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    userType: 'provider',
    content: 'Emergency call at 2 AM - water heater burst at a family home. Got there in 15 minutes and had everything fixed by 5 AM. This is why I love what I do - helping people when they need it most! 💪',
    images: [],
    likes: 234,
    comments: 45,
    createdAt: '2024-01-13T05:30:00Z',
    category: 'achievement'
  },
  {
    id: 'cs4',
    userId: 'p5',
    userName: 'Priya Sharma',
    userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    userType: 'provider',
    content: 'Made another bride feel beautiful on her special day! 👰 This is my 100th bridal makeup service through Famaserv. Grateful for every single opportunity to be part of such precious moments. ✨',
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800'],
    likes: 412,
    comments: 67,
    createdAt: '2024-01-11T20:00:00Z',
    category: 'milestone'
  },
  {
    id: 'cs5',
    userId: 'customer-1',
    userName: 'John Customer',
    userAvatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer1',
    userType: 'customer',
    content: 'Alex Rivera just finished painting my home office and WOW! The color consultation was spot-on, and the execution was flawless. My productivity space has never looked better! 🎨',
    images: ['https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800'],
    likes: 67,
    comments: 8,
    createdAt: '2024-01-09T14:45:00Z',
    category: 'testimonial'
  },
  {
    id: 'cs6',
    userId: 'p6',
    userName: 'David Park',
    userAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    userType: 'provider',
    content: 'Just wrapped up a backyard transformation project! Turned a plain lawn into a sustainable garden oasis with native plants and a beautiful irrigation system. The family is thrilled! 🌿🌺',
    images: ['https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800'],
    likes: 198,
    comments: 31,
    createdAt: '2024-01-08T17:30:00Z',
    category: 'achievement'
  },
  {
    id: 'cs7',
    userId: 'p7',
    userName: 'Lisa Thompson',
    userAvatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    userType: 'provider',
    content: 'Helped a small business recover their critical data after a hard drive failure today. Seeing their relief was priceless! Remember folks - always backup your data! 💻🛡️',
    images: [],
    likes: 145,
    comments: 19,
    createdAt: '2024-01-07T19:15:00Z',
    category: 'community'
  }
];
