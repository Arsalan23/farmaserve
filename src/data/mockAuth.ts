export interface MockUser {
  id: string;
  email: string;
  password: string;
  role: 'customer' | 'provider';
  name: string;
  avatar?: string;
}

export const mockUsers: MockUser[] = [
  // Customers
  {
    id: 'customer-1',
    email: 'customer@test.com',
    password: 'customer123',
    role: 'customer',
    name: 'John Customer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer1'
  },
  {
    id: 'customer-2',
    email: 'sarah@test.com',
    password: 'sarah123',
    role: 'customer',
    name: 'Sarah Johnson',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=customer2'
  },
  
  // Providers
  {
    id: 'provider-1',
    email: 'provider@test.com',
    password: 'provider123',
    role: 'provider',
    name: 'Mike Auto Care',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 'provider-2',
    email: 'sarah.clean@test.com',
    password: 'clean123',
    role: 'provider',
    name: 'Sarah Clean Pro',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 'provider-3',
    email: 'tom.plumber@test.com',
    password: 'plumb123',
    role: 'provider',
    name: 'Tom Plumber',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  },
];
