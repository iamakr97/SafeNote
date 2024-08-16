import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import noteSlice from "./slices/noteSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        notes: noteSlice
    }
});