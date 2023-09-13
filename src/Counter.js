import React, { useReducer } from 'react'
import "./style.css"

const initialState = {
    count: 0
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increase":
            return {
                count: state.count + 1
            }
        case "decrease":
            if (state.count > 0) {
                return {
                    count: state.count - 1
                }
            }
            else {
                return { count: 0 }
            }
        case "reset":
            return initialState;
        default:
            return state;
    }

}
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='counter'>
            <div className="display">
                <p>{state.count}</p>
                
            </div>

            <div className='buttons'>
                <button onClick={() => dispatch({ type: "increase" })}>+</button>
                <button onClick={() => dispatch({ type: "decrease" })}>-</button>
                <button onClick={() => dispatch({ type: "reset" })}>reset</button>
            </div>
        </div>
    )
}

export default Counter