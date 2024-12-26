import React, { Suspense } from 'react';
import { Product } from '../../types/product';
import { ProductCard } from './ProductCard';
import { ProductGridSkeleton } from './ProductGridSkeleton';
import { transitions } from '../../utils/animations';

interface ProductGridProps {
  products: Product[];
  onReorder: (dragIndex: number, hoverIndex: number) => void;
  onSelect: (productId: string) => void;
  selectedProducts: Set<string>;
  loading?: boolean;
}

export const ProductGrid = React.memo<ProductGridProps>(({
  products,
  onReorder,
  onSelect,
  selectedProducts,
  loading = false
}) => {
  if (loading) {
    return <ProductGridSkeleton />;
  }

  return (
    <div className={`
      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4
      ${transitions.medium}
    `}>
      <Suspense fallback={<ProductGridSkeleton />}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="animate-scaleIn"
            style={{
              animationDelay: `${index * 50}ms`,
            }}
          >
            <ProductCard
              product={product}
              index={index}
              onReorder={onReorder}
              onSelect={onSelect}
              isSelected={selectedProducts.has(product.id)}
            />
          </div>
        ))}
      </Suspense>
    </div>
  );
});

ProductGrid.displayName = 'ProductGrid';