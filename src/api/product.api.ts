import { Product } from '../models/product.model';
import { httpClient } from './http';

export const fetchProducts = async (page: number = 1) => {
   const response = await httpClient.get<{ products: Product[]; hasMore: boolean }>(
      `/product/products?page=${page}&limit=10`,
   );
   return response.data;
};
