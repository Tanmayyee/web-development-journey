//array in state

import { v4 as uuid } from "uuid";
import { useState } from "react";
export default function EmojiClicker() {
    const [emoji, setEmoji] = useState([{ id: uuid(), emoji: "😘" }]);

    const addEmoji = () => {
        setEmoji((oldEmoji) => [...oldEmoji, { id: uuid(), emoji: "😘" }]);
    };

    const deleteEmoji=(id)=>{
        setEmoji((preEmoji)=>{
            return preEmoji.filter((e)=>e.id!==id)
        })
    }
    
    const makeThemSad =()=>{
        setEmoji((preEmoji)=>{
            return preEmoji.map((e)=>{
                return { ...e,emoji:"😞"}
            })
        })
    }

    return (
        <>
            <p>-------------------------------------------</p>
            {emoji.map((e) => (
                <span onClick={()=>deleteEmoji(e.id)} key={e.id} style={{ fontSize: "2rem" }}>
                    {e.emoji}
                </span>
            ))}
            <div>
                <button onClick={addEmoji}>Add more kiss</button>
                <button onClick={makeThemSad}>Make them all sad</button>
            </div>
        </>
    );
}
