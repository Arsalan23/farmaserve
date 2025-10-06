import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./components/theme-provider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetails from "./pages/ServiceDetails";
import ProviderProfile from "./pages/ProviderProfile";
import SearchResults from "./pages/SearchResults";
import Auth from "./pages/Auth";
import RoleSelection from "./pages/RoleSelection";
import ProviderLayout from "./components/layout/ProviderLayout";
import Dashboard from "./pages/provider/Dashboard";
import Services from "./pages/provider/Services";
import AddService from "./pages/provider/AddService";
import Reels from "./pages/provider/Reels";
import AddReel from "./pages/provider/AddReel";
import Analytics from "./pages/provider/Analytics";
import Subscription from "./pages/provider/Subscription";
import Payment from "./pages/provider/Payment";
import CustomerLayout from "./components/layout/CustomerLayout";
import CustomerDashboard from "./pages/customer/Dashboard";
import Bookings from "./pages/customer/Bookings";
import Favorites from "./pages/customer/Favorites";
import Messages from "./pages/customer/Messages";
import CustomerReviews from "./pages/customer/Reviews";
import CustomerProfile from "./pages/customer/Profile";
import { useScrollToTop } from "./hooks/useScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => {
  useScrollToTop();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/service/:id" element={<ServiceDetails />} />
      <Route path="/provider/:id" element={<ProviderProfile />} />
      <Route path="/auth" element={<Auth />} />
      
      {/* Provider Routes */}
      <Route path="/provider" element={<ProviderLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<Services />} />
        <Route path="services/new" element={<AddService />} />
        <Route path="reels" element={<Reels />} />
        <Route path="reels/new" element={<AddReel />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="payment" element={<Payment />} />
      </Route>

      {/* Customer Routes */}
      <Route path="/customer" element={<CustomerLayout />}>
        <Route path="dashboard" element={<CustomerDashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="messages" element={<Messages />} />
        <Route path="reviews" element={<CustomerReviews />} />
        <Route path="profile" element={<CustomerProfile />} />
      </Route>
      
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="famaserv-ui-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AppContent />
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
