import { useForm } from 'react-hook-form';
import { ResetPasswordStyle } from './ResetPasswordStyle';
import InputText from '../../components/common/inputText/InputText';
import Title from '../../components/common/title/Title';

interface ResetPaswordProps {
   email: string;
}

const ResetPassword = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<ResetPaswordProps>({
      mode: 'onChange',
   });

   const onSubmit = (data: ResetPaswordProps) => {};

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
         </form>
      </ResetPasswordStyle>
   );
};

export default ResetPassword;
