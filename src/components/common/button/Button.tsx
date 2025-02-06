import { ButtonSchema, ButtonSize } from '../../../style/theme';
import ButtonStyle from './ButtonStyle';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children: React.ReactNode;
   size: ButtonSize;
   schema: ButtonSchema;
   disabled?: boolean;
   isLoading?: boolean;
}

const Button = ({ children, size, schema, disabled, isLoading, ...props }: ButtonProps) => {
   return (
      <ButtonStyle size={size} schema={schema} disabled={disabled} isLoading={isLoading} {...props}>
         {children}
      </ButtonStyle>
   );
};

export default Button;
