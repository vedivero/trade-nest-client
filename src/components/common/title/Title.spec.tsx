import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../../context/themeContext';

describe('Title component Test', () => {
   it('check render', () => {
      render(
         <BookStoreThemeProvider>
            <Title size='large'>Title</Title>
         </BookStoreThemeProvider>,
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
   });

   it('size props application', () => {
      const { container } = render(
         <BookStoreThemeProvider>
            <Title size='large'>제목</Title>
         </BookStoreThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
   });
});
