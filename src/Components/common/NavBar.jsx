import { useState } from "react";
import { NavLink } from "react-router";

export const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "Offers", path: "/offers" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    // Glassmorphism Header (Halka blur aur translucent background)
    <nav className="sticky top-0 z-50 w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* 1. Brand Logo */}
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex-shrink-0 flex items-center gap-2.5 cursor-pointer group"
          >
            {/* Tech Icon / Logo Mark */}
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:bg-blue-700 transition-colors">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            {/* Brand Text */}
            <span className="font-bold text-2xl text-slate-800 tracking-tight">
              Mobi<span className="text-blue-600">Tech</span>
            </span>
          </NavLink>

          {/* 2. Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium text-sm transition-colors group ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-blue-600"
                  }`
                }
              >
                {link.name}

                {/* Offers pe chhota sa badge */}
                {link.name === "Offers" && (
                  <span className="absolute -top-3 -right-4 bg-rose-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                    HOT
                  </span>
                )}

                {/* Hover Underline Effect */}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </NavLink>
            ))}
          </div>

          {/* 3. Right Side Actions (Search, Cart, Login) */}
          <div className="flex items-center gap-5 sm:gap-6">
            {/* Search Icon */}
            <button
              className="hidden sm:block text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
              title="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart Icon with Badge */}
            <NavLink
              to="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
              title="Cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {/* Cart Item Count */}
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-slate-50">
                2
              </span>
            </NavLink>

            {/* Login Button */}
            <NavLink
              to="/login"
              className="hidden md:flex bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20 active:scale-95 cursor-pointer"
            >
              Login
            </NavLink>

            {/* Mobile Hamburger Menu Icon */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-slate-600 hover:text-blue-600 cursor-pointer p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Navigation Dropdown ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in origin-top z-40">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                  }`
                }
              >
                {link.name}
                {link.name === "Offers" && (
                  <span className="ml-3 bg-rose-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full inline-block">
                    HOT
                  </span>
                )}
              </NavLink>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-100">
              <NavLink
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-blue-600 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-md active:scale-95 transition-all"
              >
                Login / Sign Up
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
