import { usePopularSearch } from '../../../context/PopularSearchContext';
import { PopularSearchStyle } from './PopularSearchStyle';

export const PopularSearch = () => {
   const { popularKeywords } = usePopularSearch(); // 인기 검색어 컨텍스트에서 가져오기

   return (
      <PopularSearchStyle>
         인기검색어{' '}
         {popularKeywords.map((keyword, index) => (
            <button key={index} className='popular-button'>
               {keyword}
            </button>
         ))}
      </PopularSearchStyle>
   );
};
