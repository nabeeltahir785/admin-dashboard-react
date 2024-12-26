# React Admin Dashboard

A modern, responsive admin dashboard built with React, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

### Product Management
- Infinite scroll product listing
- Detailed product view/edit forms
- Bulk actions support
- Advanced filtering and search
- Drag-and-drop reordering

### Data Visualization
- Sales trends with Recharts
- Inventory status indicators
- Category distribution charts
- Real-time stock alerts

### Form Management
- Complex nested forms
- Auto-save functionality
- Form validation
- Unsaved changes warning

### Performance Optimizations
- React.memo implementation
- useMemo and useCallback hooks
- Code splitting
- React Suspense integration

## 🛠️ Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui
- Recharts
- React DnD
- React Query

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/nabeeltahir785/admin-dashboard-react.git
```

2. Install dependencies:
```bash
cd admin-dashboard-react
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── product/
│   ├── charts/
│   ├── forms/
│   └── ui/
├── hooks/
├── patterns/
├── context/
├── utils/
├── types/
└── tests/
```

## 🔧 Configuration

1. Environment Variables:
```env
VITE_API_URL=your_api_url
VITE_API_KEY=your_api_key
```

2. Tailwind Configuration:
   Check `tailwind.config.js` for theme customization.

## 🧪 Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## 🎯 Advanced Patterns Used

### Compound Components
```tsx
<Tabs defaultTab="inventory">
  <TabList>
    <Tab id="inventory">Inventory</Tab>
    <Tab id="orders">Orders</Tab>
  </TabList>
</Tabs>
```

### Custom Hooks
```tsx
const { data, loading, error } = useAsync(fetchProducts);
```

### HOC Pattern
```tsx
const EnhancedComponent = withLoading(BaseComponent);
```

## 🔍 Key Features Implementation

### Infinite Scroll
```tsx
const ProductList = () => {
  const { data, fetchNextPage } = useInfiniteQuery(
    ['products'],
    fetchProductPage,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    }
  );
};
```

### Auto-save Forms
```tsx
const ProductForm = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: product,
  });

  useAutoSave(formData, saveProduct);
};
```

## 🌟 Performance Optimizations

1. Memoization
```tsx
const MemoizedComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});
```

2. Code Splitting
```tsx
const ProductDashboard = React.lazy(() => import('./ProductDashboard'));
```

## 📈 State Management

1. Context Setup
```tsx
const ProductContext = createContext<ProductContextType | undefined>(undefined);
```

2. Custom Hooks
```tsx
const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) throw new Error('useProduct must be used within ProductProvider');
  return context;
};
```

## 🎨 UI Components

Utilizing shadcn/ui components with Tailwind CSS:

```tsx
<Card className="rounded-lg shadow-lg">
  <CardHeader>
    <CardTitle>Product Analytics</CardTitle>
  </CardHeader>
  <CardContent>
    <LineChart data={analyticsData} />
  </CardContent>
</Card>
```

## 🔐 Security Best Practices

- Input sanitization
- XSS prevention
- CSRF protection
- Secure authentication

## 📱 Responsive Design

Implemented using Tailwind CSS breakpoints:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
```

