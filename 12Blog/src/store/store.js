import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'; // Import the auth reducer

const store = configureStore({
    reducer: {
        auth: authReducer  // Pass the auth reducer here
    }
});

export default store;
