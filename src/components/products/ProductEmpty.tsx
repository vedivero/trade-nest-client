import { FaSmile } from 'react-icons/fa';
import { ProductEmptyStyle } from './ProductEmptyStyle';
import Title from '../common/title/Title';
import { Link } from 'react-router-dom';

export const ProductEmpty = () => {
   return (
      <>
         <ProductEmptyStyle>
            <div className='icon'>
               <FaSmile />
            </div>
            <Title size='large' color='primary'>
               검색 결과가 없습니다.
            </Title>
            <p>
               {' '}
               <Link to={'/'}>전체 검색하기</Link>
            </p>
         </ProductEmptyStyle>
      </>
   );
};
