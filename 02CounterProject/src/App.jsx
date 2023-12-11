import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(5)

  // let counter=5

  const addvalue=()=>{
    if(counter<25)
    {
      counter++;
      setCounter(counter)
      console.log("Value Added",counter);
    }
  }

  const removevalue=()=>{
        if(counter>0)
        {
          counter--;
          setCounter(counter)
          console.log("Value Removed",counter);
        }
      
  }
  

  return (
    <>

    <h1>chai le lo: {counter}</h1>
    <h2>Counter:{counter}</h2>
    <button onClick={addvalue}>Add Value</button>
    <button onClick={removevalue}>Remove Value</button>


    </>
  )
}

export default App
