// ProductList.tsx
import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ProductListStyle } from './ProductListStyle';
import { useProduct } from '../../context/ProductProvider';

interface FavoritedProduct {
   product_id: number;
   user_id?: number;
}

export const ProductList = () => {
   const { products, favoriteProducts } = useProduct();
   const [favoriteProductsList, setFavoriteProductsList] = useState<FavoritedProduct[]>(favoriteProducts);

   useEffect(() => {
      setFavoriteProductsList(favoriteProducts);
   }, [favoriteProducts]);

   const handleFavoriteToggle = (productId: number, isFavorited: boolean) => {
      setFavoriteProductsList((prev) =>
         isFavorited
            ? [...prev, { product_id: productId }]
            : prev.filter((fav) => fav.product_id !== productId),
      );
   };

   return (
      <ProductListStyle>
         {products.map((product, index) => {
            const isFavorited = favoriteProductsList.some((fav) => fav.product_id === product.id);
            return (
               <ProductItem
                  key={`product-${product.id}-${index}`}
                  product={product}
                  isFavorited={isFavorited}
                  onFavoriteToggle={handleFavoriteToggle}
               />
            );
         })}
      </ProductListStyle>
   );
};
