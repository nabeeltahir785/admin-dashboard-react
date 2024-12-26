import React from 'react';
import { ProductCardSkeleton } from './ProductCardSkeleton';

interface ProductGridSkeletonProps {
  count?: number;
}

export const ProductGridSkeleton: React.FC<ProductGridSkeletonProps> = ({ 
  count = 8 
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    {Array.from({ length: count }).map((_, index) => (
      <div 
        key={index}
        className="animate-fadeIn"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <ProductCardSkeleton />
      </div>
    ))}
  </div>
);