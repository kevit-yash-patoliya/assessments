import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices"
import todoReducer from "./slices/todoSlices"
export const store = configureStore({
    reducer:{
        count : counterReducer,
        todos : todoReducer
    }
})

