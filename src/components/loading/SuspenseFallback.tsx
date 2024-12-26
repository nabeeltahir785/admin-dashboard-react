import React from 'react';
import { Loader2 } from 'lucide-react';

interface SuspenseFallbackProps {
  message?: string;
}

export const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ 
  message = 'Loading...' 
}) => (
  <div className="flex flex-col items-center justify-center min-h-[400px]">
    <Loader2 className="w-8 h-8 animate-spin text-blue-600 mb-4" />
    <p className="text-gray-600 dark:text-gray-400">{message}</p>
  </div>
);