import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import { LayoutStyle } from './LayoutStyle';
import { PopularSearchProvider } from '../../context/PopularSearchContext'; // 경로 확인 필요

interface LayoutProps {
   children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <PopularSearchProvider>
         <>
            <Header />
            <LayoutStyle>{children}</LayoutStyle>
            <Footer />
         </>
      </PopularSearchProvider>
   );
};

export default Layout;
