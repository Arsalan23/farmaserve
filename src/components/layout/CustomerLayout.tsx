import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { Home, Calendar, Heart, User, MessageSquare, Star, Bell, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { ThemeToggle } from '@/components/theme-toggle';

export default function CustomerLayout() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const navItems = [
    { to: '/customer/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/customer/bookings', icon: Calendar, label: 'Bookings' },
    { to: '/customer/favorites', icon: Heart, label: 'Favorites' },
    // { to: '/customer/messages', icon: MessageSquare, label: 'Messages' },
    { to: '/customer/reviews', icon: Star, label: 'Reviews' },
    { to: '/customer/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 border-r bg-card z-50">
        <div className="p-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Famaserv
          </h2>
          <p className="text-sm text-muted-foreground mt-1">Customer Portal</p>
        </div>

        <nav className="px-3 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted text-muted-foreground'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-4 border-t bg-card space-y-2">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={user?.avatar}
              alt={user?.name}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground">Customer</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full justify-start"
            onClick={() => navigate('/')}
          >
            <Home className="h-4 w-4 mr-2" />
            View Site
          </Button>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content with left margin to account for fixed sidebar */}
      <main className="ml-64">
        <Outlet />
      </main>
    </div>
  );
}
