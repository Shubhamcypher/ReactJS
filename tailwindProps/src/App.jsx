import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
      <h1 className="bg-green-500 text-gray-800 font-bold underline hover:scale-125 p-8 rounded-md mb-6">Tailwind</h1>

      
      <Card username="Shubham" btnTxt="click me" />
      <Card username="Chirag" btnTxt="click here" />
      
      
    </>
  )
}

export default App
