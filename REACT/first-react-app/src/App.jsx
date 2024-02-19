import './App.css'
import Goat from './Goat'
import Greeter from './Greeter'
import Die from './Die'
import DoubleDice from './DoubleDice'
import ColorList from './ColorList'

function App() {
 return <div>
    {/* <Die/>
    <Die numSides={12}/>
    <Die numSides={20}/> */}
      <DoubleDice/>
      <DoubleDice/>
      <DoubleDice/>
      <ColorList colors={['red', 'blue', 'green']}/>
 </div>
}

export default App
