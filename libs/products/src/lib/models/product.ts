import { Category } from './category';

export class Product {
  id?: string;
  name?: string;
  description?: string;
  richDescription?: string;
  img?: string;
  imgs?: string[];
  images?: string[];
  brand?: string;
  price?: number;
  category?: Category;
  product: Product;
  countInStock?: number;
  rating?: number;
  numReviews?: number;
  isFeatured?: boolean;
  dateCreated?: string;
}

// export interface Product {
//   // products?: Product[];

//   // product: { product: Product[] };
// }




