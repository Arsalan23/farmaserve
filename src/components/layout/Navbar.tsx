import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/search');
    }
  };
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-12">
            <a href="/" className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent transition-transform hover:scale-105">
              Famaserv
            </a>
            
            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="hidden lg:flex items-center relative w-[500px]">
              <Search className="absolute left-4 h-5 w-5 text-muted-foreground" />
              <Input 
                type="text"
                placeholder="What service are you looking for?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-full border-2 hover:border-primary/50 transition-colors"
              />
            </form>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-2">
            {user ? (
              <>
                <span className="text-sm font-medium hidden md:inline mr-2">
                  {user.name}
                </span>
                {user.role === 'provider' && (
                  <Button variant="ghost" onClick={() => navigate('/provider/dashboard')} className="hidden md:flex">
                    Dashboard
                  </Button>
                )}
                {user.role === 'customer' && (
                  <Button variant="ghost" onClick={() => navigate('/customer/dashboard')} className="hidden md:flex">
                    Dashboard
                  </Button>
                )}
                <Button variant="ghost" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost"
                  onClick={() => navigate('/role-selection')}
                  className="hidden md:flex text-base"
                >
                  Become a Pro
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => navigate('/role-selection')}
                  className="hidden md:flex text-base"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/role-selection')}
                  className="rounded-full px-6 hover-scale"
                >
                  Get Started
                </Button>
              </>
            )}
            
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <form onSubmit={handleSearch} className="lg:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Search services..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 rounded-full"
            />
          </div>
        </form>
      </div>
    </nav>
  );
};
