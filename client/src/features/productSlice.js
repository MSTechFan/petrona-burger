import { createSlice } from "@reduxjs/toolkit";
import { productListAPI } from '../productListAPI'

const productSlice = createSlice({
    name: 'product',
    initialState: {
        value: productListAPI
    },
    reducers: {
        SearchProduct: (state, action) => {
            const findWordRegex = new RegExp(action.payload)
            if(action.payload !== ""){
                state.value.products = productListAPI.products.filter(eleToFind => findWordRegex.test(eleToFind.name))
            }
        },
        SearchCombo: (state, action) => {
            const findWordRegex = new RegExp(action.payload)
            if(action.payload !== ""){
                state.value.combos = productListAPI.combos.filter(eleToFind => findWordRegex.test(eleToFind.name))
            }
        },
        SearchNew: (state, action) => {
            const findWordRegex = new RegExp(action.payload)
            if(action.payload !== ""){
                state.value.news = productListAPI.news.filter(eleToFind => findWordRegex.test(eleToFind.name))
            }
        },
    }
})

export const { SearchProduct, SearchCombo, SearchNew } = productSlice.actions

export default productSlice.reducer