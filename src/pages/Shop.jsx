import { useState } from "react";
import { NavLink } from "react-router";

// ─── Data ────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  "All Products",
  "Smartphones",
  "Accessories",
  "Earbuds",
  "Cases",
  "Chargers",
  "Smart Watches",
];

const PHONES = [
  {
    id: 1,
    brand: "Samsung",
    name: "Galaxy S25 Ultra",
    price: 124999,
    oldPrice: 139999,
    badge: "NEW",
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 2,
    brand: "Apple",
    name: "iPhone 16 Pro",
    price: 119900,
    oldPrice: 129900,
    badge: "HOT",
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 3,
    brand: "OnePlus",
    name: "OnePlus 13R",
    price: 42999,
    oldPrice: 46999,
    badge: null,
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 4,
    brand: "Vivo",
    name: "Vivo X200 Pro",
    price: 94999,
    oldPrice: null,
    badge: "NEW",
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 5,
    brand: "Realme",
    name: "Realme GT 6T",
    price: 35999,
    oldPrice: 39999,
    badge: null,
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 6,
    brand: "Nothing",
    name: "Nothing Phone 3a",
    price: 29999,
    oldPrice: 34999,
    badge: "HOT",
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 7,
    brand: "Poco",
    name: "Poco X7 Pro",
    price: 26999,
    oldPrice: null,
    badge: "NEW",
    emoji: "📱",
    category: "Smartphones",
  },
  {
    id: 8,
    brand: "Motorola",
    name: "Moto G85 5G",
    price: 18999,
    oldPrice: 21999,
    badge: null,
    emoji: "📱",
    category: "Smartphones",
  },
];

const ACCESSORIES = [
  {
    id: 1,
    name: "TWS Earbuds",
    emoji: "🎧",
    price: "From ₹999",
    category: "Earbuds",
  },
  {
    id: 2,
    name: "Power Banks",
    emoji: "🔋",
    price: "From ₹799",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Phone Cases",
    emoji: "🛡️",
    price: "From ₹199",
    category: "Cases",
  },
  {
    id: 4,
    name: "Fast Chargers",
    emoji: "⚡",
    price: "From ₹499",
    category: "Chargers",
  },
  {
    id: 5,
    name: "Smart Watches",
    emoji: "⌚",
    price: "From ₹2,499",
    category: "Smart Watches",
  },
  {
    id: 6,
    name: "USB Cables",
    emoji: "🔌",
    price: "From ₹149",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Screen Guards",
    emoji: "🪟",
    price: "From ₹99",
    category: "Accessories",
  },
  {
    id: 8,
    name: "Selfie Sticks",
    emoji: "🤳",
    price: "From ₹299",
    category: "Accessories",
  },
];

const BRANDS = [
  { name: "Samsung", color: "#1d6fe8" },
  { name: "Apple", color: "#555555" },
  { name: "OnePlus", color: "#e02b20" },
  { name: "Vivo", color: "#0052b6" },
  { name: "Realme", color: "#1aa7fd" },
  { name: "Poco", color: "#ff7708" },
  { name: "Motorola", color: "#007dba" },
  { name: "Nothing", color: "#ff6600" },
];

// ─── Helper ───────────────────────────────────────────────────────────────────

const formatPrice = (n) => "₹" + n.toLocaleString("en-IN");

const discount = (price, oldPrice) =>
  oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;

// ─── Sub-components ───────────────────────────────────────────────────────────

const PhoneCard = ({ phone }) => {
  const off = discount(phone.price, phone.oldPrice);

  return (
    <NavLink
      to={`/smartphones/${phone.id}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 overflow-hidden cursor-pointer"
    >
      {/* Badge */}
      {phone.badge && (
        <span
          className={`absolute top-3 right-3 text-white text-[9px] font-bold px-2 py-0.5 rounded-full z-10 ${
            phone.badge === "HOT" ? "bg-rose-500 animate-pulse" : "bg-blue-600"
          }`}
        >
          {phone.badge}
        </span>
      )}

      {/* Discount % */}
      {off && (
        <span className="absolute top-3 left-3 bg-emerald-100 text-emerald-700 text-[9px] font-bold px-2 py-0.5 rounded-full z-10">
          -{off}%
        </span>
      )}

      {/* Image area */}
      <div className="flex items-center justify-center bg-slate-50 h-36 text-5xl rounded-t-2xl">
        {phone.emoji}
      </div>

      {/* Info */}
      <div className="p-3 flex flex-col gap-1">
        <span className="text-[10px] font-semibold text-blue-600 uppercase tracking-wider">
          {phone.brand}
        </span>
        <p className="text-sm font-medium text-slate-800 leading-snug line-clamp-2">
          {phone.name}
        </p>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-sm font-bold text-slate-900">
            {formatPrice(phone.price)}
          </span>
          {phone.oldPrice && (
            <span className="text-xs text-slate-400 line-through">
              {formatPrice(phone.oldPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Add to Cart CTA (visible on hover) */}
      <button className="mx-3 mb-3 py-2 rounded-lg bg-blue-600 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-blue-700 active:scale-95">
        Add to Cart
      </button>
    </NavLink>
  );
};

const AccessoryCard = ({ acc }) => (
  <NavLink
    to={`/accessories/${acc.id}`}
    className="flex flex-col items-center text-center bg-white rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-4 cursor-pointer"
  >
    <span className="text-3xl mb-2">{acc.emoji}</span>
    <p className="text-xs font-medium text-slate-800 mb-0.5">{acc.name}</p>
    <p className="text-xs font-semibold text-blue-600">{acc.price}</p>
  </NavLink>
);

// ─── Main Component ────────────────────────────────────────────────────────────

export const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  const filteredPhones =
    activeCategory === "All Products" || activeCategory === "Smartphones"
      ? PHONES
      : [];

  const filteredAccessories =
    activeCategory === "All Products"
      ? ACCESSORIES
      : ACCESSORIES.filter((a) => a.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── Hero Banner ─────────────────────────────────────────────── */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-700 to-blue-500 px-8 py-12 mb-8 text-center">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-white/5" />

          <span className="inline-block mb-3 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white">
            New Arrivals 2025
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Find Your Perfect Phone
          </h1>
          <p className="text-white/70 mb-6 text-sm sm:text-base">
            Latest smartphones, accessories & more — all in one place
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <NavLink
              to="/smartphones"
              className="bg-white text-blue-600 text-sm font-semibold px-6 py-2.5 rounded-xl hover:bg-blue-50 transition-colors active:scale-95"
            >
              Explore Phones
            </NavLink>
            <NavLink
              to="/offers"
              className="border border-white/40 text-white text-sm font-medium px-6 py-2.5 rounded-xl hover:bg-white/10 transition-colors active:scale-95"
            >
              Today's Deals 🔥
            </NavLink>
          </div>
        </div>

        {/* ── Category Filter Chips ────────────────────────────────────── */}
        <div className="flex gap-2 flex-wrap mb-7">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-150 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm shadow-blue-600/20"
                  : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Featured Smartphones ─────────────────────────────────────── */}
        {(activeCategory === "All Products" ||
          activeCategory === "Smartphones") && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Featured Smartphones
              </h2>
              <NavLink
                to="/smartphones"
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                See all →
              </NavLink>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredPhones.map((phone) => (
                <PhoneCard key={phone.id} phone={phone} />
              ))}
            </div>
          </section>
        )}

        {/* ── Flash Sale Banner ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-rose-50 border border-rose-200 rounded-2xl px-5 py-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🔥</span>
            <div>
              <h3 className="text-sm font-semibold text-rose-800">
                Today's Flash Sale — Up to 40% Off
              </h3>
              <p className="text-xs text-rose-600">
                Limited-time deal on selected models. Ends at midnight.
              </p>
            </div>
          </div>
          <NavLink
            to="/offers"
            className="shrink-0 bg-rose-500 hover:bg-rose-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors active:scale-95"
          >
            Grab Deal
          </NavLink>
        </div>

        {/* ── Accessories ──────────────────────────────────────────────── */}
        {(activeCategory === "All Products" ||
          activeCategory !== "Smartphones") && (
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Accessories
              </h2>
              <NavLink
                to="/accessories"
                className="text-xs font-medium text-blue-600 hover:underline"
              >
                See all →
              </NavLink>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
              {filteredAccessories.map((acc) => (
                <AccessoryCard key={acc.id} acc={acc} />
              ))}
            </div>
          </section>
        )}

        {/* ── Trade-in Banner ──────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-50 border border-blue-200 rounded-2xl px-5 py-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl">♻️</span>
            <div>
              <h3 className="text-sm font-semibold text-blue-800">
                Exchange Your Old Phone
              </h3>
              <p className="text-xs text-blue-600">
                Get up to ₹25,000 off on your next purchase. Instant valuation.
              </p>
            </div>
          </div>
          <NavLink
            to="/services"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors active:scale-95"
          >
            Check Value
          </NavLink>
        </div>

        {/* ── Divider ──────────────────────────────────────────────────── */}
        <hr className="border-slate-200 mb-8" />

        {/* ── Why Choose Us ────────────────────────────────────────────── */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Why MobiTech?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              {
                emoji: "✅",
                title: "100% Genuine",
                sub: "Certified products only",
              },
              {
                emoji: "🚀",
                title: "Fast Delivery",
                sub: "Same-day in Bhopal",
              },
              { emoji: "🔧", title: "Free Service", sub: "1-year support" },
              {
                emoji: "💳",
                title: "EMI Available",
                sub: "0% interest options",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center bg-white rounded-2xl border border-slate-200 p-4 gap-1"
              >
                <span className="text-2xl mb-1">{item.emoji}</span>
                <p className="text-xs font-semibold text-slate-800">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500">{item.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Shop by Brand ────────────────────────────────────────────── */}
        <section className="mb-4">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Shop by Brand
          </h2>
          <div className="flex flex-wrap gap-2">
            {BRANDS.map((brand) => (
              <NavLink
                key={brand.name}
                to={`/smartphones?brand=${brand.name.toLowerCase()}`}
                className="flex items-center gap-2 bg-white border border-slate-200 hover:border-blue-300 text-slate-700 hover:text-blue-600 rounded-full px-4 py-2 text-xs font-medium transition-all cursor-pointer"
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: brand.color }}
                />
                {brand.name}
              </NavLink>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
