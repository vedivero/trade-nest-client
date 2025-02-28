import { ProductDetailStyle } from './ProductDetailStyle';
import { useParams, useLocation } from 'react-router-dom';
import Title from '../common/title/Title';
import { getImgSrc } from '../../utils/image';
import { Product } from '../../models/product.model';
import { formatDate, formatNumber } from '../../utils/format';
import { useEffect, useState } from 'react';
import { addFavorite, fetchProduct, removeFavorite } from '../../api/product.api';
import { useUser } from '../../context/UserContext';

const productList = [
   { label: '카테고리', key: 'product_category' },
   {
      label: '가격',
      key: 'product_price',
      filter: (product: Product) => `${formatNumber(product.product_price)}원`,
   },
   {
      label: '상품 상태',
      key: 'product_condition',
      filter: (product: Product) => (product.product_condition === 'new' ? '새 상품과 동일' : '사용감 있음'),
   },
   { label: '거래 지역', key: 'trade_loc' },
   { label: '거래 방법', key: 'trade_method' },
   {
      label: '등록일',
      key: 'product_reg_date',
      filter: (product: Product) => formatDate(product.product_reg_date),
   },
];

export const ProductDetail = () => {
   const { id } = useParams<{ id: string }>();
   const location = useLocation();
   const { user } = useUser();
   const [product, setProduct] = useState<Product | null>(null);
   const [favorites, setFavorites] = useState(0);
   const [favorited, setFavorited] = useState<boolean>(location.state?.isFavorited ?? false);

   useEffect(() => {
      const loadProduct = async () => {
         const data = await fetchProduct(Number(id));
         setProduct(data ?? null);
         setFavorites(data.favorite_cnt);
      };

      loadProduct();
   }, [id]);

   if (!product) {
      return <ProductDetailStyle>상품 정보를 찾을 수 없습니다.</ProductDetailStyle>;
   }

   const handleFavorite = async () => {
      if (!user) {
         alert('로그인이 필요합니다.');
         return;
      }

      try {
         if (favorited) {
            await removeFavorite(product.id);
            setFavorites((prev) => prev - 1);
         } else {
            await addFavorite(product.id);
            setFavorites((prev) => prev + 1);
         }
         setFavorited(!favorited);
      } catch (error) {
         alert('찜하기 요청 중 오류가 발생했습니다.');
      }
   };

   return (
      <ProductDetailStyle>
         <header className='header'>
            <div className='img'>
               <img src={getImgSrc()} alt={product.product_nm} />
            </div>
            <div className='info'>
               <Title size='large' color='text'>
                  {product.product_nm}
               </Title>
               {productList.map((item) => (
                  <dl key={item.key}>
                     <dt>{item.label}</dt>
                     <dd>{item.filter ? item.filter(product) : product[item.key as keyof Product]}</dd>
                  </dl>
               ))}

               <div className='product-buttons'>
                  <button
                     className={`favorite-button ${favorited ? 'favorited' : ''}`}
                     onClick={handleFavorite}
                  >
                     {favorited ? '🤍' : '❤️'} 찜하기 {favorites}
                  </button>
                  <button className='chat-button' onClick={() => alert('채팅 페이지로 이동')}>
                     🗨️ 채팅하기
                  </button>
                  <button className='buy-button' onClick={() => alert('구매 페이지로 이동')}>
                     🛒 구매하기
                  </button>
               </div>
            </div>
         </header>

         <div className='content'>
            <Title size='medium'>상품 설명</Title>
            <p className='detail'>{product.product_desc}</p>
         </div>
      </ProductDetailStyle>
   );
};
