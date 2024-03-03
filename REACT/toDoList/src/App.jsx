import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'

function App() {

  return (
    <>
     <CssBaseline/>
     <h1>TO DOS</h1>
     <TodoList/>
    </>
  )
}

export default App
