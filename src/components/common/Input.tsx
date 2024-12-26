import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  onChange: (value: string) => void;
}

export const Input = React.memo<InputProps>(({
  label,
  error,
  icon: Icon,
  onChange,
  className = '',
  ...props
}) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
    )}
    <div className="relative">
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Icon className="h-5 w-5 text-gray-400" />
        </div>
      )}
      <input
        className={`block w-full rounded-md border-gray-300 shadow-sm
          focus:ring-blue-500 focus:border-blue-500 sm:text-sm
          ${Icon ? 'pl-10' : 'pl-3'} ${error ? 'border-red-300' : ''} ${className}`}
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </div>
    {error && (
      <p className="mt-1 text-sm text-red-600">{error}</p>
    )}
  </div>
));

Input.displayName = 'Input';