import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin } from 'lucide-react';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  onClick?: () => void;
}

export const ServiceCard = ({ service, onClick }: ServiceCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(`/service/${service.id}`);
  };
  
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden bg-secondary">
        <img 
          src={service.images[0]} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {service.priceRange && (
          <Badge className="absolute top-3 right-3 bg-background/95 backdrop-blur-sm text-foreground border-border">
            ${service.priceRange.min} - ${service.priceRange.max}
          </Badge>
        )}
      </div>

      <CardContent className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {service.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border">
          {/* Location */}
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            <span className="truncate">{service.location}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{service.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({service.reviewCount})
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
