import React from "react";

export const OffersPage = () => {
  const bankOffers = [
    { id: 1, bank: "HDFC Bank", title: "Flat ₹5,000 Off", desc: "On Credit Card EMI transactions.", code: "HDFC5K" },
    { id: 2, bank: "SBI Card", title: "10% Instant Discount", desc: "Up to ₹2,500 on all debit/credit cards.", code: "SBI10" },
    { id: 3, bank: "ICICI Bank", title: "No Cost EMI", desc: "Up to 6 months on selected smartphones.", code: "ICICIEMI" },
    { id: 4, bank: "Axis Bank", title: "Flat ₹3,000 Off", desc: "On minimum purchase of ₹40,000.", code: "AXIS3K" },
  ];

  const brandOffers = [
    { id: 1, brand: "Apple", offer: "Free AirPods", desc: "With every purchase of iPhone 15 Pro Max." },
    { id: 2, brand: "Samsung", offer: "₹10K Exchange Bonus", desc: "Trade in your old phone for Galaxy S24 Ultra." },
    { id: 3, brand: "OnePlus", offer: "Free Protection Plan", desc: "1-year accidental damage protection on OnePlus 12." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div className="w-full bg-slate-900 py-16 px-4 text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-slate-800 text-rose-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-700 mb-4 animate-pulse">
            Exclusive Deals
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Today's Top Offers
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Save big on your next smartphone purchase with our exclusive bank discounts, exchange bonuses, and brand deals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-12 relative z-20">
        
        {/* ── Bank Offers ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">💳</span> Bank Discounts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bankOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-slate-50 rounded-full group-hover:bg-blue-50 transition-colors z-0"></div>
                <div className="relative z-10">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{offer.bank}</p>
                  <h3 className="text-lg font-bold text-blue-600 mb-2">{offer.title}</h3>
                  <p className="text-sm text-slate-600 mb-4 h-10">{offer.desc}</p>
                  <div className="flex items-center justify-between border-t border-dashed border-slate-200 pt-4">
                    <span className="text-[11px] text-slate-500 font-medium">Use Code:</span>
                    <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded font-mono text-xs font-bold border border-slate-200 cursor-pointer hover:bg-slate-200">{offer.code}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Brand Offers ─────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <span className="text-3xl">🎁</span> Special Brand Deals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {brandOffers.map((offer) => (
              <div key={offer.id} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 shadow-lg text-white relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-32 h-32 bg-white/5 rounded-tl-full pointer-events-none"></div>
                <p className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{offer.brand}</p>
                <h3 className="text-xl font-bold mb-2">{offer.offer}</h3>
                <p className="text-sm text-slate-400 font-light mb-6 leading-relaxed">{offer.desc}</p>
                <button className="bg-white text-slate-900 text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-slate-100 transition-colors active:scale-95">
                  Shop {offer.brand}
                </button>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
