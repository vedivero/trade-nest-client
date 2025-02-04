import { Product } from '../models/product.model';
import { httpClient } from './http';

export const fetchProducts = async () => {
   const response = await httpClient.get<Product[]>('/product/products');
   console.log('response : ', response);
   return response.data;
};
