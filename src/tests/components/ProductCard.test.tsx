import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../components/ProductList/ProductCard';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 99.99,
  category: 'electronics',
  status: 'active' as const,
  imageUrl: '',
  order: 1,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <DndProvider backend={HTML5Backend}>{children}</DndProvider>
);

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(
      <ProductCard
        product={mockProduct}
        index={0}
        onReorder={() => {}}
        onSelect={() => {}}
        isSelected={false}
      />,
      { wrapper }
    );

    expect(screen.getByText(mockProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.status)).toBeInTheDocument();
  });

  it('handles selection', () => {
    const onSelect = vi.fn();
    render(
      <ProductCard
        product={mockProduct}
        index={0}
        onReorder={() => {}}
        onSelect={onSelect}
        isSelected={false}
      />,
      { wrapper }
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(onSelect).toHaveBeenCalledWith(mockProduct.id);
  });

  it('shows selected state', () => {
    render(
      <ProductCard
        product={mockProduct}
        index={0}
        onReorder={() => {}}
        onSelect={() => {}}
        isSelected={true}
      />,
      { wrapper }
    );

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(true);
  });
});