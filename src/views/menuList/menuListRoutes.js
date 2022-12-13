import React, { lazy } from 'react'
import Loadable from 'components/Loadable/Loadable'

const MenuList = Loadable(lazy(() => import('./menuList')))

const menuListRoutes = [
    {
        path: '/menuList',
        element: <MenuList />,
    },
]

export default menuListRoutes
