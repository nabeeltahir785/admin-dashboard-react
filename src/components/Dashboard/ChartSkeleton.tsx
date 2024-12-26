import React from 'react';
import { Skeleton } from '../common/Skeleton';

interface ChartSkeletonProps {
  title?: string;
  height?: string;
}

export const ChartSkeleton: React.FC<ChartSkeletonProps> = ({ 
  title = 'Loading...',
  height = 'h-[300px]'
}) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <Skeleton className={`w-full ${height} rounded-md`} />
  </div>
);