import { createSlice } from "@reduxjs/toolkit";

export interface TodoItem {
    id : number,
    title : string
}

interface CounterState {
    todos : Array<TodoItem>
}
const state:CounterState = {
    todos:[]
}

const slice = createSlice({
    name:"todos",
    initialState:state,
    reducers:{
        add :(state,action)=>{
            state.todos.push(action.payload)
        },
        
    }
})

export default slice.reducer;

export const {add} = slice.actions