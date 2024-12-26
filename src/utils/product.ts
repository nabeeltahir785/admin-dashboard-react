import { Product } from '../types/product';

let productCounter = 0;

const generateUniqueId = () => {
  const timestamp = Date.now();
  productCounter += 1;
  return `product-${timestamp}-${productCounter}`;
};

export const generateMockProducts = (count: number): Product[] => {
  return Array.from({ length: count }, () => ({
    id: generateUniqueId(),
    name: `Product ${productCounter}`,
    description: `Description for product ${productCounter}`,
    price: Math.floor(Math.random() * 1000) + 1,
    category: ['electronics', 'clothing', 'books'][Math.floor(Math.random() * 3)],
    status: ['active', 'draft', 'archived'][Math.floor(Math.random() * 3)] as 'active' | 'draft' | 'archived',
    imageUrl: `https://source.unsplash.com/400x400/?product&sig=${Math.random()}`,
    order: productCounter - 1,
    createdAt: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    updatedAt: new Date(Date.now() - Math.random() * 1000000000).toISOString(),
  }));
};