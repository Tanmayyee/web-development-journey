import { useState } from "react"

function generateBoardGame(){
    console.log("Generating Board Game");
        return Array(1000);
    }

export default function Dumbo(){
    const [boardGame,setBoardGame]=useState(generateBoardGame);
    return(
        <>
        <h2>Board Game</h2>
        <button onClick={()=>{setBoardGame("hello")}}>Click me to change state</button>
        </>
    )
}