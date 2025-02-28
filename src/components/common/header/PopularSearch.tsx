import { usePopularSearch } from '../../../context/PopularSearchContext';
import { PopularSearchStyle } from './PopularSearchStyle';

export const PopularSearch = () => {
   const { popularKeywords } = usePopularSearch();

   return (
      <PopularSearchStyle>
         <span className='label'>인기검색어</span>
         <div className='keywords'>
            {popularKeywords.map((keyword, index) => (
               <span key={index} className='popular-keyword'>
                  {keyword}
               </span>
            ))}
         </div>
      </PopularSearchStyle>
   );
};
