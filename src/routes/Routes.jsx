
import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AddCraft from '../pages/AddCraft';
import MyArtsLists from '../pages/MyArtsLists';
import AllArtsCrafts from '../pages/AllArtsCrafts';
// import ProfileEdit from '../pages/ProfileEdit';
import PrivateRoutes from './PrivateRoutes';
import Details from '../pages/Details';
import UpdateCraft from '../pages/UpdateCraft';
// import AddCat from '../pages/AddCat';
import CatItem from '../pages/CatItem';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('https://art-store-server.vercel.app/paintings'),
        },
        {
            path: '/allartcraft',
            element: <AllArtsCrafts></AllArtsCrafts>,
            loader: () => fetch('https://art-store-server.vercel.app/paintings')
        },
        {
            path: '/updatecraft/:id',
            element: <PrivateRoutes><UpdateCraft></UpdateCraft></PrivateRoutes>,
            loader: ({params}) => fetch(`https://art-store-server.vercel.app/paintings/${params.id}`)
        },
        {
            path: '/details/:id',
            element: <PrivateRoutes><Details></Details></PrivateRoutes>,
            loader: ({params}) => fetch(`https://art-store-server.vercel.app/paintings/${params.id}`)
        },
        {
            path: '/addcraft',
            element: <PrivateRoutes><AddCraft></AddCraft></PrivateRoutes>
        },
        // {
        //     path: '/addcat',
        //     element: <AddCat></AddCat>,
        //     loader: () => fetch('https://art-store-server.vercel.app/allcat')
        // },
        {
            path: '/catitem/:cat',
            element: <CatItem></CatItem>,
            loader: ({params}) => fetch(`http://localhost:5000/allcat/${params.cat}`)
        },
        {
            path: '/artlists',
            element: <PrivateRoutes><MyArtsLists></MyArtsLists></PrivateRoutes>,
            loader: () => fetch('https://art-store-server.vercel.app/paintings')
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