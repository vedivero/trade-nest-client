// ProductProvider.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchProducts } from '../api/product.api';
import { searchProducts } from '../api/search.api';
import { Product } from '../models/product.model';
import { FavoritedProducts } from '../models/FavoritedProducts.model';

interface ProductContextType {
   products: Product[];
   favoriteProducts: FavoritedProducts[];
   searchProductsByKeyword: (keyword: string) => Promise<void>;
   resetProducts: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [products, setProducts] = useState<Product[]>([]);
   const [favoriteProducts, setFavoriteProducts] = useState<FavoritedProducts[]>([]);

   useEffect(() => {
      fetchAllProducts();
   }, []);

   const fetchAllProducts = async () => {
      try {
         const { products, favoriteProducts } = await fetchProducts();
         setProducts(products);
         setFavoriteProducts(favoriteProducts);
      } catch (error) {
         console.error('상품을 불러오는 중 오류 발생:', error);
      }
   };

   const searchProductsByKeyword = async (keyword: string) => {
      try {
         if (!keyword.trim()) {
            resetProducts();
            return;
         }
         const { products, favoriteProducts } = await searchProducts(keyword);

         setProducts(products);
         setFavoriteProducts(favoriteProducts);
      } catch (error) {
         console.error('상품 검색 중 오류 발생:', error);
      }
   };

   const resetProducts = () => {
      fetchAllProducts();
   };

   return (
      <ProductContext.Provider value={{ products, favoriteProducts, searchProductsByKeyword, resetProducts }}>
         {children}
      </ProductContext.Provider>
   );
};

export const useProduct = () => {
   const context = useContext(ProductContext);
   if (!context) {
      throw new Error('useProduct는 ProductProvider 내에서만 사용할 수 있습니다.');
   }
   return context;
};
