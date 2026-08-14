import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import { DeliveryArea, HowItWorks, StoreInfo, StoreInfoStrip } from "./components/HomeSections";
import Footer from "./components/Footer";
import { CartDrawer, CheckoutModal, ProductDetailModal, OrderSuccessModal } from "./components/Modals";

import { products, categories } from "./data/products";
import { Product, CartItem } from "./types";
import { SearchX } from "lucide-react";

const App: React.FC = () => {
  // Global State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Derived State
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handlers
  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === productId ? { ...item, quantity } : item))
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleCheckoutOpen = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleConfirmOrder = (customerDetails: any) => {
    const orderItems = cart
      .map(
        (item) =>
          `${item.quantity}x ${item.name} (${item.unit}) — ₹${item.price * item.quantity}`
      )
      .join("\n");

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = 30;
    const total = subtotal + delivery;

    const message = 
      `Hello Raju Kirana Store,\n\nI would like to place an order.\n\n` +
      `*Customer:*\n${customerDetails.name}\n` +
      `*Phone:*\n${customerDetails.phone}\n` +
      `*Address:*\n${customerDetails.address}, ${customerDetails.pincode}\n\n` +
      `*Order:*\n${orderItems}\n\n` +
      `Subtotal: ₹${subtotal}\n` +
      `Delivery: ₹${delivery}\n` +
      `*Total: ₹${total}*\n\n` +
      `Please confirm.`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917681977854?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");

    setIsCheckoutOpen(false);
    setIsSuccessOpen(true);
    setCart([]);
  };

  // Group products for homepage
  const popularProducts = useMemo(() => products.filter(p => p.isPopular), []);
  const offerProducts = useMemo(() => products.filter(p => p.originalPrice && p.originalPrice > p.price), []);
  
  // Apply category and search filters to "All Products" (or search view)
  const filteredProducts = useMemo(() => {
    let filtered = products;
    if (selectedCategory !== "All") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [selectedCategory, searchQuery]);

  const isSearching = searchQuery.trim() !== "" || selectedCategory !== "All";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)} 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <main className="flex-grow bg-white">
        {!isSearching && (
          <>
            <Hero />
            <StoreInfoStrip />
          </>
        )}
        
        <CategorySection 
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div id="shop" className="pt-2">
          {isSearching ? (
            <>
              {filteredProducts.length === 0 ? (
                <div className="py-20 text-center px-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SearchX className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">No products found</h3>
                  <button 
                    onClick={() => {setSearchQuery(""); setSelectedCategory("All");}}
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50"
                  >
                    Clear Search
                  </button>
                </div>
              ) : (
                <ProductGrid 
                  title={searchQuery ? `Search results for "${searchQuery}"` : `${selectedCategory} Products`}
                  products={filteredProducts}
                  cart={cart}
                  onAddToCart={handleAddToCart}
                  onUpdateQuantity={handleUpdateQuantity}
                  onProductClick={setSelectedProduct}
                />
              )}
            </>
          ) : (
            <>
              <ProductGrid 
                title="Popular Products"
                products={popularProducts}
                cart={cart}
                onAddToCart={handleAddToCart}
                onUpdateQuantity={handleUpdateQuantity}
                onProductClick={setSelectedProduct}
              />
              <ProductGrid 
                title="Today's Offers"
                products={offerProducts}
                cart={cart}
                onAddToCart={handleAddToCart}
                onUpdateQuantity={handleUpdateQuantity}
                onProductClick={setSelectedProduct}
              />
              <ProductGrid 
                title="All Products"
                products={products}
                cart={cart}
                onAddToCart={handleAddToCart}
                onUpdateQuantity={handleUpdateQuantity}
                onProductClick={setSelectedProduct}
              />
            </>
          )}
        </div>

        {!isSearching && (
          <>
            <DeliveryArea />
            <HowItWorks />
            <StoreInfo />
          </>
        )}
      </main>

      <Footer />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckoutOpen}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onConfirmOrder={handleConfirmOrder}
      />

      <ProductDetailModal
        isOpen={!!selectedProduct}
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        quantityInCart={selectedProduct ? (cart.find(c => c.id === selectedProduct.id)?.quantity || 0) : 0}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
      />

      <OrderSuccessModal
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
      />
    </div>
  );
};

export default App;
