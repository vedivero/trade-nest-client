import { render, screen } from '@testing-library/react';
import App from './App';

test('renders trade nest', () => {
   render(<App />);
   const linkElement = screen.getByText(/trade nest/i);
   expect(linkElement).toBeInTheDocument();
});
