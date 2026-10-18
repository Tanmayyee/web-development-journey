//array in state

import { useState } from "react";
export default function EmojiClicker(){
    const [emoji,setEmoji]=useState(["😘"])
    
    const addEmoji=()=>{
        setEmoji((oldEmoji)=>[...oldEmoji,"😘"])
    }
    return(
        <>
        <p>-------------------------------------------</p>
        {emoji.map((e)=>(
            <span style={{fontSize:"2rem"}}>{e}</span>
        ))}
        <div>
        <button onClick={addEmoji}>Add more kiss</button>
        </div>
        </>
    )
}