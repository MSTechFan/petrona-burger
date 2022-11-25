import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false, 
    products: [],
    error: ''
}

export const fetchProducts = createAsyncThunk('product/fetchProducts', () => {
    return axios
        .get('http://localhost:5000/api/products')
        .then((response) => response.data)
})

export const fetchCombos = createAsyncThunk('product/fetchProducts', () => {
    return axios
        .get('http://localhost:5000/api/products')
        .then((response) => response.data.filter(product => product.type === "combo"))
})

export const fetchNews = createAsyncThunk('product/fetchProducts', () => {
    return axios
        .get('http://localhost:5000/api/products')
        .then((response) => response.data.filter(product => {
            
        })
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.error = ''
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error.message
        })
    },

    /* 
    
        code commented since it needs to be solved at first how the state is going to be managed by 
        the createAsynThunk 
    
    */

    /* reducers: {
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
    } */
})



export const { SearchProduct, SearchCombo, SearchNew } = productSlice.actions

export default productSlice.reducer