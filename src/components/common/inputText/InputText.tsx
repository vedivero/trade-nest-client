import React, { ForwardedRef } from 'react';
import InputTextStyle from './InputTextStyle';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
   placeholder?: string;
   inputType?: 'text' | 'email' | 'password' | 'number';
}

const InputText = React.forwardRef(
   ({ placeholder, inputType, onChange, ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
      return (
         <InputTextStyle
            placeholder={placeholder}
            type={inputType}
            ref={ref}
            onChange={onChange}
            {...props}
         />
      );
   },
);

export default InputText;
