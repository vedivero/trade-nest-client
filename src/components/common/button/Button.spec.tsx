import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../../context/themeContext';

describe('Button component Test', () => {
   it('check render', () => {
      render(
         <BookStoreThemeProvider>
            <Button size='large' schema='primary'>
               Button Test
            </Button>
         </BookStoreThemeProvider>,
      );
      expect(screen.getByText('Button Test')).toBeInTheDocument();
   });

   it('size props application', () => {
      const { container } = render(
         <BookStoreThemeProvider>
            <Button size='large' schema='primary'>
               Button Test
            </Button>
         </BookStoreThemeProvider>,
      );

      expect(screen.getByRole('button')).toHaveStyle({
         fontSize: '1.5rem',
      });
   });
});
