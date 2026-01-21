
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CartPageProps {
  cart: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
}

const CartPage: React.FC<CartPageProps> = ({ cart, updateQuantity, removeFromCart }) => {
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-background-light text-deep-brown font-display min-h-screen flex flex-col max-w-md mx-auto">
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md px-4 py-4 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)}
          className="size-10 flex items-center justify-start text-deep-brown"
        >
          <span className="material-symbols-outlined !text-[24px]">arrow_back_ios_new</span>
        </button>
        <h1 className="text-base font-semibold tracking-tight">购物袋</h1>
        <div className="size-10 flex items-center justify-end">
          <span className="material-symbols-outlined !text-[24px]">shopping_bag</span>
        </div>
      </header>

      <main className="flex-1 px-4 py-6 w-full space-y-6 pb-40">
        <section className="space-y-4">
          <div className="flex items-end justify-between px-1">
            <h2 className="text-sm font-bold uppercase tracking-widest text-muted-grey">商品 ({cart.length})</h2>
          </div>
          
          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-xl shadow-sm border border-gray-100">
              <span className="material-symbols-outlined text-4xl text-gray-200 mb-2">production_quantity_limits</span>
              <p className="text-muted-grey text-sm">你的购物袋是空的</p>
              <button 
                onClick={() => navigate('/')}
                className="mt-4 text-caramel text-sm font-bold"
              >
                去逛逛
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-white shadow-sm rounded-xl p-4 flex gap-4 border border-gray-100">
                <div 
                  className="size-24 rounded-lg bg-gray-50 flex-shrink-0 bg-cover bg-center overflow-hidden"
                  style={{ backgroundImage: `url('${item.imageUrl}')` }}
                />
                <div className="flex flex-col justify-between flex-1 py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-semibold leading-tight">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-grey/40 hover:text-primary"
                      >
                        <span className="material-symbols-outlined !text-[18px]">close</span>
                      </button>
                    </div>
                    <p className="text-xs text-muted-grey mt-1 uppercase tracking-wider">{item.series}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-base font-bold text-caramel">¥{item.price.toFixed(2)}</span>
                    <div className="flex items-center bg-background-light rounded-full px-2 py-1 gap-4">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="size-6 flex items-center justify-center rounded-full text-deep-brown"
                      >
                        <span className="material-symbols-outlined !text-[16px]">remove</span>
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                         onClick={() => updateQuantity(item.id, 1)}
                         className="size-6 flex items-center justify-center rounded-full text-deep-brown"
                      >
                        <span className="material-symbols-outlined !text-[16px]">add</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>

        {cart.length > 0 && (
          <>
            <section className="bg-white rounded-xl p-6 space-y-4 shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted-grey">订单摘要</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-grey">小计</span>
                  <span className="font-medium">¥{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-grey">运费</span>
                  <span className="text-xs italic uppercase tracking-wider">结算时计算</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-grey">预估税费</span>
                  <span className="font-medium">¥0.00</span>
                </div>
                <div className="pt-3 border-t border-gray-100 flex justify-between items-center">
                  <span className="text-base font-bold">总计</span>
                  <span className="text-xl font-bold text-deep-brown">¥{subtotal.toFixed(2)}</span>
                </div>
              </div>
            </section>

            <div className="flex gap-2">
              <input 
                className="flex-1 bg-white border border-gray-100 rounded-full px-6 py-3 text-sm focus:ring-caramel focus:border-caramel" 
                placeholder="优惠码" 
                type="text"
              />
              <button className="bg-deep-brown text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-widest">使用</button>
            </div>
          </>
        )}
      </main>

      {cart.length > 0 && (
        <footer className="fixed bottom-0 left-0 right-0 p-4 pb-10 bg-white/80 backdrop-blur-xl border-t border-gray-100 max-w-md mx-auto z-50">
          <button className="w-full bg-primary hover:bg-red-600 text-white py-5 rounded-full font-bold uppercase tracking-[0.15em] transition-colors flex items-center justify-center gap-2">
            立即结算
            <span className="material-symbols-outlined !text-[20px]">arrow_forward</span>
          </button>
          <p className="text-center text-[10px] mt-4 uppercase tracking-widest text-muted-grey">
            SSL安全加密结算
          </p>
        </footer>
      )}
    </div>
  );
};

export default CartPage;
