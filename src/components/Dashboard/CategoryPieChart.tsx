import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useCategoryData } from '../../hooks/useCategoryData';
import { useTheme } from '../../hooks/useTheme';

const COLORS = {
  light: ['#3B82F6', '#10B981', '#F59E0B'], // blue, green, yellow
  dark: ['#60A5FA', '#34D399', '#FBBF24'], // lighter versions for dark mode
};

export const CategoryPieChart: React.FC = () => {
  const { data, loading } = useCategoryData();
  const { isDark } = useTheme();

  const chartColors = isDark ? COLORS.dark : COLORS.light;
  const textColor = isDark ? '#9CA3AF' : '#4B5563'; // gray-400 : gray-600

  if (loading) {
    return (
      <div className="animate-pulse h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg" />
    );
  }

  return (
    <div className="card p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Category Distribution</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={{
                fill: textColor,
              }}
            >
              {data.map((_, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={chartColors[index % chartColors.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
                borderColor: isDark ? '#374151' : '#E5E7EB',
                color: isDark ? '#E5E7EB' : '#111827'
              }}
            />
            <Legend 
              formatter={(value) => (
                <span style={{ color: textColor }}>{value}</span>
              )}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};