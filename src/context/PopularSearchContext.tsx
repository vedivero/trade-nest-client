import { createContext, useContext, useState, useEffect } from 'react';
import { getPopularKeywords } from '../api/search.api';

const PopularSearchContext = createContext<{ popularKeywords: string[] } | undefined>(undefined);

export const PopularSearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [popularKeywords, setPopularKeywords] = useState<string[]>([]);

   useEffect(() => {
      const fetchPopularKeywords = async () => {
         const keywords = await getPopularKeywords();
         setPopularKeywords(keywords);
      };
      fetchPopularKeywords();
   }, []);

   return (
      <PopularSearchContext.Provider value={{ popularKeywords }}>{children}</PopularSearchContext.Provider>
   );
};

export const usePopularSearch = () => {
   const context = useContext(PopularSearchContext);
   if (!context) {
      throw new Error('popularSearch를 PopularSearch 제공자 내에서 사용해야 합니다');
   }
   return context;
};
