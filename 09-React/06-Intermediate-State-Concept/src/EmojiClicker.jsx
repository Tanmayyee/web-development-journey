//array in state

import {v4 as uuid} from "uuid";
import { useState } from "react";
export default function EmojiClicker(){
    const [emoji,setEmoji]=useState([{id:uuid(), emoji:"😘"}])
    
    const addEmoji=()=>{
        setEmoji((oldEmoji)=>[...oldEmoji,{id:uuid(), emoji:"😘"}])
    }
    return(
        <>
        <p>-------------------------------------------</p>
        {emoji.map((e)=>(
            <span key={e.id} style={{fontSize:"2rem"}}>{e.emoji}</span>
        ))}
        <div>
        <button onClick={addEmoji}>Add more kiss</button>
        </div>
        </>
    )
}