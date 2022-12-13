import { configureStore } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'
import { cartReducer } from 'views/cart/store/cartSlice'
import menuSlice from 'views/menuList/store/menuSlice'
import notificationReducer from '../middleware/notification/store/notificationSlice'
let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger) 
} 
export default configureStore({
    reducer: {
        notification: notificationReducer,
        menu: menuSlice, 
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
