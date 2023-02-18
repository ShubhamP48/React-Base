import { createSlice } from '@reduxjs/toolkit';

const auth = createSlice({
    name: 'auth',
    initialState: { accessToken: null },
    reducers: {
        login: (state, data) => {
            state = data
            return state
        },
        logout: (state) => {
            state = {}
            return state
        }
    }
})

export default auth;
