import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlotMachine from './SlotMachine'
import DefineSlots from './DefineSlots'

let values = []
const options = ["🍊", "🍓", "🍐", "🍇"];
    for(let i = 0; i < 3; i++){
        let idx = Math.floor(Math.random() * options.length)
        let v = options[idx]
        values.push(v)
    }


function App() {

  return (
    <>
      {/* <SlotMachine/> */}
      <SlotMachine values={values}/>

    </>
  )
}

export default App
