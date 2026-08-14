export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  description: string;
  stock: number;
  isPopular?: boolean;
  isFeatured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
