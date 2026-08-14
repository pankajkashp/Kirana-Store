import React from "react";
import { Store, Phone, MapPin, MessageCircle, Clock } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Store className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-white">Raju Kirana</h2>
            </div>
            <p className="text-sm text-gray-400 mt-4 leading-relaxed">
              Your trusted local grocery store, now online. We deliver fresh groceries and daily essentials directly to your doorstep.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#shop" className="hover:text-green-400 transition-colors">Shop All</a></li>
              <li><a href="#categories" className="hover:text-green-400 transition-colors">Categories</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#shop" className="hover:text-green-400 transition-colors">Fruits & Vegetables</a></li>
              <li><a href="#shop" className="hover:text-green-400 transition-colors">Dairy & Breakfast</a></li>
              <li><a href="#shop" className="hover:text-green-400 transition-colors">Snacks & Beverages</a></li>
              <li><a href="#shop" className="hover:text-green-400 transition-colors">Household Needs</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">XYZ Market, Main Road, Ghaziabad, Uttar Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">+91 76819 77854</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">WhatsApp Orders Accepted</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-sm">Mon - Sun: 8:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; 2026 Raju Kirana Store. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 text-sm text-gray-500">
            Designed for fresh and local delivery.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
