import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(15)
  
  const addvalue = () => {
    if(counter<20){
        setCounter(counter + 1)
    }
      }
  const removevalue = () => {
    if(counter>0){
      setCounter(counter - 1)
  }
    
}

  return (
    <>
    <h1>Add number or Remove number</h1>
    <br />
     <h2>Counter number :{counter}</h2>
     <button onClick={addvalue}>Add Number {counter}</button>
     <button onClick={removevalue}>Remove Number {counter}</button>
    </>
  )
}

export default App
