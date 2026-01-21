
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto min-h-screen flex flex-col pb-28">
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-full hover:bg-caramel/10 transition-colors">
            <span className="material-symbols-outlined text-2xl">menu</span>
          </div>
          <h1 className="font-serif text-xl font-bold tracking-tight text-deep-brown">泥与火</h1>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => navigate('/cart')} className="p-2 rounded-full hover:bg-caramel/10 relative">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
        </div>
      </header>

      <div className="px-4 py-2">
        <label className="relative flex items-center w-full">
          <span className="material-symbols-outlined absolute left-4 text-muted-grey">search</span>
          <input
            className="w-full h-12 pl-12 pr-4 bg-surface-cream border border-gray-100 rounded-xl focus:ring-1 focus:ring-caramel focus:border-caramel transition-all placeholder:text-muted-grey/60 text-sm"
            placeholder="搜索独特的陶瓷作品..."
            type="text"
          />
        </label>
      </div>

      <section className="px-4 py-6">
        <div 
          onClick={() => navigate('/artist/a1')}
          className="relative group overflow-hidden rounded-xl aspect-[4/5] flex flex-col justify-end cursor-pointer"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ 
              backgroundImage: `linear-gradient(to top, rgba(27, 22, 18, 0.8) 0%, rgba(27, 22, 18, 0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOkQQz2Qx64GbYQhCyc3NC5Zf6dzU2LN5FKdl4ZWqEQ95IpX8WweVFcjb2yyf6DisJzKayo5D3fcEgxKANcNmoHR-4YZBn15-cQRPLnJBakkIyRhWMqZzaOy2mGbNVljZFdZxKFhyQTUR7ironR0wriymPk-wuN71v8Auy3QL31MjOH97Ba_STnfam0nVoQzJvDnzw-z6Ind1G_IO27GWKn2GOu-6Y7tIGX4dxRVlffomEeoS3vg-0A6rpUsPh2l-8d2Qdpry3wFQ')` 
            }}
          />
          <div className="relative p-6 space-y-3">
            <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
              <span className="text-white text-[10px] uppercase tracking-widest font-bold">精选艺术家</span>
            </div>
            <h2 className="font-serif text-3xl text-white font-bold leading-tight">走近匠人：<br/>Elena Rossi</h2>
            <p className="text-white/80 text-sm max-w-[240px]">通过极简主义炻器探索原土的质感。</p>
            <button className="mt-4 bg-caramel hover:bg-caramel/90 text-white px-6 py-3 rounded-lg font-bold text-sm transition-all flex items-center gap-2 w-fit">
              查看系列 <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="px-4 flex items-center justify-between mb-4">
          <h2 className="font-serif text-2xl font-bold tracking-tight">精选系列</h2>
          <button className="text-caramel text-sm font-semibold hover:underline">查看全部</button>
        </div>
        <div className="flex overflow-x-auto no-scrollbar gap-4 px-4 pb-4">
          {PRODUCTS.slice(0, 3).map((product) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className="flex-shrink-0 w-64 group cursor-pointer"
            >
              <div className="aspect-[3/4] rounded-xl bg-surface-cream overflow-hidden relative mb-3 shadow-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${product.imageUrl}')` }}
                />
                <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full text-muted-grey hover:text-caramel transition-colors">
                  <span className="material-symbols-outlined text-xl">favorite</span>
                </button>
              </div>
              <div className="space-y-1">
                <p className="text-deep-brown font-semibold font-serif text-lg">{product.name}</p>
                <div className="flex items-center justify-between">
                  <p className="text-muted-grey text-sm">{product.series}</p>
                  <p className="text-caramel font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-4">
        <div className="bg-caramel/5 rounded-xl p-6 border border-caramel/10 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-caramel">秋季新品</h3>
            <p className="text-muted-grey text-sm mt-1">深赭色调与触感表面。</p>
          </div>
          <div className="w-12 h-12 bg-caramel rounded-full flex items-center justify-center text-white">
            <span className="material-symbols-outlined">auto_awesome</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
