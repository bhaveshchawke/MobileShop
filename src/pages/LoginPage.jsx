import React, { useState } from "react";
import { NavLink } from "react-router";

export const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[90vh] bg-slate-50 flex items-center justify-center p-4 font-sans relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative z-10">
        
        {/* Toggle Login/Signup */}
        <div className="flex text-sm font-bold bg-slate-50 border-b border-slate-100 p-1.5">
          <button 
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 ${isLogin ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Sign In
          </button>
          <button 
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-center rounded-xl transition-all duration-300 ${!isLogin ? 'bg-white text-blue-600 shadow-sm border border-slate-100' : 'text-slate-500 hover:text-slate-800'}`}
          >
            Create Account
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {isLogin ? "Welcome back" : "Join MobiTech today"}
            </h2>
            <p className="text-sm text-slate-500">
              {isLogin ? "Enter your details to access your account." : "Get access to exclusive deals and tracking."}
            </p>
          </div>

          {/* Social Logins */}
          <div className="flex gap-4 mb-6">
            <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2.5 hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0112 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"/><path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.965 11.965 0 0012 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"/><path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"/><path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 014.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 000 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"/></svg>
              <span className="text-sm font-semibold text-slate-700">Google</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-2.5 hover:bg-slate-50 transition-colors">
              <svg className="w-5 h-5 text-slate-900" fill="currentColor" viewBox="0 0 24 24"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.74 3.58-.79 2.18-.11 3.89 1.14 4.8 2.92-3.86 2.37-3.24 7.6 1.05 9.04-.79 1.76-1.56 3.05-2.43 3.9M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.02 4.41-3.74 4.25z"/></svg>
              <span className="text-sm font-semibold text-slate-700">Apple</span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute w-full h-px bg-slate-200"></span>
            <span className="relative bg-white px-4 text-xs font-medium text-slate-400 uppercase tracking-widest">Or continue with email</span>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            {!isLogin && (
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
              </div>
            )}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Email Address</label>
              <input type="email" placeholder="hello@example.com" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-widest">Password</label>
                {isLogin && <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Forgot?</a>}
              </div>
              <input type="password" placeholder="••••••••" className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all" />
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 active:scale-95 mt-4">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="text-[11px] text-center text-slate-500 mt-6 leading-relaxed">
            By continuing, you agree to MobiTech's <br/>
            <a href="#" className="text-slate-800 font-semibold hover:underline">Terms of Service</a> and <a href="#" className="text-slate-800 font-semibold hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};
