import { render, screen } from '@testing-library/react';
import InputText from './InputText';
import { BookStoreThemeProvider } from '../../../context/themeContext';
import React from 'react';

describe('Button component Test', () => {
   it('check render', () => {
      render(
         <BookStoreThemeProvider>
            <InputText placeholder='여기에 입력하세요' />
         </BookStoreThemeProvider>,
      );
      expect(screen.getByPlaceholderText('여기에 입력하세요')).toBeInTheDocument();
   });

   it('forwardRef Test', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(
         <BookStoreThemeProvider>
            <InputText placeholder='여기에 입력하세요' ref={ref} />
         </BookStoreThemeProvider>,
      );

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
   });
});
