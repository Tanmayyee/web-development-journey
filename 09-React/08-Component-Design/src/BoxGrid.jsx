import Box from "./Box"
import {useState} from "react"
export default function BoxGrid(){
    const [boxes,setBoxes]=useState([false,false,false,false,true,false,false,false,false]);
    return(
        <div>
            {boxes.map((b)=>{
            return <Box isActive={b}/>
        })}
        </div>
        
    )
}