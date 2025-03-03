import { TradeNestThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/route';
import { ProductProvider } from './context/ProductProvider';

function App() {
   return (
      <TradeNestThemeProvider>
         <UserProvider>
            <ProductProvider>
               <RouterProvider router={router} />
            </ProductProvider>
         </UserProvider>
      </TradeNestThemeProvider>
   );
}

export default App;
