import React from "react";

export const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Tech Enthusiast",
      text: "Got my iPhone 15 Pro delivered within 2 hours in Bhopal! The service is unmatched, and the product was 100% genuine and sealed. Highly recommended.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "Regular Customer",
      text: "I was worried about getting my phone screen replaced, but MobiTech did it in just 1 hour right in front of me. The new screen works flawlessly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      role: "Business Owner",
      text: "Exchange offers here are way better than online platforms. I traded my old Samsung and got an amazing deal on the S24 Ultra. Great staff!",
      rating: 4,
    },
    {
      id: 4,
      name: "Neha Gupta",
      role: "Student",
      text: "Bought premium earbuds at a crazy discount during their flash sale. The UI of their website made it so easy to find what I wanted.",
      rating: 5,
    },
  ];

  return (
    <div className="bg-slate-50 py-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Loved by our Customers</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Don't just take our word for it. Here is what people have to say about their experience with MobiTech.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400" : "text-slate-200"}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                "{review.text}"
              </p>
              
              {/* Customer Info */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
                  <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};
