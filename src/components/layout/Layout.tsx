import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';

interface LayoutProps {
   children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   );
};

export default Layout;
