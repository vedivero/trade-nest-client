import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SignUp from '../pages/signUp/SignUp';
import VerifyEmail from '../pages/signUp/VerifyEmail';
import Login from '../pages/login/Login';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import { Products } from '../pages/products/Products';
import { ProductDetail } from '../components/products/ProductDetail';
import { MyPage } from '../pages/mypage/MyPage';

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <Layout>
            <Products />
         </Layout>
      ),
   },
   {
      path: '/signUp',
      element: (
         <Layout>
            <SignUp />
         </Layout>
      ),
   },
   {
      path: '/mypage',
      element: (
         <Layout>
            <MyPage />
         </Layout>
      ),
   },
   {
      path: '/login',
      element: (
         <Layout>
            <Login />
         </Layout>
      ),
   },
   {
      path: '/verify-email',
      element: (
         <Layout>
            <VerifyEmail />
         </Layout>
      ),
   },
   {
      path: '/resetPassword',
      element: (
         <Layout>
            <ResetPassword />
         </Layout>
      ),
   },
   {
      path: '/productDetail/:id',
      element: (
         <Layout>
            <ProductDetail />
         </Layout>
      ),
   },
]);
