import { useState } from "react";

export default function CurrentCount(){
    const [count,setCount]=useState(0);
    
    const addOne= ()=>{
        setCount(count+1);
    }

    const addThree=()=>{
        setCount((currenCount)=>currenCount+1);
        setCount((currenCount)=>currenCount+1);
        setCount((currenCount)=>currenCount+1);
    }

    return(
        <>
        <h2>Count: {count}</h2>
        <button onClick={addOne}>+1</button>
        <button onClick={addThree}>+3</button>
        </>
    )
}