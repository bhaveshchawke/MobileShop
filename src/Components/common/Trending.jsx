const trendingProducts = [
  {
    id: 1,
    title: "Premium Smartphones",
    price: "From ₹29,999",
    // Fixed: Nayi 100% working image add ki hai
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: 2,
    title: "Audio & Earbuds",
    price: "From ₹1,499",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop",
    tag: "New Arrival",
  },
  {
    id: 3,
    title: "Smart Wearables",
    price: "From ₹2,999",
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
    tag: "Top Rated",
  },
  {
    id: 4,
    title: "Tablets & iPads",
    price: "From ₹19,999",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop",
    tag: "Trending",
  },
];

export const Trending = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Header Section === */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-100 pb-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Trending Categories
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Explore our most popular tech gear this week.
            </p>
          </div>
          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group">
            Shop all
            <svg
              className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* === Grid Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {trendingProducts.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-50 border border-slate-100">
                {/* Subtle Tag */}
                <div className="absolute top-3 left-3 z-10 rounded-md bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-slate-800 shadow-sm">
                  {product.tag}
                </div>

                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="mt-4 flex items-start justify-between">
                <div>
                  <h3 className="text-base font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">{product.price}</p>
                </div>

                {/* Minimal Arrow on Hover */}
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-400 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-blue-50 group-hover:text-blue-600">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
