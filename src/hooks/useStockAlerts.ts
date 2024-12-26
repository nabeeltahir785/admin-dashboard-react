import { useState, useEffect } from 'react';
import { generateStockAlerts } from '../utils/mockData';

export const useStockAlerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      const mockData = generateStockAlerts();
      setAlerts(mockData);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { alerts, loading };
};