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
   } = useForm<SignUpProps>();

   const onSubmit = (data: SignUpProps) => {
      signUp(data)
         .then(() => {
            showAlert('인증 메일을 전송했습니다. \n메일을 확인해 주세요.');
            navigate('/');
         })
         .catch((error) => {
            const message = '회원가입 처리 중 오류가 발생했습니다.';
            console.log(error.response?.data?.message);
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
                     {...register('email', { required: true })}
                  />
                  {errors.email && <p className='error-text'>이메일을 입력해 주세요.</p>}
               </fieldset>
               <fieldset>
                  닉네임
                  <InputText
                     placeholder='nickname'
                     inputType='text'
                     {...register('nickname', { required: true })}
                  />
                  {errors.nickname && <p className='error-text'>닉네임임을 입력해 주세요.</p>}
               </fieldset>
               <fieldset>
                  비밀번호
                  <InputText
                     placeholder='****'
                     inputType='password'
                     {...register('password', { required: true })}
                  />
                  {errors.password && <p className='error-text'>비밀번호를 입력해 주세요.</p>}
               </fieldset>
               <fieldset>
                  비밀번호 확인
                  <InputText
                     placeholder='****'
                     inputType='password'
                     {...register('confirmPassword', { required: true })}
                  />
                  {errors.confirmPassword && <p className='error-text'>동일한 비밀번호를 입력해 주세요.</p>}
               </fieldset>
               <fieldset>
                  <Button type='submit' size='medium' schema='primary'>
                     회원가입
                  </Button>
               </fieldset>
               <div className='info'>
                  <Link to='/findPassword'>비밀번호 찾기</Link>
               </div>
            </form>
         </SignUpStyled>
      </>
   );
};

export default SignUp;
