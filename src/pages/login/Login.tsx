import { Link } from 'react-router-dom';
import { LoginStyle } from './LoginStyle';
import Button from '../../components/common/button/Button';
import InputText from '../../components/common/inputText/InputText';
import { useForm } from 'react-hook-form';
import { useAlert } from '../../hooks/useAlert';
import { login } from '../../api/auth.api';
import Title from '../../components/common/title/Title';

export interface LoginProps {
   email: string;
   password: string;
}

const Login = () => {
   const showAlert = useAlert();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginProps>();

   const onSubmit = (data: LoginProps) => {
      login(data)
         .then(() => {
            showAlert('로그인 되었습니다.');
         })
         .catch((error) => {
            const message = '로그인 중 오류가 발생했습니다.';
            console.log(error.response?.data?.message);
            showAlert(message);
         });
   };

   return (
      <>
         <Title size='large'>로그인</Title>
         <LoginStyle>
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
                  비밀번호
                  <InputText
                     placeholder='****'
                     inputType='password'
                     {...register('password', { required: true })}
                  />
                  {errors.password && <p className='error-text'>비밀번호를 입력해 주세요.</p>}
               </fieldset>

               <fieldset>
                  <Button type='submit' size='medium' schema='primary'>
                     로그인
                  </Button>
               </fieldset>
               <div className='info'>
                  <Link to='/signUp'>회원가입</Link>
                  <Link to='/resetPassword'>비밀번호 찾기</Link>
               </div>
            </form>
         </LoginStyle>
      </>
   );
};

export default Login;
