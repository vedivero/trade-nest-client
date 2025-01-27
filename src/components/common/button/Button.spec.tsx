import { render, screen } from '@testing-library/react';
import Button from './Button';
import { TradeNestThemeProvider } from '../../../context/ThemeContext';

describe('Button component Test', () => {
   it('check render', () => {
      render(
         <TradeNestThemeProvider>
            <Button size='large' schema='primary'>
               Button Test
            </Button>
         </TradeNestThemeProvider>,
      );
      expect(screen.getByText('Button Test')).toBeInTheDocument();
   });

   it('size props application', () => {
      const { container } = render(
         <TradeNestThemeProvider>
            <Button size='large' schema='primary'>
               Button Test
            </Button>
         </TradeNestThemeProvider>,
      );

      expect(screen.getByRole('button')).toHaveStyle({
         fontSize: '1.5rem',
      });
   });
});
