
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ARTISTS, PRODUCTS } from '../constants';

const ArtistProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const artist = ARTISTS.find((a) => a.id === id) || ARTISTS[0];
  const artistProducts = PRODUCTS.filter((p) => p.artist === artist.name);

  return (
    <div className="bg-background-light min-h-screen max-w-md mx-auto relative pb-24">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-3 bg-white/40 backdrop-blur-md max-w-md mx-auto">
        <div className="flex items-center">
          <span 
            onClick={() => navigate('/')}
            className="material-symbols-outlined text-deep-brown cursor-pointer"
          >
            arrow_back_ios
          </span>
        </div>
        <h2 className="text-sm font-bold tracking-widest uppercase">艺术家</h2>
        <div className="flex items-center">
          <span className="material-symbols-outlined text-deep-brown cursor-pointer">share</span>
        </div>
      </div>

      <main className="pt-0">
        <div className="relative w-full h-72 overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-cover bg-center scale-110 blur-xl opacity-40"
            style={{ backgroundImage: `url('${artist.bgUrl}')` }}
          />
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-xl bg-gray-100">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${artist.avatarUrl}')` }}
              />
            </div>
          </div>
        </div>

        <div className="px-6 -mt-8 relative z-20 flex flex-col items-center">
          <h1 className="text-2xl font-bold tracking-tight text-deep-brown">{artist.name}</h1>
          <p className="text-clay-muted italic text-base mt-1 font-light tracking-wide">{artist.tagline}</p>
          <button className="mt-6 px-10 py-2 border border-caramel text-caramel hover:bg-caramel hover:text-white transition-all duration-300 rounded-full text-sm font-bold tracking-widest uppercase">
            关注
          </button>
        </div>

        <div className="mt-10 sticky top-[52px] z-40 bg-background-light/95 backdrop-blur-sm">
          <div className="flex justify-center border-b border-gray-100">
            <a className="px-8 py-4 border-b-2 border-caramel text-deep-brown" href="#">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">作品</span>
            </a>
            <a className="px-8 py-4 border-b-2 border-transparent text-muted-grey" href="#">
              <span className="text-xs font-bold tracking-[0.2em] uppercase">手作日记</span>
            </a>
          </div>
        </div>

        <div className="p-4 grid grid-cols-2 gap-4">
          {artistProducts.map((product, index) => (
            <div 
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
              className={`relative group overflow-hidden rounded-xl cursor-pointer ${index % 2 !== 0 ? 'mt-6' : ''}`}
            >
              <div 
                className="aspect-[4/5] bg-cover bg-center bg-gray-100"
                style={{ backgroundImage: `url('${product.imageUrl}')` }}
              />
              <div className="absolute bottom-2 right-2 px-3 py-1 bg-white/90 rounded-full shadow-sm">
                <p className="text-[10px] font-bold tracking-tighter text-deep-brown">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ArtistProfile;
