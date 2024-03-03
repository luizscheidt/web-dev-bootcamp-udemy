import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import ButtonAppBar from './ButtonAppBar'
import Button from '@mui/material/Button'
import RatingDemo from './RatingDemo'
import FormDemo from './FormDemo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ButtonAppBar/>
    <Button variant="contained" onClick={()=> alert('HI')}>Contained</Button>
    <RatingDemo/>
    <FormDemo/>
    </>
  )
}

export default App
