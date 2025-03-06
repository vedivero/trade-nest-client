import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../../../models/user.model';
import { UserInfoStyle } from './UserInfoStyle';
import { updateUserInfo } from '../../../api/myPage.api';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import { useAlert } from '../../../hooks/useAlert'; // 알림 표시 훅

interface UserInfoTabProps {
   userData: User | null;
}

interface PasswordChangeFormProps {
   password?: string;
   confirmPassword?: string;
   location: string;
}

export const UserInfoTab: React.FC<UserInfoTabProps> = ({ userData }) => {
   console.log('userData : ', userData);

   const [isPasswordEditable, setIsPasswordEditable] = useState(false);
   const isSocialLogin = userData?.social_provider !== 'self';

   const navigate = useNavigate();
   const showAlert = useAlert();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
      reset,
   } = useForm<PasswordChangeFormProps>({
      mode: 'onChange',
      defaultValues: {
         location: userData?.location ?? '',
      },
   });

   const handleShowPasswordInput = () => {
      if (isSocialLogin) {
         alert('소셜 로그인 사용자는 비밀번호를 변경할 수 없습니다.');
         return;
      }
      setIsPasswordEditable((prev) => !prev);
      reset({ password: '', confirmPassword: '' });
   };

   const onSubmit = (data: PasswordChangeFormProps) => {
      const payload = {
         userId: userData?.id ?? 0,
         ...(data.password ? { password: data.password } : {}),
         location: data.location,
      };

      updateUserInfo(payload)
         .then(() => {
            showAlert('회원 정보가 성공적으로 변경되었습니다.');
            setIsPasswordEditable(false);
            navigate('/mypage');
         })
         .catch((error: any) => {
            const serverMessage = error.response?.data?.message;
            const message = serverMessage || '정보 저장 중 오류가 발생했습니다.';
            showAlert(message);
         });
   };

   const currentLocation = watch('location');
   const isLocationChanged = userData?.location !== currentLocation;

   return (
      <UserInfoStyle>
         <div className='form-container'>
            <h2>기본정보</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset>
                  <legend>아이디 및 이메일</legend>
                  <div className='input-group'>
                     <label>아이디</label>
                     <input type='text' value={userData?.nickname ?? ''} placeholder='아이디' readOnly />
                  </div>

                  <div className='input-group'>
                     <label>이메일</label>
                     <input type='email' value={userData?.email ?? ''} placeholder='이메일' readOnly />
                  </div>
               </fieldset>

               <fieldset>
                  <legend>비밀번호 변경</legend>
                  <div className='input-group'>
                     <label>비밀번호</label>
                     <input
                        type='password'
                        placeholder='비밀번호'
                        disabled={!isPasswordEditable}
                        {...register('password', {
                           required: isPasswordEditable ? '비밀번호를 입력해 주세요.' : false,
                           minLength: {
                              value: 6,
                              message: '비밀번호는 최소 6자 이상이어야 합니다.',
                           },
                        })}
                     />
                     <button
                        className='pwd-change-btn'
                        type='button'
                        onClick={handleShowPasswordInput}
                        disabled={isSocialLogin}
                     >
                        {isPasswordEditable ? '취소' : '변경'}
                     </button>
                  </div>
                  {errors.password && <p className='error-text'>{errors.password.message}</p>}

                  {isPasswordEditable && (
                     <div className='input-group'>
                        <label>비밀번호 확인</label>
                        <input
                           type='password'
                           placeholder='비밀번호를 다시 입력하세요'
                           {...register('confirmPassword', {
                              required: '비밀번호 확인을 입력해 주세요.',
                              validate: (value) =>
                                 value === watch('password') || '비밀번호가 일치하지 않습니다.',
                           })}
                        />
                     </div>
                  )}
                  {errors.confirmPassword && <p className='error-text'>{errors.confirmPassword.message}</p>}
               </fieldset>

               <fieldset>
                  <legend>주소 정보</legend>
                  <div className='input-group'>
                     <label>지역</label>
                     <input
                        type='text'
                        placeholder='주소'
                        {...register('location', {
                           required: '주소를 입력해 주세요.',
                        })}
                     />
                     {errors.location && <p className='error-text'>{errors.location.message}</p>}
                  </div>
               </fieldset>

               <button
                  className='save-btn'
                  type='submit'
                  disabled={!isLocationChanged && !isPasswordEditable}
               >
                  저장
               </button>
            </form>
         </div>
      </UserInfoStyle>
   );
};
