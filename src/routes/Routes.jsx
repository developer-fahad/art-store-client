
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddCraft from '../pages/AddCraft';
import MyArtsLists from '../pages/MyArtsLists';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/addcraft',
            element: <AddCraft></AddCraft>
        },
        {
            path: '/artlists',
            element: <MyArtsLists></MyArtsLists>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },

      ]
    },
  ]);

export default router;