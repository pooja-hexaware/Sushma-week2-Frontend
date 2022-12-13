import NotFound from 'views/sessions/NotFound'
import sessionRoutes from 'views/sessions/SessionRoutes'
import MatxLayout from '../components/MatxLayout/MatxLayout'
import homeRoutes from 'views/home/HomeRoutes'
import { Navigate } from 'react-router-dom'
import menuListRoutes from 'views/menuList/menuListRoutes'
import cartRoutes from 'views/cart/cartRoutes'

export const AllPages = () => {
    const all_routes = [
        {
            element: <MatxLayout />,
            children: [...homeRoutes, ...menuListRoutes, ...cartRoutes],
        },
        ...sessionRoutes,
        {
            path: '/',
            element: <Navigate to="home" />,
        },
        {
            path: '/menuList',
            element: <Navigate to="menuList" />,
        },
        {
            path: '/cart',
            element: <Navigate to="cart" />,
        },
        {
            path: '*',
            element: <NotFound />,
        },
    ]
    return all_routes
}
