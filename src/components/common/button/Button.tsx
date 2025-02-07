import { ButtonSchema, ButtonSize } from '../../../style/theme';
import ButtonStyle from './ButtonStyle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   size: ButtonSize;
   schema: ButtonSchema | 'kakao' | 'naver' | 'google';
   disabled?: boolean;
   isLoading?: boolean;
   icon?: React.ReactNode;
}

const Button = ({ children, size, schema, disabled, isLoading, icon, ...props }: ButtonProps) => {
   return (
      <ButtonStyle size={size} schema={schema} disabled={disabled} isLoading={isLoading} {...props}>
         {icon && <span className='icon'>{icon}</span>}
         {children}
      </ButtonStyle>
   );
};

export default Button;
