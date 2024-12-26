export const generateSalesData = () => {
  const last30Days = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      sales: Math.floor(Math.random() * 1000) + 500,
    };
  });
  return last30Days;
};

export const generateCategoryData = () => [
  { name: 'Electronics', value: 45 },
  { name: 'Clothing', value: 35 },
  { name: 'Books', value: 20 },
];

export const generateStockAlerts = () => [
  { id: 1, message: 'iPhone 13 Pro - Only 2 units left' },
  { id: 2, message: 'Samsung Galaxy S21 - Out of stock' },
  { id: 3, message: 'MacBook Pro M1 - Low stock alert (5 units)' },
];