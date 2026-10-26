import './App.css'
import LuckyN from './LuckyN'
import {sum} from './Utils'

function lessThan4(dice) {
  return sum(dice) < 4;
}

function App() {

  return (
    <>
      <LuckyN numDice={2} title='Equal to 7' winCheck={(dice)=>sum(dice)===7}/>
      <LuckyN numDice={2} title='Less than 4' winCheck={lessThan4}/>
      <LuckyN numDice={3} title='All Dice Equal' winCheck={(dice)=>dice.every(d=>d===dice[0])}/>
    </>
  )
}

export default App
