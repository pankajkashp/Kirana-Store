import React from "react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  quantityInCart: number;
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantityInCart,
  onAddToCart,
  onUpdateQuantity,
  onClick
}) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden flex flex-col h-full hover:border-green-500 transition-colors">
      {/* Image Area */}
      <div 
        className="relative h-40 sm:h-48 overflow-hidden bg-white cursor-pointer p-4"
        onClick={() => onClick(product)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply"
          loading="lazy"
        />
        
        {/* Badges */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-green-100 text-green-800 text-xs font-bold px-1.5 py-0.5 rounded">
            {discount}% OFF
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="p-3 flex flex-col flex-grow border-t border-gray-100">
        <div 
          className="cursor-pointer flex-grow"
          onClick={() => onClick(product)}
        >
          <h3 className="text-gray-900 font-medium text-sm sm:text-base leading-snug line-clamp-2">{product.name}</h3>
          <p className="text-gray-500 text-xs sm:text-sm mt-1">{product.unit}</p>
        </div>
        
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div className="flex items-center space-x-1.5">
            <span className="text-base sm:text-lg font-bold text-gray-900">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-xs sm:text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>
          
          {/* Add to Cart Actions */}
          <div onClick={(e) => e.stopPropagation()}>
            {quantityInCart === 0 ? (
              <button 
                onClick={() => onAddToCart(product)}
                className="w-full sm:w-auto px-4 py-1.5 bg-green-50 text-green-700 text-sm font-medium rounded border border-green-200 hover:bg-green-100 transition-colors"
              >
                Add
              </button>
            ) : (
              <div className="flex items-center justify-between bg-green-50 rounded border border-green-200 h-8">
                <button 
                  onClick={() => onUpdateQuantity(product.id, quantityInCart - 1)}
                  className="px-2.5 text-green-700 hover:bg-green-100 h-full flex items-center font-medium"
                >
                  -
                </button>
                <span className="w-6 text-center text-sm font-semibold text-green-900">
                  {quantityInCart}
                </span>
                <button 
                  onClick={() => onUpdateQuantity(product.id, quantityInCart + 1)}
                  className="px-2.5 text-green-700 hover:bg-green-100 h-full flex items-center font-medium"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
