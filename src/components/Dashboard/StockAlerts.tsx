import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useStockAlerts } from '../../hooks/useStockAlerts';

export const StockAlerts: React.FC = () => {
  const { alerts, loading } = useStockAlerts();

  if (loading) {
    return (
      <div className="animate-pulse h-[200px] bg-gray-100 dark:bg-gray-800 rounded-lg" />
    );
  }

  return (
    <div className="card p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Low Stock Alerts</h2>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className="flex items-center p-2 bg-red-50 dark:bg-red-900/20 
              text-red-700 dark:text-red-300 rounded-md"
          >
            <AlertTriangle className="w-4 h-4 mr-2" />
            <span>{alert.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
};