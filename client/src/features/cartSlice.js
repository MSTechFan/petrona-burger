import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            state.value.push({
                name: action.payload.name,
                quantity: 1,
                price: 1
            })
        }

    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer