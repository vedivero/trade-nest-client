import { usePopularSearch } from '../../../context/PopularSearchContext';
import { useProduct } from '../../../context/ProductProvider';
import { PopularSearchStyle } from './PopularSearchStyle';

export const PopularSearch = () => {
   const { popularKeywords } = usePopularSearch();
   const { searchProductsByKeyword } = useProduct();

   const handleKeywordClick = async (keyword: string) => {
      await searchProductsByKeyword(keyword);
   };

   return (
      <PopularSearchStyle>
         <span className='label'>인기검색어</span>
         <div className='keywords'>
            {popularKeywords.map((keyword, index) => (
               <span key={index} className='popular-keyword' onClick={() => handleKeywordClick(keyword)}>
                  {keyword}
               </span>
            ))}
         </div>
      </PopularSearchStyle>
   );
};
