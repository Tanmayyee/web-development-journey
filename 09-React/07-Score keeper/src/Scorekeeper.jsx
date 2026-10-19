import "./ScoreKeeper.css";
import { useState } from "react";
export default function ScoreKeeper({numPlayer=3,target=5}){
    const[scores,setScores]=useState(new Array(numPlayer).fill(0));
    
    // const IncScore=(idx)=>{
    //      setScores((preScore)=>{
    //         const copy=[...preScore];
    //         copy[idx]+=1;
    //         return copy;
    //      })
    // }
    
    // MORE REACT WAY TO DO THAT IS BY USING MAP
    const IncScore=(idx)=>{
        setScores((preScores)=>{
            return preScores.map((score,i)=>{
                if(i===idx) return score+1;
                return score;
            })
        })
    }

    const Reset=()=>{
        setScores(new Array(numPlayer).fill(0))
    }

    const isWinner=scores.some((score)=>score>=target)        // some() checks if at least one player has reached the target score.

    return(
        <div className="score-keeper">
          <h1>Score Keeper</h1>
          <ul>
              {
                scores.map((score,idx)=>{
                    return(
                        <li key={idx}>
                            Player {idx+1}: {score}
                            {score>=target && "Winner!!!"}
                        <button 
                            onClick={()=>IncScore(idx)}
                            disabled={isWinner}
                        >
                            +1
                        </button>
                        </li>
                    )
                })
              }
          </ul>
          <button onClick={Reset}>Reset</button>
        </div>
    )
}