import { Category, Service, Provider, Review } from '@/types';

export const categories: Category[] = [
  {
    id: 'auto-care',
    name: 'Auto Care',
    description: 'Professional car care services',
    icon: 'Car',
    services: ['Car Wash', 'Detailing', 'Interior Cleaning', 'Exterior Cleaning', 'Ceramic Coating', 'Mobile Wash']
  },
  {
    id: 'home-cleaning',
    name: 'Home Cleaning',
    description: 'Keep your home spotless',
    icon: 'Home',
    services: ['Regular Cleaning', 'Deep Cleaning', 'Move-in/out', 'Window Cleaning', 'Carpet Cleaning']
  },
  {
    id: 'plumbing-electrical',
    name: 'Plumbing & Electrical',
    description: 'Expert home maintenance',
    icon: 'Wrench',
    services: ['Leak Fix', 'Installations', 'Rewiring', 'Switchboards', 'Emergency Repairs']
  },
  {
    id: 'handyman-repairs',
    name: 'Handyman & Repairs',
    description: 'Fix it all',
    icon: 'Hammer',
    services: ['Furniture Assembly', 'Minor Fixes', 'Painting', 'Drywall', 'Door Repair']
  },
  {
    id: 'beauty-wellness',
    name: 'Beauty & Wellness',
    description: 'Beauty services at home',
    icon: 'Sparkles',
    services: ['Salon at Home', 'Hair', 'Makeup', 'Nails', 'Massage']
  },
  {
    id: 'gardening-outdoor',
    name: 'Gardening & Outdoor',
    description: 'Transform your outdoor space',
    icon: 'Trees',
    services: ['Lawn Mowing', 'Hedge Trimming', 'Landscaping', 'Gutter Clean', 'Tree Service']
  },
  {
    id: 'appliances-it',
    name: 'Appliances & IT',
    description: 'Tech and appliance experts',
    icon: 'Laptop',
    services: ['Appliance Install', 'Appliance Repair', 'Phone Repair', 'PC Repair', 'Wi-Fi Setup']
  }
];

export const heroBannerImages = [
  'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80',
  'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80',
  'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=1920&q=80',
  'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=1920&q=80'
];

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Premium Car Detailing',
    description: 'Full interior and exterior detailing with ceramic coating option',
    category: 'auto-care',
    priceRange: { min: 150, max: 300 },
    images: [
      'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
      'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800',
      'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800'
    ],
    location: 'Los Angeles, CA',
    rating: 4.9,
    reviewCount: 127,
    providerId: 'p1'
  },
  {
    id: '2',
    title: 'Deep Home Cleaning',
    description: 'Comprehensive deep cleaning service for your entire home',
    category: 'home-cleaning',
    priceRange: { min: 100, max: 250 },
    images: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800'
    ],
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 89,
    providerId: 'p2'
  },
  {
    id: '3',
    title: 'Emergency Plumbing',
    description: '24/7 emergency plumbing services for all your needs',
    category: 'plumbing-electrical',
    priceRange: { min: 80, max: 200 },
    images: [
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?w=800'
    ],
    location: 'New York, NY',
    rating: 4.7,
    reviewCount: 156,
    providerId: 'p3'
  },
  {
    id: '4',
    title: 'Professional Painting',
    description: 'Interior and exterior painting with premium materials',
    category: 'handyman-repairs',
    priceRange: { min: 200, max: 500 },
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800'
    ],
    location: 'Austin, TX',
    rating: 4.9,
    reviewCount: 73,
    providerId: 'p4'
  },
  {
    id: '5',
    title: 'Salon at Home',
    description: 'Full salon experience in the comfort of your home',
    category: 'beauty-wellness',
    priceRange: { min: 50, max: 150 },
    images: [
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800'
    ],
    location: 'Miami, FL',
    rating: 5.0,
    reviewCount: 94,
    providerId: 'p5'
  },
  {
    id: '6',
    title: 'Landscape Design',
    description: 'Transform your outdoor space with professional landscaping',
    category: 'gardening-outdoor',
    priceRange: { min: 300, max: 1000 },
    images: [
      'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800',
      'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800'
    ],
    location: 'Seattle, WA',
    rating: 4.8,
    reviewCount: 62,
    providerId: 'p6'
  },
  {
    id: '7',
    title: 'Computer Repair & Setup',
    description: 'Expert computer repair and network setup services',
    category: 'appliances-it',
    priceRange: { min: 60, max: 150 },
    images: [
      'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800',
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800'
    ],
    location: 'Boston, MA',
    rating: 4.9,
    reviewCount: 118,
    providerId: 'p7'
  },
  {
    id: '8',
    title: 'Mobile Car Wash',
    description: 'Professional car wash at your location',
    category: 'auto-care',
    priceRange: { min: 40, max: 80 },
    images: [
      'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?w=800',
      'https://images.unsplash.com/photo-1621261764721-4b8d95b375c5?w=800'
    ],
    location: 'Los Angeles, CA',
    rating: 4.6,
    reviewCount: 201,
    providerId: 'p1'
  }
];

export const mockProviders: Provider[] = [
  {
    id: 'p1',
    name: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
    bio: 'Professional auto detailer with 10+ years of experience. Passionate about making every car shine like new.',
    skills: ['Car Detailing', 'Ceramic Coating', 'Paint Correction', 'Interior Restoration'],
    location: 'Los Angeles, CA',
    rating: 4.9,
    reviewCount: 127,
    completedJobs: 450,
    memberSince: '2020-01-15',
    verified: true,
    reels: [
      {
        id: 'r1',
        providerId: 'p1',
        mediaUrl: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800',
        mediaType: 'image',
        caption: 'Before and after ceramic coating transformation!',
        likes: 245,
        createdAt: '2024-01-10T14:30:00Z'
      },
      {
        id: 'r2',
        providerId: 'p1',
        mediaUrl: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800',
        mediaType: 'image',
        caption: 'Interior detailing perfection ✨',
        likes: 189,
        createdAt: '2024-01-08T10:15:00Z'
      }
    ],
    stories: [
      {
        id: 's1',
        providerId: 'p1',
        mediaUrl: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800',
        mediaType: 'image',
        expiresAt: '2024-01-16T14:30:00Z',
        createdAt: '2024-01-15T14:30:00Z'
      }
    ]
  },
  {
    id: 'p2',
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Certified cleaning specialist focused on eco-friendly solutions. Creating healthy, spotless homes.',
    skills: ['Deep Cleaning', 'Move-out Cleaning', 'Carpet Care', 'Eco-Friendly Methods'],
    location: 'San Francisco, CA',
    rating: 4.8,
    reviewCount: 89,
    completedJobs: 320,
    memberSince: '2019-06-20',
    verified: true,
    reels: [
      {
        id: 'r3',
        providerId: 'p2',
        mediaUrl: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
        mediaType: 'image',
        caption: 'Deep clean transformation - kitchen edition',
        likes: 312,
        createdAt: '2024-01-12T16:20:00Z'
      }
    ],
    stories: []
  },
  {
    id: 'p3',
    name: 'John Martinez',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
    bio: 'Licensed plumber with 15+ years experience. Available 24/7 for emergencies.',
    skills: ['Emergency Repairs', 'Leak Detection', 'Pipe Installation', 'Water Heaters'],
    location: 'New York, NY',
    rating: 4.7,
    reviewCount: 156,
    completedJobs: 580,
    memberSince: '2018-03-10',
    verified: true,
    reels: [],
    stories: []
  },
  {
    id: 'p4',
    name: 'Alex Rivera',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Professional painter specializing in residential and commercial projects.',
    skills: ['Interior Painting', 'Exterior Painting', 'Color Consultation', 'Wallpaper'],
    location: 'Austin, TX',
    rating: 4.9,
    reviewCount: 73,
    completedJobs: 290,
    memberSince: '2020-08-22',
    verified: true,
    reels: [
      {
        id: 'r4',
        providerId: 'p4',
        mediaUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800',
        mediaType: 'image',
        caption: 'Living room makeover complete!',
        likes: 167,
        createdAt: '2024-01-09T12:00:00Z'
      }
    ],
    stories: []
  },
  {
    id: 'p5',
    name: 'Priya Sharma',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Licensed cosmetologist bringing salon-quality beauty services to your home.',
    skills: ['Hair Styling', 'Makeup', 'Nails', 'Bridal Services'],
    location: 'Miami, FL',
    rating: 5.0,
    reviewCount: 94,
    completedJobs: 420,
    memberSince: '2019-11-05',
    verified: true,
    reels: [
      {
        id: 'r5',
        providerId: 'p5',
        mediaUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800',
        mediaType: 'image',
        caption: 'Bridal makeup transformation ✨',
        likes: 523,
        createdAt: '2024-01-11T09:30:00Z'
      }
    ],
    stories: []
  },
  {
    id: 'p6',
    name: 'David Park',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
    bio: 'Landscape architect creating beautiful outdoor living spaces.',
    skills: ['Landscape Design', 'Garden Maintenance', 'Irrigation', 'Hardscaping'],
    location: 'Seattle, WA',
    rating: 4.8,
    reviewCount: 62,
    completedJobs: 180,
    memberSince: '2021-02-14',
    verified: true,
    reels: [],
    stories: []
  },
  {
    id: 'p7',
    name: 'Lisa Thompson',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
    bio: 'IT specialist providing computer repair and network solutions.',
    skills: ['Computer Repair', 'Network Setup', 'Data Recovery', 'Software Installation'],
    location: 'Boston, MA',
    rating: 4.9,
    reviewCount: 118,
    completedJobs: 340,
    memberSince: '2020-05-18',
    verified: true,
    reels: [],
    stories: []
  }
];

export const mockReviews: Review[] = [
  {
    id: 'rev1',
    serviceId: '1',
    providerId: 'p1',
    customerName: 'John Doe',
    customerAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400',
    rating: 5,
    comment: 'Excellent service! My car looks brand new. Mike was professional and detail-oriented.',
    createdAt: '2024-01-15T10:30:00Z'
  },
  {
    id: 'rev2',
    serviceId: '1',
    providerId: 'p1',
    customerName: 'Robert Wilson',
    customerAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400',
    rating: 5,
    comment: 'Best detailing service I\'ve ever used. Worth every penny!',
    createdAt: '2024-01-12T16:45:00Z'
  },
  {
    id: 'rev3',
    serviceId: '2',
    providerId: 'p2',
    customerName: 'Emily Smith',
    customerAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
    rating: 5,
    comment: 'Very thorough and professional. Highly recommend! Sarah is amazing.',
    createdAt: '2024-01-10T14:20:00Z'
  },
  {
    id: 'rev4',
    serviceId: '2',
    providerId: 'p2',
    customerName: 'Michael Brown',
    customerAvatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
    rating: 4,
    comment: 'Great cleaning service. House was spotless. Only minor delay in arrival.',
    createdAt: '2024-01-08T11:15:00Z'
  },
  {
    id: 'rev5',
    serviceId: '3',
    providerId: 'p3',
    customerName: 'Jennifer Garcia',
    customerAvatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400',
    rating: 5,
    comment: 'John saved the day! Fixed our emergency plumbing issue quickly.',
    createdAt: '2024-01-14T09:00:00Z'
  },
  {
    id: 'rev6',
    serviceId: '4',
    providerId: 'p4',
    customerName: 'David Lee',
    customerAvatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400',
    rating: 5,
    comment: 'Alex did an outstanding job painting our home. Highly professional!',
    createdAt: '2024-01-13T15:30:00Z'
  },
  {
    id: 'rev7',
    serviceId: '5',
    providerId: 'p5',
    customerName: 'Jessica Martinez',
    customerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
    rating: 5,
    comment: 'Priya is incredible! Made me feel like a queen on my wedding day.',
    createdAt: '2024-01-11T10:00:00Z'
  },
  {
    id: 'rev8',
    serviceId: '6',
    providerId: 'p6',
    customerName: 'Thomas Anderson',
    customerAvatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400',
    rating: 4,
    comment: 'David transformed our backyard. Very creative and professional.',
    createdAt: '2024-01-09T13:45:00Z'
  },
  {
    id: 'rev9',
    serviceId: '7',
    providerId: 'p7',
    customerName: 'Amanda White',
    customerAvatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400',
    rating: 5,
    comment: 'Lisa fixed my computer issues quickly and explained everything clearly.',
    createdAt: '2024-01-07T14:30:00Z'
  }
];
