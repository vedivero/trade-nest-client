import { forwardRef } from 'react';
import { Product } from '../../models/product.model';
import { getImgSrc } from '../../utils/image';
import { ProductItemStyle } from './ProductItemStyle';
import { formatNumber } from '../../utils/format';
import { Link } from 'react-router-dom';

interface ProductItemProps {
   product: Product;
   isFavorited: boolean;
}

export const ProductItem = forwardRef<HTMLDivElement, ProductItemProps>(({ product, isFavorited }, ref) => {
   return (
      <ProductItemStyle ref={ref}>
         <Link to={`/productDetail/${product.id}`} state={{ isFavorited }} className='product-link'>
            <div className='img'>
               <img src={getImgSrc()} alt={product.product_nm} />
            </div>
            <div className='category-badge'>{product.product_category}</div>
            <div className='content'>
               <h2 className='title'>{product.product_nm}</h2>
               <p className='desc'>{product.product_desc}</p>
               <p className='seller'>{product.seller_id}</p>
               <div className='bottom-section'>
                  <p className='price'>{formatNumber(product.product_price)}원</p>
                  <div className={`favorite ${isFavorited ? 'favorited' : ''}`}>
                     {isFavorited ? '❤️' : '🤍'}
                     <span>{product.favorite_cnt}</span>
                  </div>
               </div>
            </div>
         </Link>
      </ProductItemStyle>
   );
});
