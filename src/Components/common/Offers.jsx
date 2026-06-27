import React from "react";

export const Offers = () => {
  return (
    // Background light gray taaki banner highlight ho, aur padding kam ki hai (py-8)
    <section className="w-full bg-slate-50 py-8 px-4 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact & Clean Card Container */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row overflow-hidden">
          {/* LEFT SIDE: Content (Text & Buttons) */}
          <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
            {/* Minimalist Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-[11px] font-bold uppercase tracking-wider rounded-md">
                Limited Time Offer
              </span>
            </div>

            {/* Crisp, Professional Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Upgrade to Premium.
            </h2>

            {/* Short & Clear Description */}
            <p className="text-slate-500 text-sm md:text-base mb-8 max-w-md leading-relaxed">
              Get flat ₹15,000 instant discount on the new flagship series.
              Plus, exchange your old phone for an extra bonus.
            </p>

            {/* Professional Buttons */}
            <div className="flex items-center gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm shadow-blue-200">
                Claim Offer
              </button>
              <button className="text-slate-600 hover:text-slate-900 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-slate-50">
                View Details
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          {/* Mobile par height kam rakhi hai (h-48) taaki lamba na lage */}
          <div className="w-full md:w-2/5 h-48 md:h-auto bg-slate-100 relative">
            {/* Clean Mobile Phone Image */}
            <img
              src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=800&auto=format&fit=crop"
              alt="New Smartphone Offer"
              className="w-full h-full object-cover"
            />
            {/* Inner shadow to blend image edges slightly */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
