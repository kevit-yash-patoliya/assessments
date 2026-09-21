import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlices"
import todoReducer from "./slices/todoSlices"
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
    reducer:{
        count : counterReducer,
        todos : todoReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

