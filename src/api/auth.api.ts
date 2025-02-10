import { LoginProps } from '../pages/login/Login';
import { SignUpProps } from '../pages/signUp/SignUp';
import { httpClient } from './http';

export const signUp = async (userData: SignUpProps) => {
   try {
      const response = await httpClient.post('/auth/signup', userData);
      return response.data;
   } catch (error: any) {
      console.error('❌ 회원가입 요청 실패:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || '회원가입 처리 중 문제가 발생했습니다.');
   }
};

export const verifyEmail = async (emailToken: string) => {
   try {
      const response = await httpClient.get(`/auth/verify-email?token=${emailToken}`);
      return response.data;
   } catch (error: any) {
      console.error('❌ 이메일 인증 실패:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || '이메일 인증 처리 중, 문제가 발생했습니다.');
   }
};

export const login = async (loginData: LoginProps) => {
   try {
      const response = await httpClient.post('/auth/login', loginData);
      return response.data;
   } catch (error: any) {
      console.error('❌ 로그인 요청 실패:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || '로그인에 실패했습니다.');
   }
};

export const logout = async () => {
   try {
      await httpClient.post('/auth/logout', {}, { withCredentials: true });
   } catch (error: any) {
      console.error('❌ 로그아웃 요청 실패:', error.response?.data || error.message);
      throw new Error('로그아웃 요청 처리 중 문제가 발생했습니다.');
   }
};

export const resetPassword = async (email: string) => {
   try {
      const response = await httpClient.post('/auth/reset-password', { email });
      return response.data;
   } catch (error: any) {
      console.error('❌ 비밀번호 초기화 요청 실패:', error.response?.data || error.message);
      throw new Error(error.response?.data?.message || '비밀번호 초기화 요청 중 문제가 발생했습니다.');
   }
};

export const socialLogin = async (provider: 'naver' | 'kakao' | 'google') => {
   try {
      const response = await httpClient.get(`/socialLogin/${provider}`);
      return response.data?.redirectUrl;
   } catch (error: any) {
      console.error(`${provider} 로그인 요청 실패:`, error.response?.data || error.message);
      throw new Error(`${provider} 로그인 요청 처리 중 문제가 발생했습니다.`);
   }
};

export const getUserInfo = async () => {
   try {
      const response = await httpClient.get('/socialLogin/naver/user', { withCredentials: true });
      return response.data;
   } catch (error: any) {
      console.error('❌ 사용자 정보 가져오기 실패:', error.response?.data || error.message);
      throw new Error('사용자 정보를 가져오는 데 문제가 발생했습니다.');
   }
};
