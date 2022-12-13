import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false, 
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration
}


// el error está en la forma de usar el axios para hacer POST al api
export const loginPost = createAsyncThunk('user/loginPost', (email, password) => {
    return axios
        .post('http://localhost:5000/api/login', email, password)
        .then(response => response.data)
    },
    
    /* {
        headers: {
            'Content-Type': 'application/json'
        }
    } */
)


const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginPost.fulfilled, (state, action) => {
            console.log({fulfilled: action.payload})
            /* state.error = action.payload.message
            state.success = true */

        })
        builder.addCase(loginPost.rejected, (state, action) => {
            console.log({error: action})
            /* state.error = action.payload.message
            state.loading = false */
        })
    }
})

export default sessionSlice.reducer