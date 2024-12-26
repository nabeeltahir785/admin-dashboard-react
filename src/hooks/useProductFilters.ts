import { useMemo } from 'react';
import { Product, ProductFilters } from '../types/product';

export const useProductFilters = (products: Product[], filters: ProductFilters) => {
  return useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false;
      }

      // Status filter
      if (filters.status && product.status !== filters.status) {
        return false;
      }

      // Price range filter
      if (filters.minPrice && product.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false;
      }

      return true;
    });
  }, [products, filters]);
};