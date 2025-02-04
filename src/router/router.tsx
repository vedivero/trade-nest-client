import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import { Error } from '../components/common/error/Error';
import Layout from '../components/layout/Layout';

export const router = createBrowserRouter([
   {
      path: '/',
      element: (
         <Layout>
            <Home />
         </Layout>
      ),
      errorElement: <Error />,
   },
   {
      path: '/test',
      element: <div>test</div>,
   },
]);
