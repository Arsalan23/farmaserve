import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Category } from '@/types';
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  category: Category;
  onClick?: () => void;
}

export const CategoryCard = ({ category }: CategoryCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/search?category=${category.name}`);
  };

  // Get the icon component from lucide-react
  const IconComponent = Icons[category.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  
  return (
    <Card 
      className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-2 group border-2 hover:border-primary/50"
      onClick={handleClick}
    >
      <CardContent className="p-8 text-center space-y-4">
        <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-primary/20">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {category.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </div>
        <p className="text-xs text-muted-foreground pt-2">
          {category.services.length} services available
        </p>
      </CardContent>
    </Card>
  );
};
