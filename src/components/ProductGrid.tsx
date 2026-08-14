import React from "react";
import ProductCard from "./ProductCard";
import { Product, CartItem } from "../types";

interface ProductGridProps {
  title: string;
  products: Product[];
  cart: CartItem[];
  onAddToCart: (product: Product) => void;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  title,
  products,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onProductClick
}) => {
  const getQuantityInCart = (productId: string) => {
    const item = cart.find(i => i.id === productId);
    return item ? item.quantity : 0;
  };

  if (products.length === 0) {
    return null; // Do not render empty sections
  }

  return (
    <section className="py-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              quantityInCart={getQuantityInCart(product.id)}
              onAddToCart={onAddToCart}
              onUpdateQuantity={onUpdateQuantity}
              onClick={onProductClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
