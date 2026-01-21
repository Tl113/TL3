
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { generateCeramicStory } from '../geminiService';

interface ProductDetailProps {
  addToCart: (productId: string) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [aiStory, setAiStory] = useState<string>('');
  const [loadingStory, setLoadingStory] = useState(false);

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  useEffect(() => {
    const fetchStory = async () => {
      setLoadingStory(true);
      const story = await generateCeramicStory(product.name, product.artist);
      setAiStory(story);
      setLoadingStory(false);
    };
    fetchStory();
  }, [product]);

  return (
    <div className="max-w-md mx-auto min-h-screen relative bg-background-light">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-transparent max-w-md mx-auto">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-white/40 backdrop-blur-md shadow-sm border border-white/20"
        >
          <span className="material-symbols-outlined text-deep-brown">arrow_back_ios_new</span>
        </button>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white/40 backdrop-blur-md shadow-sm border border-white/20">
          <span className="material-symbols-outlined text-deep-brown">ios_share</span>
        </button>
      </div>

      <main className="pb-32">
        <div className="relative w-full h-[60vh] overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${product.imageUrl}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-light/40 to-transparent"></div>
        </div>

        <div className="px-6 -mt-10 relative z-10">
          <div className="bg-background-light/80 backdrop-blur-md rounded-t-xl pt-8 pb-4">
            <h1 className="font-serif text-[32px] font-bold leading-tight text-deep-brown mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-semibold text-deep-brown">匠人：{product.artist}</span>
            </div>
            <div className="inline-block px-4 py-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
              <p className="text-muted-grey text-sm tracking-wide font-medium">${product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="px-6 space-y-8 mt-6">
          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-grey mb-3">产地与意境</h3>
            <p className="text-deep-brown leading-relaxed text-[17px] font-light italic font-serif">
              {product.origin || "源于自然的馈赠，每一寸肌理都诉说着泥土的故事。"}
            </p>
          </section>

          {/* AI Feature */}
          <section className="p-5 bg-caramel/5 rounded-2xl border border-caramel/10">
             <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-caramel text-sm">auto_awesome</span>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-caramel">器物之魂 (AI解读)</h3>
             </div>
             {loadingStory ? (
               <div className="animate-pulse flex space-y-2 flex-col">
                 <div className="h-2 bg-caramel/10 rounded w-full"></div>
                 <div className="h-2 bg-caramel/10 rounded w-3/4"></div>
               </div>
             ) : (
               <p className="text-deep-brown/80 leading-relaxed text-sm font-light">
                 {aiStory}
               </p>
             )}
          </section>

          <section className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-gray-100 bg-white/50">
              <span className="material-symbols-outlined text-caramel mb-2">local_fire_department</span>
              <h4 className="text-xs font-bold text-muted-grey uppercase tracking-wider">烧制</h4>
              <p className="text-sm font-medium">{product.firing || '高温窑烧'}</p>
            </div>
            <div className="p-4 rounded-xl border border-gray-100 bg-white/50">
              <span className="material-symbols-outlined text-caramel mb-2">texture</span>
              <h4 className="text-xs font-bold text-muted-grey uppercase tracking-wider">质感</h4>
              <p className="text-sm font-medium">{product.texture || '釉下彩'}</p>
            </div>
          </section>

          <section>
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-muted-grey mb-3">工艺说明</h3>
            <p className="text-deep-brown leading-loose text-sm font-normal">
              {product.craftDetails || "由匠人亲手拉坯成型，经过数道繁复工序。每一个细节都蕴含着匠人的温度与对传统手艺的敬畏。"}
            </p>
          </section>
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-xl border-t border-gray-100 z-50 max-w-md mx-auto">
        <div className="flex items-center gap-4">
          <button className="flex items-center justify-center min-w-[56px] h-14 rounded-full border-2 border-gray-100 text-deep-brown transition-colors active:bg-gray-50">
            <span className="material-symbols-outlined">favorite</span>
          </button>
          <button 
            onClick={() => addToCart(product.id)}
            className="flex-1 h-14 bg-caramel hover:bg-caramel/90 text-white font-bold text-base rounded-full shadow-lg shadow-caramel/20 transition-transform active:scale-[0.98]"
          >
            加入购物袋
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
