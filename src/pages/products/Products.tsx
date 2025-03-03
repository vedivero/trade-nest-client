import { ProductList } from '../../components/products/ProductList';
import { ProductsStyle } from './ProductsStyle';

export const Products = () => {
   return (
      <>
         {/* <ProductsStyle>{products.length > 0 ? <ProductList /> : <ProductEmpty />}</ProductsStyle> */}
         <ProductsStyle>
            <ProductList />
         </ProductsStyle>
      </>
   );
};
