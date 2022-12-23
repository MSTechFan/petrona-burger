import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    loading: false, 
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    message: null,
    success: false, // for monitoring the registration
}


// el error está en la forma de usar el axios para hacer POST al api
export const loginPost = createAsyncThunk('user/loginPost', (email, password) => {
    const axiosConfig = {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded',
        "Access-Control-Allow-Origin": "*", }
    }   

    return axios
        .post('http://localhost:5000/api/login', email, password, axiosConfig)
        .then(response => {
            return response.data
        }, (error) => {
            return Promise.reject(error.response.data)
        })
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
    reducers: {
        manageLogOut: (state) => {
            state = initialState
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(loginPost.fulfilled, (state, action) => {
            state.success = true
            state.userInfo = action.payload.user
            state.userToken = action.payload.accessToken // pensando en cambiar el initialState al token de la API
            state.success = true
            state.loading = false
            state.message = action.payload.message
        })
        builder.addCase(loginPost.rejected, (state, action) => {
            // save in the state the error message and loadig = false
            state.error = action.error.message
            state.loading = false 
            alert(state.error)
        })
    }
})

export const {manageLogOut} = sessionSlice.actions

export default sessionSlice.reducer