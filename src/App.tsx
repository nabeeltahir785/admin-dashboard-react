import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ProductProvider } from './context/ProductContext';
import { ErrorBoundary } from './components/error/ErrorBoundary';
import { SuspenseFallback } from './components/loading/SuspenseFallback';
import './index.css';

const AppLayout = React.lazy(() => import('./components/Layout/AppLayout'));

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <ProductProvider>
          <DndProvider backend={HTML5Backend}>
            <Suspense fallback={<SuspenseFallback />}>
              <AppLayout />
            </Suspense>
          </DndProvider>
        </ProductProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}