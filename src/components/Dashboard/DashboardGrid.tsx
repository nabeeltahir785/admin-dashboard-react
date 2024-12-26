import React, { Suspense } from 'react';
import { SalesChart } from './SalesChart';
import { CategoryPieChart } from './CategoryPieChart';
import { StockAlerts } from './StockAlerts';
import { ChartSkeleton } from './ChartSkeleton';

export const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2">
        <Suspense fallback={<ChartSkeleton title="Sales Trends" />}>
          <SalesChart />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<ChartSkeleton title="Category Distribution" />}>
          <CategoryPieChart />
        </Suspense>
      </div>
      <div>
        <Suspense fallback={<ChartSkeleton title="Stock Alerts" height="h-[200px]" />}>
          <StockAlerts />
        </Suspense>
      </div>
    </div>
  );
};