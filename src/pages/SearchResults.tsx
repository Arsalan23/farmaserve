import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { mockServices, categories } from '@/data/mockData';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/home/Footer';
import { ServiceCard } from '@/components/home/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { CategoryType } from '@/types';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | 'all'>(
    (searchParams.get('category') as CategoryType) || 'all'
  );
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [showFilters, setShowFilters] = useState(false);

  // Filter services
  const filteredServices = mockServices.filter(service => {
    const matchesSearch = searchQuery.trim() === '' || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesRating = ratingFilter === 0 || service.rating >= ratingFilter;
    
    return matchesSearch && matchesCategory && matchesRating;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchQuery) params.set('q', searchQuery);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);
    setSearchParams(params);
  };

  const handleServiceClick = () => {
    console.log('Service clicked - will redirect to login');
  };

  const clearFilters = () => {
    setSelectedCategory('all');
    setRatingFilter(0);
    setSearchQuery('');
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-4">
        {/* Search Bar */}
        <section className="bg-gradient-to-br from-primary/10 via-primary/5 to-background py-8 border-b">
          <div className="container mx-auto px-4">
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search for services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2">
                  <Search className="h-5 w-5" />
                  Search
                </Button>
                <Button 
                  type="button"
                  variant="outline" 
                  size="lg"
                  onClick={() => setShowFilters(!showFilters)}
                  className="gap-2"
                >
                  <SlidersHorizontal className="h-5 w-5" />
                  Filters
                </Button>
              </div>
            </form>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <aside className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <Card>
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Filters</h3>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 text-xs"
                    >
                      Clear All
                    </Button>
                  </div>

                  {/* Category Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Category</h4>
                    <div className="space-y-2">
                      <Badge
                        variant={selectedCategory === 'all' ? 'default' : 'outline'}
                        className="cursor-pointer w-full justify-start"
                        onClick={() => setSelectedCategory('all')}
                      >
                        All Categories
                      </Badge>
                      {categories.map((category) => (
                        <Badge
                          key={category.id}
                          variant={selectedCategory === category.id ? 'default' : 'outline'}
                          className="cursor-pointer w-full justify-start"
                          onClick={() => setSelectedCategory(category.id)}
                        >
                          {category.icon} {category.name}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Rating Filter */}
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Minimum Rating</h4>
                    <div className="space-y-3">
                      <Slider
                        value={[ratingFilter]}
                        onValueChange={(value) => setRatingFilter(value[0])}
                        max={5}
                        step={0.5}
                        className="w-full"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Any</span>
                        <span className="font-semibold">{ratingFilter > 0 ? `${ratingFilter}+ ⭐` : 'Any'}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Results */}
            <div className="flex-1 space-y-6">
              {/* Results Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold">
                    {searchQuery ? `Results for "${searchQuery}"` : 'All Services'}
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''} found
                  </p>
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== 'all' || ratingFilter > 0 || searchQuery) && (
                <div className="flex flex-wrap gap-2">
                  {searchQuery && (
                    <Badge variant="secondary" className="gap-2">
                      Search: {searchQuery}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSearchQuery('')}
                      />
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="gap-2">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedCategory('all')}
                      />
                    </Badge>
                  )}
                  {ratingFilter > 0 && (
                    <Badge variant="secondary" className="gap-2">
                      {ratingFilter}+ Rating
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setRatingFilter(0)}
                      />
                    </Badge>
                  )}
                </div>
              )}

              {/* Services Grid */}
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service}
                      onClick={handleServiceClick}
                    />
                  ))}
                </div>
              ) : (
                <Card className="py-12">
                  <CardContent className="text-center">
                    <p className="text-lg text-muted-foreground">
                      No services found matching your criteria
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
