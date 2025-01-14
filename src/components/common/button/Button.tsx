import { ButtonSchema, ButtonSize } from '../../../style/theme';
import ButtonStyle from './ButtonStyle';

export interface ButtonProps {
   children: React.ReactNode;
   size: ButtonSize;
   schema: ButtonSchema;
   disabled?: boolean;
   isLoading?: boolean;
}

const Button = ({ children, size, schema, disabled, isLoading }: ButtonProps) => {
   return (
      <ButtonStyle size={size} schema={schema} disabled={disabled} isLoading={isLoading}>
         {children}
      </ButtonStyle>
   );
};

export default Button;
