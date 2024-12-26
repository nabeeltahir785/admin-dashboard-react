import { describe, it, expect } from 'vitest';
import { generateMockProducts } from '../../utils/product';

describe('generateMockProducts', () => {
  it('generates correct number of products', () => {
    const products = generateMockProducts(5);
    expect(products).toHaveLength(5);
  });

  it('generates products with required fields', () => {
    const [product] = generateMockProducts(1);
    
    expect(product).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        description: expect.any(String),
        price: expect.any(Number),
        category: expect.any(String),
        status: expect.stringMatching(/^(active|draft|archived)$/),
        imageUrl: expect.any(String),
        order: expect.any(Number),
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      })
    );
  });

  it('generates unique IDs', () => {
    const products = generateMockProducts(10);
    const ids = products.map(p => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(products.length);
  });
});