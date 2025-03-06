import { User } from '../models/user.model';
import { httpClient } from './http';

export const getUserInfo = async (): Promise<User> => {
   const response = await httpClient.get(`/user/getUserInfo`, {
      withCredentials: true,
   });
   return response.data;
};

interface UpdateUserInfoProps {
   userId: number;
   password?: string;
   location: string;
}
export const updateUserInfo = async (data: UpdateUserInfoProps): Promise<User> => {
   const response = await httpClient.post('/user/updateUserInfo', data, {
      withCredentials: true,
   });
   return response.data;
};
