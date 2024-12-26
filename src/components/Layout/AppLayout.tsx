import React, { Suspense, useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { LayoutGrid, BarChart2, Settings, Menu, X, Package, Sliders } from 'lucide-react';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { ThemeToggle } from '../common/ThemeToggle';
import { transitions } from '../../utils/animations';

const DashboardPage = React.lazy(() => import('../../pages/DashboardPage'));
const ProductsPage = React.lazy(() => import('../../pages/ProductsPage'));
const SettingsPage = React.lazy(() => import('../../pages/SettingsPage'));

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
}

const NavItem = React.memo<NavItemProps>(({ to, icon, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center space-x-2 px-4 py-2 rounded-md ${transitions.fast} ${
        isActive
          ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20'
          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
      }`
    }
  >
    {icon}
    <span>{children}</span>
  </NavLink>
));

NavItem.displayName = 'NavItem';

const Navigation = React.memo(({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <nav className={`
    fixed lg:static inset-y-0 left-0 z-30
    transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
    transition-transform duration-200 ease-in-out
    w-64 card border p-4
  `}>
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center space-x-2">
        <LayoutGrid className="w-6 h-6 text-blue-600" />
        <h1 className="text-xl font-semibold">Admin Panel</h1>
      </div>
      <button 
        onClick={onClose}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
    <div className="space-y-2">
      <NavItem to="/" icon={<BarChart2 className="w-5 h-5" />} onClick={onClose}>
        Dashboard
      </NavItem>
      <NavItem to="/products" icon={<Package className="w-5 h-5" />} onClick={onClose}>
        Products
      </NavItem>
      <NavItem to="/settings" icon={<Sliders className="w-5 h-5" />} onClick={onClose}>
        Settings
      </NavItem>
    </div>
  </nav>
));

Navigation.displayName = 'Navigation';

const AppLayout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {isNavOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsNavOpen(false)}
        />
      )}
      
      <div className="flex">
        <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
        
        <main className="flex-1 min-w-0">
          <div className="sticky top-0 z-10 card border-b">
            <div className="px-4 py-3 flex justify-between items-center">
              <button
                onClick={() => setIsNavOpen(true)}
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <Menu className="w-5 h-5" />
              </button>
              <ThemeToggle />
            </div>
          </div>

          <div className="p-4 lg:p-8">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Routes>
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;