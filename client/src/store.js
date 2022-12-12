import { configureStore } from "@reduxjs/toolkit"
import cartSlice from "./features/cartSlice"
import productSlice from './features/productSlice'
import sessionSlice from "./features/sessionSlice"

export default configureStore({
    reducer: {
        cart: cartSlice,
        product: productSlice,
        user: sessionSlice,
    },
})