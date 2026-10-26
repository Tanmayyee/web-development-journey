import Dice from './Dice'
import { getRolls } from './Utils'
import { useState } from 'react'
import Button from './Button'

export default function LuckyN({title="roll game" ,numDice=2,winCheck}){
    const [dice,setDice]=useState(getRolls(numDice))
    const isWinner=winCheck(dice);
    const roll=()=>setDice(getRolls(numDice));
    return(
        <main className='lucky'>
            <h1>{title} {isWinner && ": 🎉 You Win!"}</h1>
            <Dice dice={dice}/>
            {/* <button onClick={roll}>Re-Roll</button> */}
            <Button func={roll} label='Re-Roll'/>     {/* using the Button component instead of a regular button ,, or ,, using functions as a props that changes the state of the parent component */}
            
        </main>
    )
}