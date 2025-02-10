import { TradeNestThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/route';

function App() {
   return (
      <TradeNestThemeProvider>
         <UserProvider>
            <RouterProvider router={router} />
         </UserProvider>
      </TradeNestThemeProvider>
   );
}

export default App;
