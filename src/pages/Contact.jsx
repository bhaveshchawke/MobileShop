import { useState } from "react";

// ─── Data (Clean Text, No Emojis) ──────────────────────────────────────────────

const TOPICS = [
  "Buying a phone",
  "Repair & service",
  "Exchange offer",
  "Accessories",
  "Bulk order",
  "Other",
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [activeTopic, setActiveTopic] = useState("Buying a phone");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.contact.trim()) e.contact = "Phone or email is required";
    if (!form.message.trim()) e.message = "Message cannot be empty";
    return e;
  };

  const handleSend = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Simulate API call
    setTimeout(() => {
      setStatus("sent");
    }, 1400);
  };

  const handleReset = () => {
    setForm({ name: "", contact: "", message: "" });
    setActiveTopic("Buying a phone");
    setStatus("idle");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-16">
      {/* ── Premium Hero Banner ─────────────────────────────────────────────── */}
      <div className="w-full bg-slate-900 py-16 px-4 text-center relative overflow-hidden border-b border-slate-800">
        {/* Abstract Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-500/10 rounded-full blur-[60px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 bg-slate-800 text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-full border border-slate-700 mb-4">
            24/7 Support Available
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            How can we help you?
          </h1>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Whether you're looking for a new flagship, need a quick repair, or
            have a business inquiry, our tech experts are ready to assist.
          </p>
        </div>
      </div>

      {/* ── Main 2-Column Layout ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* ── LEFT COLUMN: Contact Form ─────────────────────────────────── */}
          <div className="w-full lg:w-2/3 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            {status === "sent" ? (
              /* ── Success State ── */
              <div className="flex flex-col items-center justify-center py-16 text-center animate-bounce-in h-full">
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 border border-blue-100">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-500 text-sm mb-8 max-w-sm">
                  Thank you for reaching out. One of our tech experts will call
                  or email you back within 2 hours.
                </p>
                <button
                  onClick={handleReset}
                  className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-8 py-3 rounded-full transition-colors shadow-md active:scale-95"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 border-b border-slate-100 pb-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">
                    Send a Message
                  </h2>
                  <p className="text-sm text-slate-500">
                    Fill out the form below and we'll get right back to you.
                  </p>
                </div>

                {/* Topic Selection */}
                <div className="mb-8">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
                    What is this regarding?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {TOPICS.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setActiveTopic(topic)}
                        className={`text-xs font-semibold px-5 py-2.5 rounded-full border transition-all duration-200 cursor-pointer
                          ${
                            activeTopic === topic
                              ? "bg-slate-900 text-white border-slate-900 shadow-md"
                              : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                          }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="e.g. Rahul Verma"
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 outline-none transition-all
                        focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white
                        ${errors.name ? "border-rose-400 bg-rose-50" : "border-slate-200"}`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1.5 font-medium">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                      Email or Phone
                    </label>
                    <input
                      type="text"
                      value={form.contact}
                      onChange={(e) =>
                        setForm({ ...form, contact: e.target.value })
                      }
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 outline-none transition-all
                        focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white
                        ${errors.contact ? "border-rose-400 bg-rose-50" : "border-slate-200"}`}
                    />
                    {errors.contact && (
                      <p className="text-xs text-rose-500 mt-1.5 font-medium">
                        {errors.contact}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="mb-8">
                  <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Message Details
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Tell us exactly what you need... (e.g. Looking to exchange my iPhone 13 for an S24 Ultra)"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-slate-800 bg-slate-50 outline-none transition-all resize-none
                      focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 focus:bg-white
                      ${errors.message ? "border-rose-400 bg-rose-50" : "border-slate-200"}`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1.5 font-medium">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Action */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                    Your data is secure
                  </p>
                  <button
                    onClick={handleSend}
                    disabled={status === "sending"}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors shadow-lg shadow-blue-600/20 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </div>
              </>
            )}
          </div>

          {/* ── RIGHT COLUMN: Info & Hours ──────────────────────────────── */}
          <div className="w-full lg:w-1/3 flex flex-col gap-6">
            {/* Quick Contact Cards */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">
                Contact Info
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Email Support
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      hello@mobitech.in
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Call / WhatsApp
                    </p>
                    <p className="text-sm font-semibold text-slate-900">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center text-blue-600 shrink-0">
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">
                      Flagship Store
                    </p>
                    <p className="text-sm font-medium text-slate-600 leading-relaxed">
                      MP Nagar Zone-II,
                      <br />
                      Bhopal, Madhya Pradesh
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Hours Card */}
            <div className="bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-800 text-white relative overflow-hidden">
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-600/20 rounded-full blur-2xl"></div>

              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-5 relative z-10">
                Store Hours
              </h3>

              <div className="space-y-3 relative z-10">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Mon - Fri</span>
                  <span className="font-semibold text-white">
                    10:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Saturday</span>
                  <span className="font-semibold text-white">
                    10:00 AM - 9:00 PM
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-slate-300">Sunday</span>
                  <span className="font-semibold text-rose-400">
                    11:00 AM - 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Simple Social Links (Text based, highly professional) */}
            <div className="flex items-center justify-center gap-6 mt-2">
              <a
                href="#"
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors"
              >
                Twitter (X)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
