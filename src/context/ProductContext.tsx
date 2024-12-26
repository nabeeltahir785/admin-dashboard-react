import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Product, ProductFilters } from '../types/product';
import { generateMockProducts } from '../utils/product';

interface ProductState {
  products: Product[];
  filters: ProductFilters;
  selectedProducts: Set<string>;
}

type ProductAction =
  | { type: 'SET_PRODUCTS'; payload: Product[] }
  | { type: 'UPDATE_FILTERS'; payload: ProductFilters }
  | { type: 'SELECT_PRODUCT'; payload: string }
  | { type: 'DESELECT_PRODUCT'; payload: string }
  | { type: 'CLEAR_SELECTION' }
  | { type: 'DELETE_PRODUCTS'; payload: string[] }
  | { type: 'UPDATE_PRODUCT_STATUS'; payload: { ids: string[]; status: string } }
  | { type: 'UPDATE_PRODUCT_CATEGORY'; payload: { ids: string[]; category: string } }
  | { type: 'REORDER_PRODUCTS'; payload: { dragIndex: number; hoverIndex: number } };

const initialState: ProductState = {
  products: generateMockProducts(20),
  filters: {
    search: '',
    category: '',
    status: '',
    minPrice: 0,
    maxPrice: 0,
  },
  selectedProducts: new Set(),
};

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    
    case 'UPDATE_FILTERS':
      return { ...state, filters: action.payload };
    
    case 'SELECT_PRODUCT':
      return {
        ...state,
        selectedProducts: new Set([...state.selectedProducts, action.payload]),
      };
    
    case 'DESELECT_PRODUCT':
      const newSelected = new Set(state.selectedProducts);
      newSelected.delete(action.payload);
      return { ...state, selectedProducts: newSelected };
    
    case 'CLEAR_SELECTION':
      return { ...state, selectedProducts: new Set() };
    
    case 'DELETE_PRODUCTS':
      return {
        ...state,
        products: state.products.filter(p => !action.payload.includes(p.id)),
        selectedProducts: new Set(),
      };
    
    case 'UPDATE_PRODUCT_STATUS':
      return {
        ...state,
        products: state.products.map(product =>
          action.payload.ids.includes(product.id)
            ? { ...product, status: action.payload.status as 'active' | 'draft' | 'archived' }
            : product
        ),
        selectedProducts: new Set(),
      };
    
    case 'UPDATE_PRODUCT_CATEGORY':
      return {
        ...state,
        products: state.products.map(product =>
          action.payload.ids.includes(product.id)
            ? { ...product, category: action.payload.category }
            : product
        ),
        selectedProducts: new Set(),
      };
    
    case 'REORDER_PRODUCTS':
      const newProducts = [...state.products];
      const [draggedProduct] = newProducts.splice(action.payload.dragIndex, 1);
      newProducts.splice(action.payload.hoverIndex, 0, draggedProduct);
      return {
        ...state,
        products: newProducts.map((product, index) => ({ ...product, order: index })),
      };
    
    default:
      return state;
  }
};

const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
} | null>(null);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};