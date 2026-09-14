import './App.css'
import Greeter from './greeter'
import Die from './die'
import Listpicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ColorList from './ColorList'
import Slots from './SlotMachine'

function App() {
  return (
    <div>
    
    <Slots val1='🍒' val2='🍒' val3='🍒' />
    <Slots val1='🍒' val2='🍌' val3='🍒' />
    <Heading text='Hello im heading' />
    <Heading text='Hello im heading' c='indigo' />
    <ColorList colors={["red","blue","green","magenta","pink"]} />
    <Greeter person='bill' from='tanmay' />
    <Greeter person='jon' from='misha' />         {/*Use quotes for string props */}

    <Die numSides={20} />
    <Die numSides={6} />
    <Die />
    <Die numSides={10} />       {/*Use curly braces for JavaScript expressions */}
    
    <Listpicker values={[1,2,3]} />
    <Listpicker values={["a","b","c"]} />     

    <DoubleDice />
    <DoubleDice />
    <DoubleDice /> 
    </div>
  )
}

export default App
