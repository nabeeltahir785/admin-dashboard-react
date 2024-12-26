import React, { Suspense } from 'react';
import { ErrorBoundary } from '../components/error/ErrorBoundary';
import { SuspenseFallback } from '../components/loading/SuspenseFallback';
import { ProductGrid } from '../components/ProductList/ProductGrid';
import { ProductFiltersPanel } from '../components/ProductList/ProductFilters';
import { BulkActions } from '../components/ProductList/BulkActions';
import { useProducts } from '../context/ProductContext';
import { useProductFilters } from '../hooks/useProductFilters';
import { useProductActions } from '../hooks/useProductActions';
import { Plus } from 'lucide-react';

const ProductsPage: React.FC = () => {
  const { state, dispatch } = useProducts();
  const { products, filters, selectedProducts } = state;
  const filteredProducts = useProductFilters(products, filters);
  const actions = useProductActions();

  const handleFilterChange = (newFilters: typeof filters) => {
    dispatch({ type: 'UPDATE_FILTERS', payload: newFilters });
  };

  return (
    <ErrorBoundary>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Products
          </h1>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </button>
        </div>

        <ProductFiltersPanel 
          filters={filters} 
          onFilterChange={handleFilterChange} 
        />

        <Suspense fallback={<SuspenseFallback message="Loading products..." />}>
          <ProductGrid
            products={filteredProducts}
            onReorder={actions.handleReorder}
            onSelect={actions.handleSelect}
            selectedProducts={selectedProducts}
          />
        </Suspense>

        <BulkActions
          selectedCount={selectedProducts.size}
          onDelete={() => actions.handleBulkDelete([...selectedProducts])}
          onStatusUpdate={(status) => actions.handleBulkStatusUpdate([...selectedProducts], status)}
          onCategoryUpdate={(category) => actions.handleBulkCategoryUpdate([...selectedProducts], category)}
        />
      </div>
    </ErrorBoundary>
  );
};

export default ProductsPage;