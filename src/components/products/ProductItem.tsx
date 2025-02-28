import { forwardRef, useEffect, useState } from 'react';
import { Product } from '../../models/product.model';
import { getImgSrc } from '../../utils/image';
import { ProductItemStyle } from './ProductItemStyle';
import { formatNumber } from '../../utils/format';
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../../api/product.api';
import { useUser } from '../../context/UserContext';

interface ProductItemProps {
   product: Product;
   isFavorited: boolean;
   onFavoriteToggle: (productId: number, isFavorited: boolean) => void;
}

export const ProductItem = forwardRef<HTMLDivElement, ProductItemProps>(
   ({ product, isFavorited, onFavoriteToggle }, ref) => {
      const { user } = useUser();
      const [favorited, setFavorited] = useState<boolean>(isFavorited);
      const [favorites, setFavorites] = useState<number>(product.favorite_cnt);

      useEffect(() => {
         setFavorited(isFavorited);
      }, [isFavorited]);

      const handleFavorite = async (event: React.MouseEvent) => {
         event.preventDefault();
         if (!user) {
            alert('로그인이 필요합니다.');
            return;
         }

         try {
            let updatedFavorited = !favorited;
            if (updatedFavorited) {
               await addFavorite(product.id);
               setFavorites((prev) => prev + 1);
            } else {
               await removeFavorite(product.id);
               setFavorites((prev) => Math.max(prev - 1, 0));
            }

            setFavorited(updatedFavorited);
            onFavoriteToggle(product.id, updatedFavorited);
         } catch (error) {
            alert('찜하기 요청 중 오류가 발생했습니다.');
         }
      };

      return (
         <ProductItemStyle ref={ref}>
            <Link
               to={`/productDetail/${product.id}`}
               state={{ isFavorited: favorited }}
               className='product-link'
            >
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
                     <div className={`favorite ${favorited ? 'favorited' : ''}`} onClick={handleFavorite}>
                        {favorited ? '❤️' : '🤍'}
                        <span>{favorites}</span>
                     </div>
                  </div>
               </div>
            </Link>
         </ProductItemStyle>
      );
   },
);
