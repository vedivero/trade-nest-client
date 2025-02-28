import { Product } from '../models/product.model';
import { httpClient } from './http';

/**
 * 전체 상품 조회
 */
export const fetchProducts = async (page: number = 1) => {
   const response = await httpClient.get<{ products: Product[]; total: number }>(
      `/product/products?page=${page},`,
      {
         withCredentials: true,
      },
   );
   console.log('🔍 fetchProduct 응답:', response.data);
   return response.data.products.map((product) => ({
      ...product,
   }));
};

/**
 * 상품 상세 조회
 */
export const fetchProduct = async (id: number) => {
   const response = await httpClient.get<Product>(`/product/${id}`);
   return response.data;
};

/**
 * 찜하기 추가 (favorite 증가)
 */
export const addFavorite = async (id: number) => {
   // const response = await httpClient.post(`/product/favorite/${id}`);
   // return response.data;
   return await httpClient.post(
      `/product/favorite/${id}`,
      {},
      {
         withCredentials: true,
      },
   );
};

/**
 * 찜하기 취소 (favorite 감소)
 */
export const removeFavorite = async (id: number) => {
   // const response = await httpClient.delete(`/product/favorite/${id}`);
   // return response.data;
   return await httpClient.delete(`/product/favorite/${id}`, {
      withCredentials: true,
   });
};
