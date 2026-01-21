
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ArtistProfile from './pages/ArtistProfile';
import CartPage from './pages/CartPage';
import BottomNav from './components/BottomNav';
import { PRODUCTS } from './constants';
import { CartItem } from './types';

const AppContent: React.FC = () => {
  const location = useLocation();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Simple Cart Logic
  const addToCart = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return;

    setCart((prev) => {
      const existing = prev.find((item) => item.id === productId);
      if (existing) {
        return prev.map((item) => 
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => 
      prev.map((item) => 
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Only show bottom nav on main tabs
  const showNav = ['/', '/explore', '/favorites', '/artist/a1'].includes(location.pathname);

  return (
    <div className="bg-background-light min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/artist/:id" element={<ArtistProfile />} />
        <Route 
          path="/cart" 
          element={
            <CartPage 
              cart={cart} 
              updateQuantity={updateQuantity} 
              removeFromCart={removeFromCart} 
            />
          } 
        />
        <Route path="*" element={<HomePage />} />
      </Routes>
      {showNav && <BottomNav />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
