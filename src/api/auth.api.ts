import { LoginProps } from '../pages/login/Login';
import { SignUpProps } from '../pages/signUp/SignUp';
import { httpClient } from './http';

export const signUp = async (userData: SignUpProps) => {
   const response = await httpClient.post('/auth/signup', userData);
   return response.data;
};

export const verifyEmail = (token: string) => {
   return httpClient.get(`/auth/verify-email?token=${token}`);
};

export const login = async (loginData: LoginProps) => {
   const response = await httpClient.post('/auth/login', loginData);
   return response.data;
};
