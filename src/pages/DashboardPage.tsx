import React, { Suspense } from 'react';
import { ErrorBoundary } from '../components/error/ErrorBoundary';
import { SuspenseFallback } from '../components/loading/SuspenseFallback';
import { DashboardGrid } from '../components/Dashboard/DashboardGrid';

const DashboardPage: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
          Dashboard
        </h1>
        <Suspense fallback={<SuspenseFallback message="Loading dashboard..." />}>
          <DashboardGrid />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
};

export default DashboardPage;