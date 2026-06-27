import React, { useState } from "react";
import { NavLink } from "react-router";

export const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Samsung Galaxy S25 Ultra",
      color: "Titanium Gray",
      price: 124999,
      qty: 1,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Premium TWS Earbuds",
      color: "Matte Black",
      price: 4999,
      qty: 2,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    },
  ]);

  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const tax = subtotal * 0.18; // 18% GST
  const total = subtotal + tax;

  const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 font-sans px-4">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl shadow-sm mb-6">🛒</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 text-center max-w-sm">Looks like you haven't added any products to your cart yet.</p>
        <NavLink to="/shop" className="bg-blue-600 text-white font-bold px-8 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-md">
          Start Shopping
        </NavLink>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Shopping Cart</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* ── Left Column: Cart Items ──────────────────────────────────────── */}
          <div className="w-full lg:w-2/3 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 shadow-sm relative group">
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-4 right-4 text-slate-300 hover:text-rose-500 transition-colors"
                  title="Remove Item"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                </button>
                
                <div className="w-28 h-28 shrink-0 bg-slate-50 rounded-xl overflow-hidden border border-slate-100 flex items-center justify-center p-2">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-grow flex flex-col justify-between h-full w-full">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1 pr-8">{item.name}</h3>
                    <p className="text-xs text-slate-500 mb-4 font-medium">Color: {item.color}</p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
                      <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-colors font-bold">-</button>
                      <span className="w-8 text-center text-sm font-bold text-slate-900">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-white rounded-md transition-colors font-bold">+</button>
                    </div>
                    <span className="text-lg font-bold text-slate-900">{formatPrice(item.price * item.qty)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ── Right Column: Order Summary ──────────────────────────────────────── */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 text-sm mb-6 border-b border-slate-100 pb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span className="font-semibold text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Estimated Tax (18%)</span>
                  <span className="font-semibold text-slate-900">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between text-emerald-600 font-medium">
                  <span>Delivery Charges</span>
                  <span>Free</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end mb-8">
                <span className="text-base font-bold text-slate-900">Total</span>
                <span className="text-2xl font-black text-blue-600">{formatPrice(total)}</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-blue-600/20 active:scale-95 mb-4">
                Proceed to Checkout
              </button>
              
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                Secure Checkout Powered by Stripe
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};
