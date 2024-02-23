import Dice from './Dice'
import LuckyN from './LuckyN'
import { getRolls, sum } from "./utils";


const lessThen4 = (dice)=> {
  return sum(dice) < 4;
}

const sameDice = (dice)=>{
  return dice.every((v)=> v === dice[0])
}

function App() {

  return (
    <>
      <LuckyN numDice={2} winFunction={lessThen4}/>
      <LuckyN numDice={2} winFunction={sameDice}/>
    </>
  )
}

export default App
