import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProducts } from '../api/product.api';

export const useProduct = () => {
   const [products, setProducts] = useState<Product[]>([]);
   const [page, setPage] = useState(1);
   const [hasMore, setHasMore] = useState(true);
   const [loading, setLoading] = useState(false);

   const loadMore = async () => {
      if (loading || !hasMore) return;

      setLoading(true);
      try {
         const response = await fetchProducts(page);
         setProducts((prev) => [...prev, ...response.products]);
         setHasMore(response.hasMore);
         setPage((prev) => prev + 1);
      } catch (error) {
         console.error('상품 로딩 실패:', error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      loadMore();
   }, []);

   return { products, loadMore, hasMore, loading };
};
