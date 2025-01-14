import React, { ForwardedRef } from 'react';
import InputTextStyle from './InputTextStyle';

interface Props {
   placeholder?: string;
}

const InputText = React.forwardRef(({ placeholder }: Props, ref: ForwardedRef<HTMLInputElement>) => {
   return <InputTextStyle placeholder={placeholder} ref={ref} />;
});

export default InputText;
