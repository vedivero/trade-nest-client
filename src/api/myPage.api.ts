import { Product } from '../models/product.model';
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

// 회원 정보 수정
export const updateUserInfo = async (data: UpdateUserInfoProps): Promise<User> => {
   const response = await httpClient.post('/user/updateUserInfo', data, {
      withCredentials: true,
   });
   return response.data;
};

// 전체 상품 조회
export const getAllProducts = async (): Promise<Product[]> => {
   const response = await httpClient.get('/product/mypage/products/all', {
      withCredentials: true,
   });
   return response.data.products;
};

// 상태별 상품 조회
export const getProductsByStatus = async (
   status: 'available' | 'reserved' | 'completed' | 'stopped',
): Promise<Product[]> => {
   const response = await httpClient.get(`/product/mypage/products/${status}`, {
      withCredentials: true,
   });
   return response.data.products;
};

/**
 * 상품 상태 업데이트 API 호출 (판매중 / 판매중지 / 삭제)
 * @param productId - 상품 ID
 * @param status - 변경할 상품 상태 ('available' | 'stopped' | 'deleted')
 */
export const updateProductStatus = async (
   productId: number,
   status: 'available' | 'stopped' | 'deleted',
): Promise<void> => {
   await httpClient.patch(
      `/product/mypage/product/${productId}/status`,
      { status },
      {
         withCredentials: true,
      },
   );
};
