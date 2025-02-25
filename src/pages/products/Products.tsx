import { ProductEmpty } from '../../components/products/ProductEmpty';
import { ProductList } from '../../components/products/ProductList';
import { useProduct } from '../../hooks/useProducts';
import { ProductsStyle } from './ProductsStyle';

export const Products = () => {
   const { products } = useProduct();

   return (
      <>
         <ProductsStyle>{products.length > 0 ? <ProductList /> : <ProductEmpty />}</ProductsStyle>
      </>
   );
};
