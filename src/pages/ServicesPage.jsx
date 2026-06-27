import React from "react";

export const ServicesPage = () => {
  const repairs = [
    { name: "Screen Replacement", price: "Starts at ₹1,999", time: "2 Hours", icon: "📱" },
    { name: "Battery Replacement", price: "Starts at ₹999", time: "1 Hour", icon: "🔋" },
    { name: "Motherboard Repair", price: "Starts at ₹2,499", time: "1-2 Days", icon: "⚙️" },
    { name: "Water Damage Recovery", price: "Varies", time: "2-3 Days", icon: "💧" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* ── Hero Banner ─────────────────────────────────────────────── */}
      <div className="w-full bg-slate-900 py-16 px-4 text-center relative overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-slate-800 text-emerald-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-700 mb-4">
            Expert Repairs
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            We Fix What Others Can't
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Professional, fast, and reliable mobile repair services with genuine parts and up to 6 months of warranty.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
        
        {/* ── Left Column: Services List ─────────────────────────────────────────────── */}
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <span className="text-3xl">🔧</span> Our Repair Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {repairs.map((repair, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center text-2xl shrink-0">
                    {repair.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{repair.name}</h3>
                    <p className="text-xs text-slate-500 font-medium mb-2">{repair.time} Turnaround</p>
                    <span className="text-sm font-bold text-blue-600">{repair.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Why Choose MobiTech Repair?</h3>
            <ul className="space-y-3">
              {[
                "100% Genuine Spare Parts Used",
                "Certified and Experienced Technicians",
                "6 Months Warranty on Screen & Battery",
                "Free Diagnostic and Consultation"
              ].map((point, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 font-medium">
                  <svg className="w-5 h-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* ── Right Column: Booking Form ─────────────────────────────────────────────── */}
        <aside className="w-full">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Book a Repair</h3>
            <p className="text-sm text-slate-500 mb-6">Schedule a visit or request a free pickup.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Phone Model</label>
                <input type="text" placeholder="e.g. iPhone 13" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>
              
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Issue Type</label>
                <select className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 bg-white">
                  <option>Screen Broken</option>
                  <option>Battery Draining Fast</option>
                  <option>Phone Not Turning On</option>
                  <option>Water Damage</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Your Contact</label>
                <input type="text" placeholder="Mobile Number" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600" />
              </div>

              <button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3.5 rounded-xl transition-colors shadow-md active:scale-95 mt-4">
                Request Quote
              </button>
            </form>
            
            <p className="text-[11px] text-center text-slate-400 mt-4">No upfront payment required.</p>
          </div>
        </aside>

      </div>
    </div>
  );
};
