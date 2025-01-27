import { render, screen } from '@testing-library/react';
import Title from './Title';
import { TradeNestThemeProvider } from '../../../context/ThemeContext';

describe('Title component Test', () => {
   it('check render', () => {
      render(
         <TradeNestThemeProvider>
            <Title size='large'>Title</Title>
         </TradeNestThemeProvider>,
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
   });

   it('size props application', () => {
      const { container } = render(
         <TradeNestThemeProvider>
            <Title size='large'>제목</Title>
         </TradeNestThemeProvider>,
      );

      expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
   });
});
