
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: '首页', icon: 'home', path: '/' },
    { label: '探索', icon: 'explore', path: '/explore' },
    { label: '艺术家', icon: 'palette', path: '/artist/a1' },
    { label: '收藏', icon: 'favorite', path: '/favorites' },
    { label: '购物袋', icon: 'shopping_bag', path: '/cart' },
  ];

  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white/90 backdrop-blur-xl border-t border-gray-100 px-6 py-3 flex items-center justify-between z-50 rounded-t-3xl shadow-lg">
      {navItems.map((item) => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            location.pathname === item.path ? 'text-caramel' : 'text-muted-grey'
          }`}
        >
          <span className={`material-symbols-outlined text-[24px] ${location.pathname === item.path ? 'fill-1' : ''}`}>
            {item.icon}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
