import { httpClient } from './http';

/**
 * 인기 검색어 조회 API
 */
export const getPopularKeywords = async (): Promise<string[]> => {
   try {
      const response = await httpClient.get('/popular-keyword/popular');
      return response.data.data.map((keyword: { keyword: string }) => keyword.keyword);
   } catch (error: any) {
      console.error('❌ 인기 검색어 조회 실패:', error.response?.data || error.message);
      throw new Error('인기 검색어를 가져오는 중 오류가 발생했습니다.');
   }
};

/**
 *  검색어 저장 API
 * @param keyword 사용자가 입력한 검색어
 */
export const saveSearchKeyword = async (keyword: string): Promise<void> => {
   try {
      await httpClient.get(`/popular-keyword?keyword=${encodeURIComponent(keyword)}`);
   } catch (error: any) {
      console.error('❌ 검색어 저장 실패:', error.response?.data || error.message);
      throw new Error('검색어 저장 중 오류가 발생했습니다.');
   }
};
