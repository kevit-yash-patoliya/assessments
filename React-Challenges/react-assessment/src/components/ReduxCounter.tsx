import { useDispatch, useSelector } from "react-redux";
import { decr, incr } from "../redux/slices/counterSlices";

export default function ReduxCounter(){
    const counterState = useSelector((state:{count:{value:number}})=>state.count  )
    const dispatch = useDispatch()
    const increment =()=>{
        dispatch(incr(counterState.value))
    }
    const decrement = ()=>{
        dispatch(decr(counterState.value))

    }

    return (
        <>

            <button onClick={increment} className="bg-blue-500 text-white p-3">
                +
            </button>
            {
                counterState.value
            }

            <button onClick={decrement} className="bg-blue-500 text-white p-3">
                -
            </button>
        </>
    )
}