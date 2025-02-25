import { ProductEmpty } from '../../components/products/ProductEmpty';
import { ProductList } from '../../components/products/ProductList';
import { useProduct } from '../../hooks/useProduct';
import { ProductsStyle } from './ProductsStyle';

export const Products = () => {
   const { products } = useProduct();

   return (
      <>
         <ProductsStyle>{products.length > 0 ? <ProductList /> : <ProductEmpty />}</ProductsStyle>
      </>
   );
};
