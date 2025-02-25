import { useEffect, useRef } from 'react';
import { ProductItem } from './ProductItem';
import { ProductListStyle } from './ProductListStyle';
import { useProduct } from '../../hooks/useProducts';

export const ProductList = () => {
   const { products, loadMore, hasMore, loading } = useProduct();
   const observer = useRef<IntersectionObserver | null>(null);
   const lastProductRef = useRef<HTMLDivElement | null>(null);

   useEffect(() => {
      if (loading || !hasMore) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(
         (entries) => {
            if (entries[0].isIntersecting) {
               loadMore();
            }
         },
         { threshold: 1 },
      );

      if (lastProductRef.current) {
         observer.current.observe(lastProductRef.current);
      }
   }, [loading, hasMore, loadMore]);

   return (
      <ProductListStyle>
         {products.map((product, index) => (
            <ProductItem
               key={product.id}
               product={product}
               ref={index === products.length - 1 ? lastProductRef : undefined}
            />
         ))}
         {loading && <p>Loading...</p>}
      </ProductListStyle>
   );
};
