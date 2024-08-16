import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,
    name: null,
    isLoggedIn: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, actions) => {
            state.isLoggedIn = true;
            state.token = actions.payload.token;
            state.userName = actions.payload.user.name;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.token = null;
            state.userName = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;