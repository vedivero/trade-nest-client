import { ProductDetailStyle } from './ProductDetailStyle';
import { useProductDetail } from '../../hooks/useProduct';
import { useParams } from 'react-router-dom';
import Title from '../common/title/Title';
import { getImgSrc } from '../../utils/image';
import { Product } from '../../models/product.model';
import { formatDate, formatNumber } from '../../utils/format';
import { useState } from 'react';

const productList = [
   { label: '카테고리', key: 'product_category' },
   {
      label: '가격',
      key: 'product_price',
      filter: (product: Product) => `₩ ${formatNumber(product.product_price)}원`,
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
   const { id } = useParams<{ id: string }>(); // URL에서 상품 ID 가져오기
   const product = useProductDetail(Number(id)); // useProductDetail 훅으로 데이터 가져오기

   const [likes, setLikes] = useState(product?.favorite_cnt || 0);
   const [liked, setLiked] = useState(false);

   if (!product) {
      return <ProductDetailStyle>상품 정보를 찾을 수 없습니다.</ProductDetailStyle>;
   }

   const handleLike = () => {
      setLiked(!liked);
      setLikes((prev) => (liked ? prev - 1 : prev + 1));
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

               {/* 버튼 추가된 영역 */}
               <div className='product-buttons'>
                  <button className={`like-button ${liked ? 'liked' : ''}`} onClick={handleLike}>
                     {liked ? '🤍' : '❤️'} 찜하기 {likes}
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
