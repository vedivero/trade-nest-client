import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ProductListStyle } from './ProductListStyle';
import { useProduct } from '../../hooks/useProducts';

export const ProductList = () => {
   const { products, loading } = useProduct();
   const [productList, setProductList] = useState(products);

   useEffect(() => {
      setProductList(products);
   }, [products]);

   return (
      <ProductListStyle>
         {productList.map((product) => (
            <ProductItem key={product.id} product={product} />
         ))}
         {loading && <p>Loading...</p>}
      </ProductListStyle>
   );
};
