import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false, 
    userInfo: {}, // for user object
    userToken: null, // for storing the JWT
    error: null,
    success: false, // for monitoring the registration
}

const sessionSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {}
})

export default sessionSlice.reducer