import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: true},
  {id: 2, item: 'milk', quantity: 6, completed: false},
  {id: 3, item: 'coffee', quantity: 1, completed: true},
  {id: 4, item: 'potatoes', quantity: 8, completed: false},
]

function App() {
  

  return (
    <ShoppingList items={data}/>
  )
}

export default App
