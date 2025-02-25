import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProducts } from '../api/product.api';

export const useProduct = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [page, setPage] = useState<number>(1);
   const [hasMore, setHasMore] = useState<boolean>(true);
   const [loading, setLoading] = useState<boolean>(false);

   const loadMore = async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
         const newProducts = await fetchProducts(page);

         setProducts((prevProducts) => {
            const uniqueProducts = newProducts.filter(
               (newProduct) => !prevProducts.some((prevProduct) => prevProduct.id === newProduct.id),
            );
            return [...prevProducts, ...uniqueProducts];
         });

         setPage((prevPage) => prevPage + 1);
         setHasMore(newProducts.length > 0);
      } catch (error) {
         console.error('상품을 불러오는 중 오류 발생:', error);
      }
      setLoading(false);
   };

   useEffect(() => {
      loadMore();
   }, []);

   return { products, loadMore, hasMore, loading };
};
