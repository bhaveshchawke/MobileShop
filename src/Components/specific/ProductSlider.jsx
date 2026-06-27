import { useState, useEffect } from "react";

// Data bahar rakha hai taaki performance achi rahe aur baar-baar render na ho
const slides = [
  {
    id: 1,
    badge: "HOT OFFER",
    title: "Upgrade to the New Era.",
    subtitle:
      "Get up to ₹15,000 exchange bonus on the latest flagship smartphones.",
    cta: "Claim Offer",
    // 100% Working Static Image Link (Tech/Laptop)
    image: "https://picsum.photos/id/119/800/800",
    bgClass: "bg-gradient-to-r from-blue-700 to-blue-500",
    btnClass: "text-blue-700 hover:bg-blue-50",
  },
  {
    id: 2,
    badge: "NEW LAUNCH",
    title: "Galaxy S24 Ultra is Here.",
    subtitle:
      "Experience the power of AI. Pre-book now and get premium buds free.",
    cta: "Pre-book Now",
    // 100% Working Static Image Link (Phone)
    image: "https://picsum.photos/id/160/800/800",
    bgClass: "bg-gradient-to-r from-slate-900 to-slate-700",
    btnClass: "text-slate-900 hover:bg-slate-200",
  },
  {
    id: 3,
    badge: "EXPERT SERVICE",
    title: "Broken Screen? Fixed Fast.",
    subtitle:
      "Original parts, 6-month warranty, and certified expert technicians.",
    cta: "Book Repair",
    // 100% Working Static Image Link (Desk/Working)
    image: "https://picsum.photos/id/20/800/800",
    bgClass: "bg-gradient-to-r from-emerald-700 to-teal-500",
    btnClass: "text-emerald-700 hover:bg-emerald-50",
  },
  {
    id: 4,
    badge: "ACCESSORIES",
    title: "Smart Gear for Smart Lives.",
    subtitle:
      "Up to 40% off on premium smartwatches, TWS earbuds, and fast chargers.",
    cta: "Shop Accessories",
    // 100% Working Static Image Link (Gadgets)
    image: "https://picsum.photos/id/367/800/800",
    bgClass: "bg-gradient-to-r from-purple-700 to-indigo-600",
    btnClass: "text-purple-700 hover:bg-purple-50",
  },
  {
    id: 5,
    badge: "CERTIFIED PRE-OWNED",
    title: "Like New. Half the Price.",
    subtitle:
      "Buy fully inspected, refurbished iPhones and Androids with 1-year warranty.",
    cta: "View Stock",
    // 100% Working Static Image Link (Laptop)
    image: "https://picsum.photos/id/180/800/800",
    bgClass: "bg-gradient-to-r from-amber-600 to-orange-500",
    btnClass: "text-amber-700 hover:bg-amber-50",
  },
];

export const ProductSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto Slider Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]); // Current change par timer reset hoga

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-slate-50 py-8 lg:py-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Container */}
        <div className="relative w-full h-[400px] sm:h-[350px] md:h-[380px] rounded-3xl overflow-hidden shadow-xl shadow-slate-200 group">
          {/* Inner Track */}
          <div
            className="flex w-full h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`min-w-full h-full flex flex-col md:flex-row relative ${slide.bgClass}`}
              >
                {/* LEFT SIDE: Text Content */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 sm:p-10 lg:p-14 flex flex-col justify-center text-white z-10">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                      {slide.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight mb-3">
                    {slide.title}
                  </h2>

                  <p className="text-white/80 text-xs sm:text-sm lg:text-base mb-6 leading-relaxed max-w-sm">
                    {slide.subtitle}
                  </p>

                  <div>
                    <button
                      className={`bg-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-lg active:scale-95 ${slide.btnClass}`}
                    >
                      {slide.cta}
                    </button>
                  </div>
                </div>

                {/* RIGHT SIDE: Image */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden bg-white/5">
                  {/* Mobile Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden z-10"></div>

                  {/* Desktop Gradient Overlay */}
                  <div className="hidden md:block absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-black/20 to-transparent z-10"></div>

                  <img
                    src={slide.image}
                    alt={slide.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center transform scale-105 hover:scale-100 transition-transform duration-1000"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md shadow-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md shadow-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 md:left-1/4 -translate-x-1/2 z-30 flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-300 rounded-full border border-white/50 ${
                  current === idx
                    ? "w-8 h-2 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
