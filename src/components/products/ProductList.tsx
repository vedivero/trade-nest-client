import { useEffect, useState } from 'react';
import { ProductItem } from './ProductItem';
import { ProductListStyle } from './ProductListStyle';
import { useProduct } from '../../hooks/useProducts';

interface FavoritedProduct {
   product_id: number;
   user_id?: number;
}

export const ProductList = () => {
   const { products, favoriteProducts } = useProduct();
   const [productList, setProductList] = useState(products);
   const [favoriteProductsList, setFavoriteProductsList] = useState<FavoritedProduct[]>(favoriteProducts);

   useEffect(() => {
      setProductList(products);
      setFavoriteProductsList(favoriteProducts);
   }, [products, favoriteProducts]);

   const handleFavoriteToggle = (productId: number, isFavorited: boolean) => {
      setFavoriteProductsList((prev) =>
         isFavorited
            ? [...prev, { product_id: productId }]
            : prev.filter((fav) => fav.product_id !== productId),
      );
   };

   return (
      <ProductListStyle>
         {productList.map((product) => {
            const isFavorited = favoriteProductsList.some((fav) => fav.product_id === product.id);
            return (
               <ProductItem
                  key={product.id}
                  product={product}
                  isFavorited={isFavorited}
                  onFavoriteToggle={handleFavoriteToggle} // ✅ 상태 업데이트 함수 전달
               />
            );
         })}
      </ProductListStyle>
   );
};
