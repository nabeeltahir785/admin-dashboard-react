import { useCallback } from 'react';
import { useProducts } from '../context/ProductContext';

export const useProductActions = () => {
  const { dispatch } = useProducts();

  const handleSelect = useCallback((productId: string) => {
    dispatch({ type: 'SELECT_PRODUCT', payload: productId });
  }, [dispatch]);

  const handleDeselect = useCallback((productId: string) => {
    dispatch({ type: 'DESELECT_PRODUCT', payload: productId });
  }, [dispatch]);

  const handleBulkDelete = useCallback((productIds: string[]) => {
    dispatch({ type: 'DELETE_PRODUCTS', payload: productIds });
  }, [dispatch]);

  const handleBulkStatusUpdate = useCallback((ids: string[], status: string) => {
    dispatch({ type: 'UPDATE_PRODUCT_STATUS', payload: { ids, status } });
  }, [dispatch]);

  const handleBulkCategoryUpdate = useCallback((ids: string[], category: string) => {
    dispatch({ type: 'UPDATE_PRODUCT_CATEGORY', payload: { ids, category } });
  }, [dispatch]);

  const handleReorder = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch({ type: 'REORDER_PRODUCTS', payload: { dragIndex, hoverIndex } });
  }, [dispatch]);

  return {
    handleSelect,
    handleDeselect,
    handleBulkDelete,
    handleBulkStatusUpdate,
    handleBulkCategoryUpdate,
    handleReorder,
  };
};