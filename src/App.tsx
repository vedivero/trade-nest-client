import { TradeNestThemeProvider } from './context/ThemeContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/route';

function App() {
   return (
      <TradeNestThemeProvider>
         {/* <ThemeSwitcher /> */}
         <RouterProvider router={router} />
      </TradeNestThemeProvider>
   );
}

export default App;
