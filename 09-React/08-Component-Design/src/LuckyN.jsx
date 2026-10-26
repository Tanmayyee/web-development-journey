import Dice from './Dice'
import { getRolls } from './Utils'
import { useState } from 'react'

export default function LuckyN({numDice=2,winCheck}){
    const [dice,setDice]=useState(getRolls(numDice))
    const isWinner=winCheck(dice);
    const roll=()=>setDice(getRolls(numDice));
    return(
        <main className='lucky'>
            <h1>Lucky {isWinner && ": 🎉 You Win!"}</h1>
            <Dice dice={dice}/>
            <button onClick={roll}>Re-Roll</button>
        </main>
    )
}