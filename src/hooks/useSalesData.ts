import { useState, useEffect } from 'react';
import { generateSalesData } from '../utils/mockData';

export const useSalesData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      const mockData = generateSalesData();
      setData(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, loading };
};