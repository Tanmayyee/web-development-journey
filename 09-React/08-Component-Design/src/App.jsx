import './App.css'
import LuckyN from './LuckyN'
function App() {

  return (
    <>
      <LuckyN numDice={3} goal={7}/>
      <LuckyN numDice={5} goal={15}/>
      <LuckyN numDice={6} goal={18}/>
    </>
  )
}

export default App
