import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockUsers, MockUser } from '@/data/mockAuth';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: MockUser | null;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string, name: string, isProvider: boolean) => boolean;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<MockUser | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const savedUser = localStorage.getItem('mockUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    const foundUser = mockUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('mockUser', JSON.stringify(foundUser));
      toast({
        title: 'Welcome back!',
        description: `Logged in as ${foundUser.name}`,
      });
      return true;
    }

    toast({
      title: 'Login failed',
      description: 'Invalid email or password',
      variant: 'destructive',
    });
    return false;
  };

  const signup = (email: string, password: string, name: string, isProvider: boolean) => {
    const existingUser = mockUsers.find(u => u.email === email);
    
    if (existingUser) {
      toast({
        title: 'Signup failed',
        description: 'Email already exists',
        variant: 'destructive',
      });
      return false;
    }

    const newUser: MockUser = {
      id: `${isProvider ? 'provider' : 'customer'}-${Date.now()}`,
      email,
      password,
      name,
      role: isProvider ? 'provider' : 'customer',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`
    };

    mockUsers.push(newUser);
    setUser(newUser);
    localStorage.setItem('mockUser', JSON.stringify(newUser));
    
    toast({
      title: 'Account created!',
      description: `Welcome ${name}`,
    });
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mockUser');
    toast({
      title: 'Logged out',
      description: 'See you soon!',
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
