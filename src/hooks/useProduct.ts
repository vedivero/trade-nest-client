import { useEffect, useState } from 'react';
import { Product } from '../models/product.model';
import { fetchProducts } from '../api/product.api';

export const useProduct = () => {
   const [product, setProduct] = useState<Product[]>([]);

   useEffect(() => {
      fetchProducts().then((product) => {
         console.log(product);
      });
   }, []);

   return { product };
};
