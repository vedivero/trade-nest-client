import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ThemeSwitcher from './components/themeSwitcher/ThemeSwitcher';
import { BookStoreThemeProvider, ThemeContext } from './context/themeContext';

function App() {
   return (
      <BookStoreThemeProvider>
         <ThemeSwitcher />
         <Layout>
            <Home />
         </Layout>
      </BookStoreThemeProvider>
   );
}

export default App;
