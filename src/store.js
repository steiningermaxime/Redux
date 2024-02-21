import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counterSlices';
import {api} from './slices/apiSlices';

export default configureStore({
    reducer :{
'counter': counterReducer,
'api': api.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)})