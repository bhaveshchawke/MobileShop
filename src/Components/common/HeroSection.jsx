export const HeroSection = () => {
  return (
    // Hero Section Container (Light Slate Background to match NavBar)
    <section className="relative w-full bg-white overflow-hidden font-sans">
      {/* Decorative Background Glow Effects */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-slate-300/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-12 pb-20 lg:pt-20 lg:pb-28 gap-12 lg:gap-8">
          {/* ================= LEFT SIDE: Text Content (Scaled Down & Clean) ================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Launch Badge - Thoda chhota kiya */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 mb-5 shadow-sm">
              <span className="flex w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wide">
                New Launch: Galaxy S26 Ultra
              </span>
            </div>

            {/* Main Headline - Font aur size ko balance kiya (text-5xl max) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              The Future of <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
                Tech is Here.
              </span>
            </h1>

            {/* Sub-headline - Text thoda patla aur chhota kiya */}
            <p className="text-[15px] text-slate-600 mb-7 max-w-md leading-relaxed">
              Upgrade your lifestyle with our exclusive collection of premium
              smartphones, smartwatches, and next-gen accessories. Unbeatable
              prices, unmatched performance.
            </p>

            {/* CTA Buttons - Padding aur font size (text-sm) clean kiye */}
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3 bg-blue-600 text-white text-sm font-semibold rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 active:scale-95">
                Shop Now
              </button>
              <button className="w-full sm:w-auto px-7 py-3 bg-white text-slate-700 text-sm font-semibold rounded-xl border border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all active:scale-95 shadow-sm">
                View Top Deals
              </button>
            </div>

            {/* Trust Indicators - Icons aur text chhote kiye */}
            <div className="flex items-center gap-5 mt-8 text-[13px] font-medium text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Genuine Products
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Fast Delivery
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE: Image Mockup (Same as before) ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-[3rem] transform rotate-3 scale-105 -z-10"></div>

            <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8826435/pexels-photo-8826435.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Smartphone Mockup"
                className="w-full h-[350px] sm:h-[450px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg border border-white/50 flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-inner">
                  🏷️
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    Starting at
                  </p>
                  <p className="text-lg font-black text-slate-900">₹49,999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
