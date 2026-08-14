import React from "react";
import { ShoppingCart, Store, Clock, MapPin, ShieldCheck, Truck, Tag } from "lucide-react";

// WhatsApp Icon SVG Component
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#FDF9F1] overflow-hidden min-h-[600px] flex items-center">
      {/* Background Image with Mask Fade */}
      <div 
        className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 h-full z-0 hidden md:block"
        style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%)', maskImage: 'linear-gradient(to right, transparent 0%, black 30%)' }}
      >
        <img 
          src="/products/main.png" 
          alt="Grocery products" 
          className="w-full h-full object-cover object-right"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="max-w-2xl">
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#14532D] leading-[1.1] mb-6">
            Ghar ki zaroorat, <br />
            ab aapke darwaze tak.
          </h1>
          
          {/* Subtitle */}
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-lg">
            Daily essentials, groceries & household products <br className="hidden md:block" />
            delivered fresh from your local store.
          </p>
          
          {/* Features Row 1 */}
          <div className="flex flex-wrap gap-6 mb-10">
            <div className="flex items-center gap-3">
              <div className="bg-[#E8F5E9] p-2.5 rounded-full text-[#2E7D32]">
                <Truck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Fast Delivery</p>
                <p className="text-xs text-gray-500">30 min delivery</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#E8F5E9] p-2.5 rounded-full text-[#2E7D32]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Best Quality</p>
                <p className="text-xs text-gray-500">Trusted products</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-[#E8F5E9] p-2.5 rounded-full text-[#2E7D32]">
                <Tag className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Local Prices</p>
                <p className="text-xs text-gray-500">Everyday savings</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            <a 
              href="#shop" 
              className="flex items-center gap-2 px-6 py-3 bg-[#166534] text-white font-medium rounded-lg hover:bg-[#14532D] transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              Shop Now
            </a>
            <button 
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-[#166534] text-[#166534] font-medium rounded-lg hover:bg-[#F0FDF4] transition-colors"
            >
              <WhatsAppIcon />
              Order on WhatsApp
            </button>
          </div>

          {/* Features Row 2 (Bottom Bar) */}
          <div className="bg-[#F0FDF4] rounded-2xl p-4 md:p-5 flex flex-wrap md:flex-nowrap gap-6 md:gap-8 items-center max-w-3xl border border-[#DCFCE7] shadow-sm relative z-20">
            <div className="flex items-center gap-3 flex-1">
              <div className="text-[#166534]">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Open Today</p>
                <p className="text-xs text-gray-500">7:00 AM – 10:00 PM</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 flex-1 border-l border-[#DCFCE7] pl-6">
              <div className="text-[#166534]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Local Delivery</p>
                <p className="text-xs text-gray-500">In selected areas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 flex-1 border-l border-[#DCFCE7] pl-6">
              <div className="text-[#166534]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900 leading-tight">Safe & Secure</p>
                <p className="text-xs text-gray-500">Contactless delivery</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
