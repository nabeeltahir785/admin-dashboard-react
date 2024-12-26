import React, { useCallback } from 'react';
import { Search, Filter } from 'lucide-react';
import { ProductFilters } from '../../types/product';
import { transitions } from '../../utils/animations';

interface ProductFiltersPanelProps {
  filters: ProductFilters;
  onFilterChange: (filters: ProductFilters) => void;
}

export const ProductFiltersPanel: React.FC<ProductFiltersPanelProps> = ({
  filters,
  onFilterChange,
}) => {
  const handleSearchChange = useCallback((value: string) => {
    onFilterChange({ ...filters, search: value });
  }, [filters, onFilterChange]);

  const handleCategoryChange = useCallback((value: string) => {
    onFilterChange({ ...filters, category: value });
  }, [filters, onFilterChange]);

  const handleStatusChange = useCallback((value: string) => {
    onFilterChange({ ...filters, status: value });
  }, [filters, onFilterChange]);

  const handlePriceChange = useCallback((type: 'min' | 'max', value: string) => {
    const numValue = value === '' ? 0 : Number(value);
    onFilterChange({
      ...filters,
      [type === 'min' ? 'minPrice' : 'maxPrice']: numValue,
    });
  }, [filters, onFilterChange]);

  const inputClasses = `
    w-full px-3 py-2 
    bg-white dark:bg-dark-paper
    border border-gray-300 dark:border-dark-border
    text-gray-900 dark:text-gray-100
    rounded-md
    placeholder-gray-400 dark:placeholder-gray-500
    ${transitions.fast}
    focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400
  `;

  return (
    <div className="card p-4 rounded-lg">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Search products..."
            className={`${inputClasses} pl-10`}
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <select
            className={inputClasses}
            value={filters.category}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="books">Books</option>
          </select>

          <select
            className={inputClasses}
            value={filters.status}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>

          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              className={inputClasses}
              value={filters.minPrice || ''}
              onChange={(e) => handlePriceChange('min', e.target.value)}
            />
            <input
              type="number"
              placeholder="Max"
              className={inputClasses}
              value={filters.maxPrice || ''}
              onChange={(e) => handlePriceChange('max', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};