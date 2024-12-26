import React from 'react';
import { Skeleton } from '../common/Skeleton';

export const ProductCardSkeleton: React.FC = () => (
  <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="aspect-square mb-4">
      <Skeleton className="w-full h-full rounded-md" />
    </div>
    
    <Skeleton className="h-5 w-3/4 mb-2" />
    
    <div className="flex items-center space-x-2 mb-2">
      <Skeleton className="h-4 w-4" />
      <Skeleton className="h-4 w-16" />
    </div>
    
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center space-x-1">
        <Skeleton className="h-4 w-4" />
        <Skeleton className="h-4 w-20" />
      </div>
      <Skeleton className="h-6 w-16 rounded-full" />
    </div>
    
    <div className="flex items-center space-x-1">
      <Skeleton className="h-3 w-3" />
      <Skeleton className="h-3 w-24" />
    </div>
  </div>
);