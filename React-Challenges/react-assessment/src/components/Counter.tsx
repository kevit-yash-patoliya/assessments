import { useState } from "react";

export default function Counter(){
    
    
    const [count,setCount] = useState<number>(0);
    
    const incr = ()=>{
        setCount((prev)=>prev+1)
    }
    const decr = ()=>{
        setCount((prev)=>prev-1)
    }

    return (
        
        <div >
            <button onClick={incr} className="bg-blue-500 text-white p-3 ">
                +
            </button>
            {
                count
            }

            <button onClick={decr} className="bg-blue-500 text-white p-3">
                -
            </button>
        
        </div>
        
    )
}