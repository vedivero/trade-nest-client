import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import InputText from '../../components/common/inputText/InputText';
import Title from '../../components/common/title/Title';
import { SignUpStyled } from './SignUpStyle';
import { useForm } from 'react-hook-form';
import { signUp } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';

export interface SignUpProps {
   email: string;
   nickname: string;
   password: string;
   confirmPassword: string;
}

const SignUp = () => {
   const navigate = useNavigate();
   const showAlert = useAlert();

   const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
   } = useForm<SignUpProps>({
      mode: 'onChange',
   });

   const onSubmit = (data: SignUpProps) => {
      signUp(data)
         .then(() => {
            showAlert('인증 메일을 발송했습니다. \n메일 인증을 통해 가입을 완료해 주세요.');
            navigate('/');
         })
         .catch((error) => {
            const serverMessage = error.response?.data?.message;
            const message = serverMessage || '회원가입 처리 중 오류가 발생했습니다.';
            showAlert(message);
         });
   };

   return (
      <>
         <Title size='large'>회원가입</Title>
         <SignUpStyled>
            <form onSubmit={handleSubmit(onSubmit)}>
               <fieldset>
                  이메일
                  <InputText
                     placeholder='example@email.com'
                     inputType='email'
                     {...register('email', {
                        required: '이메일을 입력해 주세요.',
                        pattern: {
                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                           message: '유효한 이메일 주소를 입력해 주세요.',
                        },
                     })}
                  />
                  {errors.email && <p className='error-text'>{errors.email.message}</p>}
               </fieldset>
               <fieldset>
                  닉네임
                  <InputText
                     placeholder='nickname'
                     inputType='text'
                     {...register('nickname', {
                        required: '닉네임을 입력해 주세요.',
                        minLength: {
                           value: 2,
                           message: '닉네임은 최소 2자 이상이어야 합니다.',
                        },
                        maxLength: {
                           value: 10,
                           message: '닉네임은 최대 10자 이하여야 합니다.',
                        },
                     })}
                  />
                  {errors.nickname && <p className='error-text'>{errors.nickname.message}</p>}
               </fieldset>
               <fieldset>
                  비밀번호
                  <InputText
                     placeholder='****'
                     inputType='password'
                     {...register('password', {
                        required: '비밀번호를 입력해 주세요.',
                        minLength: {
                           value: 6,
                           message: '비밀번호는 최소 6자 이상이어야 합니다.',
                        },
                     })}
                  />
                  {errors.password && <p className='error-text'>{errors.password.message}</p>}
               </fieldset>
               <fieldset>
                  비밀번호 확인
                  <InputText
                     placeholder='****'
                     inputType='password'
                     {...register('confirmPassword', {
                        required: '비밀번호 확인을 입력해 주세요.',
                        validate: (value) => value === watch('password') || '비밀번호가 일치하지 않습니다.', // watch 사용
                     })}
                  />
                  {errors.confirmPassword && <p className='error-text'>{errors.confirmPassword.message}</p>}
               </fieldset>

               <fieldset>
                  <Button type='submit' size='medium' schema='primary'>
                     회원가입
                  </Button>
               </fieldset>
            </form>
         </SignUpStyled>
      </>
   );
};

export default SignUp;
