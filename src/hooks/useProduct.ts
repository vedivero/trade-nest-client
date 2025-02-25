import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProduct } from '../api/product.api';

export const useProductDetail = (id: number) => {
   const [product, setProduct] = useState<Product | null>(null);

   useEffect(() => {
      if (!id) return;

      fetchProduct(id)
         .then((product) => {
            setProduct(product);
         })
         .catch(() => setProduct(null));
   }, [id]);

   return product;
};
