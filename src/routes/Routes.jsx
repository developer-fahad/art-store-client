
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddCraft from '../pages/AddCraft';
import MyArtsLists from '../pages/MyArtsLists';
import AllArtsCrafts from '../pages/AllArtsCrafts';
import ProfileEdit from '../pages/ProfileEdit';
import PrivateRoutes from './PrivateRoutes';
import Details from '../pages/Details';
import UpdateCraft from '../pages/UpdateCraft';
import AddCat from '../pages/AddCat';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('http://localhost:5000/paintings'),
        },
        {
            path: '/allartcraft',
            element: <AllArtsCrafts></AllArtsCrafts>,
            loader: () => fetch('http://localhost:5000/paintings')
        },
        {
            path: '/updatecraft/:id',
            element: <PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/paintings/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoutes><Details></Details></PrivateRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/paintings/${params.id}`)
        },
        {
            path: '/addcraft',
            element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
        },
        {
            path: '/addcat',
            element: <AddCat></AddCat>,
            loader: () => fetch('http://localhost:5000/allcat')
        },
        {
            path: '/artlists',
            element: <PrivateRoutes><MyArtsLists></MyArtsLists></PrivateRoutes>,
            loader: () => fetch('http://localhost:5000/paintings')
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