import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from '../pages/Home';
import SignUp from '../pages/signUp/SignUp';
import VerifyEmail from '../pages/signUp/VerifyEmail';
import Login from '../pages/login/Login';

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <Layout>
            <Home />
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
]);
