import Layout from './components/layout/Layout';
import { TradeNestThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
   return (
      <TradeNestThemeProvider>
         <ThemeSwitcher />
         <RouterProvider router={router} />
      </TradeNestThemeProvider>
   );
}

export default App;
