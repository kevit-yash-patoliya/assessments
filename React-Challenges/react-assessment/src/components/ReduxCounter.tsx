import { decr, incr } from "../redux/slices/counterSlices";
import { useAppDispatch, useAppSelector, type RootState } from "../redux/store";

export default function ReduxCounter(){
    const dispatch = useAppDispatch();
    const counterState = useAppSelector((state:RootState)=>state.count)
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