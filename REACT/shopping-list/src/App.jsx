import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

const data = [
  {item: 'eggs', quantity: 12, completed: false},
  {item: 'milk', quantity: 6, completed: false},
  {item: 'coffee', quantity: 1, completed: true},
  {item: 'potatoes', quantity: 8, completed: true},
]

function App() {
  

  return (
    <ShoppingList items={data}/>
  )
}

export default App
