import { useState, useEffect } from 'react';
import { generateCategoryData } from '../utils/mockData';

export const useCategoryData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      const mockData = generateCategoryData();
      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};