import { useDispatch, useSelector } from "react-redux"
import { add, type TodoItem } from "../redux/slices/todoSlices"
import { useState } from "react";

export default function TodoPage(){
    
    const todos = useSelector((state:any)=>state.todos.todos)
    const [TodoTitle,setTodoTitle] = useState<string | null>(null);
    const dispatch = useDispatch()
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