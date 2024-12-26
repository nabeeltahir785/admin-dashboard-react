import React from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
  options: Option[];
  onChange: (value: string) => void;
  label?: string;
}

export const Select = React.memo<SelectProps>(({
  options,
  onChange,
  label,
  className = '',
  ...props
}) => (
  <div>
    {label && (
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
    )}
    <select
      className={`block w-full px-3 py-2 text-sm border border-gray-300 rounded-md 
        focus:ring-blue-500 focus:border-blue-500 ${className}`}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  </div>
));

Select.displayName = 'Select';