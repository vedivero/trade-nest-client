import { httpClient } from './http';

/**
 * Top 10 인기 검색어 조회 API
 */
export const getPopularKeywords = async (): Promise<string[]> => {
   try {
      const response = await httpClient.get('/keyword/getPopularKeywords');
      return response.data.data.map((keyword: { keyword: string }) => keyword.keyword);
   } catch (error: any) {
      console.error('Top10 인기 검색어 조회 실패:', error.response?.data || error.message);
      throw new Error('인기 검색어를 가져오는 중 오류가 발생했습니다.');
   }
};

/**
 *  검색어 저장 API
 * @param keyword 사용자가 입력한 검색어
 */
export const saveSearchKeyword = async (keyword: string): Promise<void> => {
   try {
      await httpClient.get(`/keyword?saveKeyword=${encodeURIComponent(keyword)}`);
   } catch (error: any) {
      console.error('검색어 저장 실패:', error.response?.data || error.message);
      throw new Error('검색어 저장 중 오류가 발생했습니다.');
   }
};

/**
 *  상품 검색 API
 * @param keyword 사용자가 입력한 검색어
 */
export const searchProducts = async (keyword: string): Promise<void> => {
   try {
      await httpClient.get(`/keyword/searchProducts/searchKeyword=${encodeURIComponent(keyword)}`);
   } catch (error: any) {
      console.error('상품 검색 실패:', error.response?.data || error.message);
      throw new Error('상품 검색 중 오류가 발생했습니다.');
   }
};
