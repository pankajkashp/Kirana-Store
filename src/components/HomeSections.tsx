import React, { useState } from "react";
import { Check } from "lucide-react";

export const StoreInfoStrip: React.FC = () => {
  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Local delivery</span>
            <span className="text-gray-600">Same-day delivery in selected areas</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Easy ordering</span>
            <span className="text-gray-600">Order directly through WhatsApp</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Local prices</span>
            <span className="text-gray-600">Everyday grocery essentials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DeliveryArea: React.FC = () => {
  const [pincode, setPincode] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  
  const supportedPincodes = ["201001", "201002", "201003", "110001", "110002"];

  const checkDelivery = (e: React.FormEvent) => {
    e.preventDefault();
    if (supportedPincodes.includes(pincode)) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Check if we deliver to you</h3>
            <p className="text-gray-600 text-sm mt-1">Enter your pincode to check delivery availability.</p>
          </div>
          
          <div className="w-full md:w-auto">
            <form onSubmit={checkDelivery} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => {
                  setPincode(e.target.value);
                  setStatus("idle");
                }}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500 w-full md:w-48 text-sm"
                maxLength={6}
              />
              <button
                type="submit"
                className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 text-sm whitespace-nowrap"
              >
                Check
              </button>
            </form>
            
            {status === "success" && (
              <p className="text-green-700 text-sm mt-2 font-medium flex items-center">
                <Check className="h-4 w-4 mr-1" /> Delivery available in your area
              </p>
            )}
            
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">
                Sorry, delivery isn't available in this area yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">How Ordering Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-bold text-gray-900 mb-1">1. Shop</div>
            <p className="text-gray-600 text-sm">Browse groceries and daily essentials.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <div className="font-bold text-gray-900 mb-1">2. Add to cart</div>
            <p className="text-gray-600 text-sm">Review your cart and enter details.</p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg bg-green-50 border-green-100">
            <div className="font-bold text-green-900 mb-1">3. Order on WhatsApp</div>
            <p className="text-green-800 text-sm">Your order is sent directly to our store.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const StoreInfo: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Store Information</h2>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6 max-w-2xl">
          <div className="space-y-4 text-sm">
            <div className="flex border-b border-gray-100 pb-3">
              <span className="w-32 text-gray-500">Status</span>
              <span className="font-medium text-green-600">Open today · 7:00 AM – 10:00 PM</span>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <span className="w-32 text-gray-500">Phone</span>
              <span className="font-medium text-gray-900">+91 76819 77854</span>
            </div>
            <div className="flex border-b border-gray-100 pb-3">
              <span className="w-32 text-gray-500">Address</span>
              <span className="text-gray-900">XYZ Market, Main Road, Ghaziabad, Uttar Pradesh</span>
            </div>
            <div className="flex">
              <span className="w-32 text-gray-500">Ordering</span>
              <span className="text-gray-900">WhatsApp orders accepted for local delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
