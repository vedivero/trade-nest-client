import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProducts } from '../api/product.api';
import { FavoritedProducts } from '../models/FavoritedProducts.model';

export const useProduct = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [favoriteProducts, setFavoriteProducts] = useState<FavoritedProducts[]>([]);

   useEffect(() => {
      const fetchAllProducts = async () => {
         try {
            const { products, favoriteProducts } = await fetchProducts();
            setProducts(products);
            setFavoriteProducts(favoriteProducts);
         } catch (error) {
            console.error('상품을 불러오는 중 오류 발생:', error);
         }
      };

      fetchAllProducts();
   }, []);

   return { products, favoriteProducts };
};
