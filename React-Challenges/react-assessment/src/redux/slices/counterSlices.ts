import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value : number
}
const state:CounterState = {
    value:0
}

const slice = createSlice({
    name:"counter",
    initialState:state,
    reducers:{
        incr :(state,action: PayloadAction<number>)=>{
            state.value = action.payload +1 
        },
        decr :(state,action: PayloadAction<number>)=>{
            state.value = action.payload -1
        }
    }
})

export default slice.reducer;

export const {incr,decr} = slice.actions