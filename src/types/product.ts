export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  status: 'active' | 'draft' | 'archived';
  imageUrl: string;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface ProductFilters {
  search: string;
  category: string;
  status: string;
  minPrice: number;
  maxPrice: number;
}