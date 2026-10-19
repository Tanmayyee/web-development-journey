import './App.css'
import Dice from './Dice'
function App() {

  return (
    <>
      <Dice dice={[1,3,4]} color="red" />
      <Dice dice={[2,5,6]} color="green" />
      <Dice dice={[3,4,5]}/>
    </>
  )
}

export default App
