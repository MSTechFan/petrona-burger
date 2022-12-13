import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false, 
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration
}

export const loginPost = createAsyncThunk('user/loginPost', (email, password) => {
    return axios
        .post('http://localhost:5000/api/login', {email, password})
        .then(response => response.data)
})


const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginPost.fulfilled, (state, action) => {
            state.error = action.payload.message
        })
    }
})

export default sessionSlice.reducer