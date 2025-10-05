import { categories } from '@/data/mockData';
import { CategoryCard } from './CategoryCard';

export const CategoriesSection = () => {
  const handleCategoryClick = () => {
    // Will redirect to login once auth is implemented
    console.log('Category clicked - will redirect to login');
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through our wide range of professional services tailored to your needs
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard 
              key={category.id} 
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
