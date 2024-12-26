import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useSalesData } from '../../hooks/useSalesData';
import { useTheme } from '../../hooks/useTheme';

export const SalesChart: React.FC = () => {
  const { data, loading } = useSalesData();
  const { isDark } = useTheme();

  if (loading) {
    return (
      <div className="animate-pulse h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg" />
    );
  }

  const chartColors = {
    stroke: isDark ? '#60A5FA' : '#3B82F6', // blue-400 : blue-600
    fill: isDark ? '#2563EB33' : '#93C5FD33', // blue-600 with opacity : blue-300 with opacity
    grid: isDark ? '#333333' : '#E5E7EB', // dark gray : gray-200
    text: isDark ? '#9CA3AF' : '#4B5563', // gray-400 : gray-600
  };

  return (
    <div className="card p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Sales Trends</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={chartColors.grid} />
            <XAxis 
              dataKey="date" 
              stroke={chartColors.text}
              tick={{ fill: chartColors.text }}
            />
            <YAxis 
              stroke={chartColors.text}
              tick={{ fill: chartColors.text }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                borderColor: isDark ? '#374151' : '#E5E7EB',
                color: isDark ? '#E5E7EB' : '#111827'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="sales" 
              stroke={chartColors.stroke} 
              fill={chartColors.fill}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};