export interface Product {
  id: number;
  sku: string;
  name: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string[];
  tags: string[];
  category: string;
  reviews: reviews[];
  averageRating: number;
  variations: string[];
  colors: string[];
}

interface reviews {
  rating: number;
  message: string;
}
