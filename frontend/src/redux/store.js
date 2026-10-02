import {configureStore} from '@reduxjs/toolkit';
import authReducer from "../redux/authSlice.js";
import contactReducer from './contactSlice.js'
export const store=configureStore({
    reducer:{
        auth:authReducer,
        contact:contactReducer
    },
});