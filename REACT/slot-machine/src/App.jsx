import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SlotMachine from './SlotMachine'

function App() {

  return (
    <>
      <SlotMachine v1='🍒' v2='🍒' v3='🍒'/>
      <SlotMachine v1='🍒' v2='🍫' v3='🍫'/>
    </>
  )
}

export default App
