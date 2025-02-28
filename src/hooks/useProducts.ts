import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProducts } from '../api/product.api';

export const useProduct = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [loading, setLoading] = useState<boolean>(true);

   useEffect(() => {
      const fetchAllProducts = async () => {
         setLoading(true);
         try {
            const allProducts = await fetchProducts();
            setProducts(allProducts);
         } catch (error) {
            console.error('상품을 불러오는 중 오류 발생:', error);
         }
         setLoading(false);
      };

      fetchAllProducts();
   }, []);

   return { products, loading };
};
