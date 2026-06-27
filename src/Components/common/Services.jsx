export const Services = () => {
  const services = [
    {
      title: "Screen & Glass Repair",
      desc: "Original display replacements and OCA machine glass changing for all major brands.",
      icon: (
        // Phone/Screen Icon
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
      ),
    },
    {
      title: "Charging & Battery Fix",
      desc: "Quick battery replacement and charging jack/port repairs with certified parts.",
      icon: (
        // Battery Charging Icon
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-7.5a2.25 2.25 0 00-2.25-2.25h-15a2.25 2.25 0 00-2.25 2.25v7.5A2.25 2.25 0 003.75 18zM13.5 7.5L9 13.5h3l-1.5 4.5 4.5-6h-3l1.5-4.5z"
          />
        </svg>
      ),
    },
    {
      title: "Motherboard & IC Repair",
      desc: "Advanced chip-level repairing for water-damaged and completely dead devices.",
      icon: (
        // CPU/Chip Icon
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
          />
        </svg>
      ),
    },
    {
      title: "Software & Unlocking",
      desc: "Dead boot repair, FRP bypass, logo hang fix, and complete data recovery.",
      icon: (
        // Lock Open / Software Icon
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* === Section Header === */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight mb-4">
            Professional <span className="text-blue-600">Repair Services</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto">
            From broken displays to advanced chip-level motherboard repairing,
            we fix what others can't.
          </p>
        </div>

        {/* === Services Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-lg hover:shadow-blue-600/5 transition-all duration-300 flex flex-col h-full"
            >
              {/* Icon Container - Matching the NavBar Logo Style */}
              <div className="w-12 h-12 bg-blue-50/50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/30 transition-all duration-300">
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>

              {/* Minimalist Action Link */}
              <div className="mt-6 flex items-center text-sm font-semibold text-slate-500 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                View details
                <svg
                  className="w-4 h-4 ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
