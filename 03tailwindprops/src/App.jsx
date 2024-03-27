import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400'>This a card</h1>
      <Card namemain="Prakalp" buttonmain="click yaha"/>
      <Card namemain="Maitri"/>
    </>
  )
}

export default App
