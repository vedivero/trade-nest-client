import { useForm } from 'react-hook-form';
import { ResetPasswordStyle } from './ResetPasswordStyle';
import InputText from '../../components/common/inputText/InputText';
import Title from '../../components/common/title/Title';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/button/Button';
import { resetPassword } from '../../api/auth.api';
import { useAlert } from '../../hooks/useAlert';

interface ResetPasswordProps {
   email: string;
}

const ResetPassword = () => {
   const showAlert = useAlert();
   const navigate = useNavigate();

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ResetPasswordProps>({
      mode: 'onChange',
   });

   const onSubmit = (data: ResetPasswordProps) => {
      resetPassword(data.email).then((response) => {
         console.log('비밀번호 초기화 완료.');
         showAlert('비밀번호를 초기화 했습니다.\n이메일을 확인해 주세요.');
         navigate('/login');
      });
   };

   return (
      <ResetPasswordStyle>
         <Title size='large'>비밀번호 초기화</Title>
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
               <Button type='submit' size='medium' schema='primary'>
                  초기화
               </Button>
            </fieldset>
         </form>
      </ResetPasswordStyle>
   );
};

export default ResetPassword;
