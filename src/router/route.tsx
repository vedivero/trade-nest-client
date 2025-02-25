import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import SignUp from '../pages/signUp/SignUp';
import VerifyEmail from '../pages/signUp/VerifyEmail';
import Login from '../pages/login/Login';
import ResetPassword from '../pages/resetPassword/ResetPassword';
import { Products } from '../pages/products/Products';

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
      path: '/products',
      element: (
         <Layout>
            <Products />
         </Layout>
      ),
   },
]);
