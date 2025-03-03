// Search.tsx
import { useState } from 'react';
import { SearchStyle } from './SearchStyle';
import { saveSearchKeyword } from '../../../api/search.api';
import { useProduct } from '../../../context/ProductProvider';

export const Search = () => {
   const [keyword, setKeyword] = useState('');
   const { searchProductsByKeyword, resetProducts } = useProduct();

   const handleSearch = async () => {
      try {
         if (!keyword.trim()) {
            resetProducts();
            return;
         }
         await searchProductsByKeyword(keyword);
         await saveSearchKeyword(keyword);
         setKeyword('');
      } catch (error) {
         console.error('❌ 검색어 저장 중 오류 발생:', error);
      }
   };

   const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         handleSearch();
      }
   };

   return (
      <SearchStyle>
         <input
            type='text'
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder='검색어를 입력하세요.'
         />
         <button onClick={handleSearch}>검색</button>
      </SearchStyle>
   );
};
