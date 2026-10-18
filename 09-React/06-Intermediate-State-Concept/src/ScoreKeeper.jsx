//working with objects in state

import { useState } from "react";
export default function ScoreKeeper(){
    const [score,setScore]=useState({ p1Score:0, p2Score:0 })
    const incp1Score=()=>{
      setScore((oldScore)=>{
        return {...oldScore,p1Score:oldScore.p1Score+1}
      })
    }
    const incp2Score= ()=>{
        setScore((oldScore)=>{
            return{ ...oldScore,p2Score:oldScore.p2Score+1}
        })
    }
    return(
        <>
        <p>Player 1: {score.p1Score}</p>
        <p>Player 2: {score.p2Score}</p>
        <button onClick={incp1Score}>+1 Player 1</button>
        <button onClick={incp2Score}>+1 Player 2</button>
        </>
    )
}