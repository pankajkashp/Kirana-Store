import React from "react";
import { Search, ShoppingCart, Store } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onCartClick,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <header className="bg-[#FDF9F1] sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => window.scrollTo(0, 0)}
          >
            <Store className="h-6 w-6 text-[#14532D]" />
            <span className="text-xl md:text-2xl font-bold text-[#14532D] tracking-tight">Raju Kirana Store</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-green-600 text-sm font-medium">Home</a>
            <a href="#shop" className="text-gray-700 hover:text-green-600 text-sm font-medium">Shop</a>
            <a href="#categories" className="text-gray-700 hover:text-green-600 text-sm font-medium">Categories</a>
          </nav>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 lg:w-64 pl-9 pr-3 py-1.5 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 text-sm"
              />
              <Search className="h-4 w-4 text-gray-400 absolute left-3" />
            </div>

            <button
              onClick={onCartClick}
              className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-green-600 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:block text-sm">Cart</span>
            </button>
          </div>
        </div>
        
        {/* Mobile Search Bar */}
        <div className="sm:hidden pb-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-green-500 text-sm"
            />
            <Search className="h-4 w-4 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
