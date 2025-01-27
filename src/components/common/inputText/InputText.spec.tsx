import { render, screen } from '@testing-library/react';
import InputText from './InputText';
import { TradeNestThemeProvider } from '../../../context/ThemeContext';
import React from 'react';

describe('Button component Test', () => {
   it('check render', () => {
      render(
         <TradeNestThemeProvider>
            <InputText placeholder='여기에 입력하세요' />
         </TradeNestThemeProvider>,
      );
      expect(screen.getByPlaceholderText('여기에 입력하세요')).toBeInTheDocument();
   });

   it('forwardRef Test', () => {
      const ref = React.createRef<HTMLInputElement>();
      render(
         <TradeNestThemeProvider>
            <InputText placeholder='여기에 입력하세요' ref={ref} />
         </TradeNestThemeProvider>,
      );

      expect(ref.current).toBeInstanceOf(HTMLInputElement);
   });
});
