import { createSlice } from '@reduxjs/toolkit'
import { fetchMenu } from './menu.action'
const menuSlice = createSlice({
    name: 'menuStore',
    initialState: {
        menu: [],
    },
    reducers: {
        addCart: (state, action) => {
            state.cart = action.payload.data
        },
    },
    extraReducers: {
        [fetchMenu.fulfilled]: (state, action) => {
            state.menu = action.payload
        },
    },
})

export const { addCart } = menuSlice.actions
export default menuSlice.reducer
