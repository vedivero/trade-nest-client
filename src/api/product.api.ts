import { Product } from '../models/product.model';
import { httpClient } from './http';

export const fetchProducts = async (page: number = 1) => {
   const response = await httpClient.get<{ products: Product[]; total: number }>(
      `/product/products?page=${page}`,
   );

   return response.data.products;
};

export const fetchProduct = async (id: number) => {
   const response = await httpClient.get<Product>(`/product/${id}`);
   return response.data;
};
