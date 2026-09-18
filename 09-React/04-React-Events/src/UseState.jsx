import {useState} from 'react';

export default function UseState(){
    const [num,setNum]=useState(0);
    
    const IncNum=()=>{
        setNum(num+1);
    }
    return(
        <>
         <h1>Number:{num}</h1>
         <button onClick={IncNum}>Increment</button>
        </>
    )
}