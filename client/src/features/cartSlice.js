import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: []
    },
    reducers: {
        EvalEleAndAddToCart: (state, action) => {
            const isEleInCart = state.value.findIndex( eleToFind => eleToFind.name === action.payload.name)
            if(isEleInCart !== -1) {
                // change only the quantity attr in the object to quantity + 1
                state.value[isEleInCart].quantity += 1
            } else {
                state.value.push({
                    name: action.payload.name,
                    quantity: 1,
                    price: action.payload.price
                })
            }
        },
        AddOneCart: (state, action) => {
            const eleIndex = state.value.findIndex(eleToFind => eleToFind.name === action.payload.name)
            state.value[eleIndex].quantity += 1
        },
        DeleteOneCart: (state, action) => {
            const eleIndex = state.value.findIndex(eleToFind => eleToFind.name === action.payload.name)
            if(state.value[eleIndex].quantity <= 1) state.value.splice(eleIndex, 1)
            else state.value[eleIndex].quantity -= 1
        }
    }
})

export const {EvalEleAndAddToCart, AddOneCart, DeleteOneCart} = cartSlice.actions

export default cartSlice.reducer
