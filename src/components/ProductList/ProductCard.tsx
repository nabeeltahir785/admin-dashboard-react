import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Product } from '../../types/product';
import { ImageIcon, DollarSign, Tag, Clock } from 'lucide-react';
import { transitions } from '../../utils/animations';

interface ProductCardProps {
  product: Product;
  index: number;
  onReorder: (dragIndex: number, hoverIndex: number) => void;
  onSelect: (productId: string) => void;
  isSelected: boolean;
}

export const ProductCard = React.memo<ProductCardProps>(({ 
  product, 
  index, 
  onReorder, 
  onSelect, 
  isSelected 
}) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'PRODUCT',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: 'PRODUCT',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        onReorder(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className={`
        relative p-4 rounded-lg card
        ${transitions.medium}
        ${isDragging ? 'opacity-50 scale-105' : 'opacity-100 scale-100'}
        ${isSelected ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900' : 'border'}
        hover:shadow-lg dark:hover:shadow-none dark:hover:border-gray-700
        hover:translate-y-[-2px] cursor-move
      `}
    >
      <div className="absolute top-2 right-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(product.id)}
          className={`
            h-4 w-4 text-blue-600 rounded border-gray-300 dark:border-gray-600
            ${transitions.fast}
            focus:ring-blue-500 hover:border-blue-400
          `}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      
      <div className="aspect-square mb-4 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center justify-center overflow-hidden">
        {product.imageUrl ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            className={`
              w-full h-full object-cover rounded-md
              ${transitions.medium}
              hover:scale-105
            `}
            loading="lazy"
          />
        ) : (
          <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-500" />
        )}
      </div>

      <h3 className="font-medium text-gray-900 dark:text-gray-100 truncate">
        {product.name}
      </h3>
      
      <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-2">
        <DollarSign className="w-4 h-4" />
        <span>${product.price.toFixed(2)}</span>
      </div>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Tag className="w-4 h-4 mr-1" />
          <span>{product.category}</span>
        </div>
        <span className={`
          px-2 py-1 text-xs rounded-full ${transitions.medium}
          ${product.status === 'active' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' : ''}
          ${product.status === 'draft' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300' : ''}
          ${product.status === 'archived' ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300' : ''}
        `}>
          {product.status}
        </span>
      </div>

      <div className="mt-2 flex items-center text-xs text-gray-400 dark:text-gray-500">
        <Clock className="w-3 h-3 mr-1" />
        <span>Updated {new Date(product.updatedAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';