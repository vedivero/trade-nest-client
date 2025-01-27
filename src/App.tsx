import Layout from './components/layout/Layout';
import Home from './pages/Home';
import { TradeNestThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';

function App() {
   return (
      <TradeNestThemeProvider>
         <ThemeSwitcher />
         <Layout>
            <Home />
         </Layout>
      </TradeNestThemeProvider>
   );
}

export default App;
