import { useState, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //ref hook
  const passwordRef = useRef(null)

  const passwordGenerator= useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed)
    str+="0123456789"

    if(charAllowed)
    str+="/?@#!$%^&*()"

    for (let i = 1; i <=length; i++) {
      let char= Math.floor((Math.random()*str.length)+1)
      pass+=str.charAt(char);
      
    }
    setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

  const copy= useCallback(()=>{
    passwordRef.current.select()
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect( () => {
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])




  return (
    <>
      <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center text-sm'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 my-4 bg-white rounded-xl'
          placeholder='Password'
          readOnly
          ref={passwordRef}
           />
           <button className='bg-blue-800 text-white text-sm m-4 shrink-0' onClick={copy}>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={25}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
             /> 
             <label>Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numberAllowed} 
            onChange={()=> {setNumberAllowed((prev) => !prev)}}
            id='number'/>
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charAllowed} 
            onChange={()=> {setCharAllowed((prev) => !prev)}}
            id='character'/>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
