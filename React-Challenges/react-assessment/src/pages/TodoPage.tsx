import { add, type TodoItem } from "../redux/slices/todoSlices"
import { useState } from "react";
import {  useAppDispatch, useAppSelector, type RootState } from "../redux/store";

export default function TodoPage(){
    
    const todos = useAppSelector((state:RootState)=>state.todos.todos)
    const [TodoTitle,setTodoTitle] = useState<string | null>(null);
    // fix: type issue 
    const dispatch = useAppDispatch();
    const addTodo = ()=>{
        dispatch(add({id:todos.length+1,title:TodoTitle || "New Todo"}))
        setTodoTitle(null)
    }

    return(
        <>
            <h1>Todos</h1>
            <div>

            <input
                type="text"
                placeholder="Enter todo title"
                value={TodoTitle || ""}
                onChange={(e) => setTodoTitle(e.target.value)}
                />
                <button onClick={addTodo} className="bg-blue-500 text-white ">Add Todo</button>
                </div>
            <ul>
                {todos.map((todo:TodoItem) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>

        </>
    )
}