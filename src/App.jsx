import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/home'
import ToDolist from './components/ToDoLists'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home />
      <ToDolist />
    </>
  )
}

export default App
