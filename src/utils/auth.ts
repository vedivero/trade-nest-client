import { parseCookies } from 'nookies';
import { jwtDecode } from 'jwt-decode';

/**
 * 쿠키에서 JWT 토큰을 가져와서 userId를 반환하는 함수
 */
export const getUserIdFromCookie = (): number | null => {
   try {
      const cookies = parseCookies();
      const token = cookies.authToken; // 쿠키에 저장된 JWT 토큰

      if (!token) return null;

      const decoded = jwtDecode<{ id: number }>(token); // JWT 디코딩
      return decoded.id;
   } catch (error) {
      console.error('❌ 유저 ID 가져오기 실패:', error);
      return null;
   }
};
