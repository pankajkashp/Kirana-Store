import React, { useState } from "react";
import { X, ShoppingCart, Trash2, CheckCircle } from "lucide-react";
import { Product, CartItem } from "../types";

// ==========================================
// CART DRAWER
// ==========================================
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="fixed inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md w-full flex flex-col bg-white border-l border-gray-200">
          {/* Header */}
          <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-bold text-gray-900 flex items-center">
              <ShoppingCart className="h-5 w-5 mr-2 text-gray-700" />
              Your Cart
            </h2>
            <button onClick={onClose} className="p-2 text-gray-500 hover:text-gray-800 rounded-md hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-gray-500">
                <ShoppingCart className="h-12 w-12 text-gray-300 mb-3" />
                <p className="text-gray-900 font-medium">Your cart is empty</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-contain border border-gray-200 rounded" />
                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between items-start">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                      <button onClick={() => onRemoveItem(item.id)} className="text-gray-400 hover:text-red-600 ml-2">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-gray-900">₹{item.price}</span>
                      <div className="flex items-center border border-gray-300 rounded h-8">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="px-2 text-gray-600 hover:bg-gray-100 h-full font-medium"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-900">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="px-2 text-gray-600 hover:bg-gray-100 h-full font-medium"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-4 bg-gray-50">
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ==========================================
// CHECKOUT MODAL
// ==========================================
interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onConfirmOrder: (customerDetails: any) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cart,
  onConfirmOrder
}) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirmOrder(formData);
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-lg bg-white rounded-lg shadow-lg">
          <div className="px-5 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 rounded-t-lg">
            <h3 className="text-lg font-bold text-gray-900">Your details</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="px-5 py-5">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:border-green-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input required type="tel" pattern="[0-9]{10}" placeholder="10 digit number" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:border-green-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <textarea required rows={2} value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                <input required type="text" maxLength={6} value={formData.pincode} onChange={e => setFormData({...formData, pincode: e.target.value})} className="w-full border-gray-300 border rounded-md px-3 py-2 focus:border-green-500 focus:outline-none" />
              </div>

              {/* Order Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Order Summary</h4>
                <div className="space-y-2 text-sm text-gray-600 mb-4 max-h-32 overflow-y-auto pr-2 border-b border-gray-100 pb-4">
                  {cart.map(item => (
                    <div key={item.id} className="flex justify-between">
                      <span>{item.quantity}x {item.name}</span>
                      <span className="text-gray-900">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between font-bold text-gray-900 text-base pt-2">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 flex justify-center items-center gap-2">
                  <WhatsAppIcon />
                  ORDER ON WHATSAPP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);


// ==========================================
// ORDER SUCCESS MODAL
// ==========================================
interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-sm bg-white rounded-lg shadow-lg p-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-50 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Order Opened!</h3>
          <p className="text-gray-600 text-sm mb-6">
            Your order details have been placed in WhatsApp. Please send the message to confirm your order.
          </p>
          <button onClick={() => { onClose(); window.scrollTo(0,0); }} className="w-full border border-gray-300 py-2 rounded-md text-gray-700 font-medium hover:bg-gray-50">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};


// ==========================================
// PRODUCT DETAIL MODAL
// ==========================================
interface ProductDetailModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  quantityInCart: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  isOpen,
  onClose,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity
}) => {
  if (!isOpen || !product) return null;

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative w-full max-w-2xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden border border-gray-200">
          <button onClick={onClose} className="absolute top-2 right-2 z-10 p-1.5 bg-white rounded-full text-gray-500 hover:text-gray-800 border border-gray-200">
            <X className="h-5 w-5" />
          </button>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 relative bg-white">
            <img src={product.image} alt={product.name} className="max-w-full h-auto max-h-[250px] object-contain" />
            {discount > 0 && (
              <span className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded">
                {discount}% OFF
              </span>
            )}
          </div>
          
          {/* Details Side */}
          <div className="w-full md:w-1/2 p-6 flex flex-col justify-between bg-gray-50">
            <div>
              <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">{product.category}</span>
              <h2 className="text-xl font-bold text-gray-900 mt-1 mb-2">{product.name}</h2>
              
              <div className="flex items-end space-x-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-gray-400 line-through">₹{product.originalPrice}</span>
                )}
                <span className="text-gray-500 text-sm ml-1">/ {product.unit}</span>
              </div>
              
              <p className="text-gray-600 text-sm mb-6">
                {product.description}
              </p>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-4">
              {quantityInCart === 0 ? (
                <button 
                  onClick={() => onAddToCart(product)}
                  className="w-full py-2.5 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  Add to Cart
                </button>
              ) : (
                <div className="flex items-center justify-between bg-white border border-green-500 rounded-md h-11">
                  <button 
                    onClick={() => onUpdateQuantity(product.id, quantityInCart - 1)}
                    className="px-4 text-green-700 hover:bg-green-50 h-full font-medium"
                  >
                    -
                  </button>
                  <span className="text-base font-bold text-gray-900">
                    {quantityInCart}
                  </span>
                  <button 
                    onClick={() => onUpdateQuantity(product.id, quantityInCart + 1)}
                    className="px-4 text-green-700 hover:bg-green-50 h-full font-medium"
                  >
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
