import { createSlice } from '@reduxjs/toolkit'

const initialCart = {
    itemId: '',
    itemName: '',
    itemPrice: '',
    quantity: '',
    toppings: [],
    priceWithQunt: '',
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartCurrent: initialCart,
        cart: {},
        totalCount: 0,
    },
    reducers: {
        updateMenu: (state, action) => {
            console.log('payload', action.payload)
            const temp = state.cart.find(
                (item) =>
                    item.itemId === action.payload.itemId &&
                    item.itemPrice === action.payload.itemPrice
            )
            console.log('temp', temp)
            if (temp) {
                temp.quantity += action.payload.quantity
                temp.priceWithQunt = temp.quantity * temp.itemPrice
            } else {
                state.cart.push({
                    itemId: action.payload.itemId,
                    itemName: action.payload.itemName,
                    itemPrice: action.payload.itemPrice,
                    quantity: action.payload.quantity,
                    toppings: action.payload.toppings,
                    priceWithQunt:
                        action.payload.itemPrice * action.payload.quantity,
                })
            }
        },
        addToCart: (state, action) => {
            //Object.assign(state.cart, action.payload)
            state.cart=action.payload;
            state.totalCount = Object.entries(state.cart).reduce(
                (acc, [_, cur]) => acc + cur.quantity,
                0
            )
        },
        // incrementQuantity: (state, action) => {
        //   const item = state.cart.find((item) => item.id === action.payload);
        //   item.quantity++;
        // },
        // decrementQuantity: (state, action) => {
        //   const item = state.cart.find((item) => item.id === action.payload);
        //   if (item.quantity === 1) {
        //     item.quantity = 1
        //   } else {
        //     item.quantity--;
        //   }
        // },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter(
                (item) => item.id !== action.payload
            )
            state.cart = removeItem
        },
    },
})

export const cartReducer = cartSlice.reducer
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    updateMenu,
} = cartSlice.actions
