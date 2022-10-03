import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './features/moveSlice';

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    }
})