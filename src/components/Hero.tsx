import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="home" className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
          
          {/* Text Content */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Groceries for your home, <br />
              delivered from your local store.
            </h1>
            
            <p className="text-gray-600 text-base md:text-lg">
              Fresh groceries & daily essentials at prices you already know.
            </p>
            
            <div className="pt-2">
              <a 
                href="#shop" 
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                Start Shopping
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 w-full">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Grocery bags" 
              className="w-full h-[250px] md:h-[300px] object-cover rounded-lg border border-gray-200"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
