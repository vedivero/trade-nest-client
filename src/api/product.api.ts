import { FavoritedProducts } from '../models/FavoritedProducts.model';
import { Product } from '../models/product.model';
import { httpClient } from './http';

/**
 * 전체 상품 조회
 */
export const fetchProducts = async () => {
   const response = await httpClient.get<{ products: Product[]; favoritedProducts: FavoritedProducts[] }>(
      `/product/products`,
      {
         withCredentials: true,
      },
   );
   const products = response.data.products?.map((product) => ({ ...product })) || [];
   const favoriteProducts = response.data.favoritedProducts?.map((fav) => ({ ...fav })) || [];

   return { products, favoriteProducts };
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
   return await httpClient.post(`/product/favorite/${id}`, {
      withCredentials: true,
   });
};

/**
 * 찜하기 취소 (favorite 감소)
 */
export const removeFavorite = async (id: number) => {
   return await httpClient.delete(`/product/favorite/${id}`, {
      withCredentials: true,
   });
};
