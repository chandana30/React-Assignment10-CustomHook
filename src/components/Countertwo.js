import React from 'react'
import useCounter from '../hooks/withCounter'

function Countertwo() {
    const[count,increment,decrement,reset]=useCounter(10,100)
    return (
        <div>
            <p>CounterTwo-{count}</p>
            <button onClick={()=>{increment(100)}}>Increment</button>
            <button onClick={()=>{decrement()}}>Decrement</button>
            <button onClick={()=>{reset()}}>Reset</button>
            
        </div>
    )
}

export default Countertwo
