export type CategoryType = 
  | 'auto-care'
  | 'home-cleaning'
  | 'plumbing-electrical'
  | 'handyman-repairs'
  | 'beauty-wellness'
  | 'gardening-outdoor'
  | 'appliances-it';

export interface Category {
  id: CategoryType;
  name: string;
  description: string;
  icon: string;
  services: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  category: CategoryType;
  priceRange?: {
    min: number;
    max: number;
  };
  images: string[];
  location: string;
  rating: number;
  reviewCount: number;
  providerId: string;
}

export interface Provider {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  skills: string[];
  location: string;
  rating: number;
  reviewCount: number;
  completedJobs: number;
  memberSince: string;
  verified: boolean;
  reels: Reel[];
  stories: Story[];
}

export interface Reel {
  id: string;
  providerId: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  caption: string;
  likes: number;
  createdAt: string;
}

export interface Story {
  id: string;
  providerId: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  expiresAt: string;
  createdAt: string;
}

export interface Review {
  id: string;
  serviceId: string;
  providerId: string;
  customerName: string;
  customerAvatar: string;
  rating: number;
  comment: string;
  createdAt: string;
}
