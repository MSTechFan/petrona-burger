import { createSlice } from "@reduxjs/toolkit";
import { fullListProducts } from '../productListAPI'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: fullListProducts
    },
    reducers: {
        SearchProduct: (state, action) => {
            const findWordRegex = new RegExp(action.payload)
            if(action.payload !== ""){
                state.value = state.value.filter(eleToFind => findWordRegex.test(eleToFind.name))
            }
        }
    }
})

export const { SearchProduct } = productSlice.actions

export default productSlice.reducer