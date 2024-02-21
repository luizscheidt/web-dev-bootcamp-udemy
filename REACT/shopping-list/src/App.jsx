import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './ShoppingList'
import PorpertyList from './PropertyList'
import Clicker from './Clicker'

const data = [
  {id: 1, item: 'eggs', quantity: 12, completed: true},
  {id: 2, item: 'milk', quantity: 6, completed: false},
  {id: 3, item: 'coffee', quantity: 1, completed: true},
  {id: 4, item: 'potatoes', quantity: 8, completed: false},
]

const properties = [
  { id: 129031, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 129331, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 129032, name: "Cactus Retreat", rating: 4.75, price: 300 },
  { id: 129033, name: "Redwood Treehouse Escape", rating: 4.9, price: 120 },
  { id: 129034, name: "Oceanview Condo", rating: 4.7, price: 140 },
  { id: 129035, name: "Gold Miner Campground", rating: 4.69, price: 96 },
];

function App() {
  

  return (
    // <ShoppingList items={data}/>
    // <PorpertyList properties={properties}/>
    <Clicker buttonText='Dont click me' message='I TOLD YOU NOT TO'/>
  )
}

export default App
