import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ProductListStyle } from './ProductListStyle';
import { useProduct } from '../../hooks/useProducts';

export const ProductList = () => {
   const { products, favoriteProducts } = useProduct();
   const [productList, setProductList] = useState(products);

   useEffect(() => {
      setProductList(products);
   }, [products]);

   return (
      <ProductListStyle>
         {productList.map((product) => {
            const isFavorited = favoriteProducts.some((fav) => fav.product_id === product.id);
            return <ProductItem key={product.id} product={product} isFavorited={isFavorited} />;
         })}
      </ProductListStyle>
   );
};
