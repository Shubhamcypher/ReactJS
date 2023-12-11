import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className='w-screen h-screen duration-200'style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap justify-center gap-2 shadow-xl bg-yellow-200 px-3 py-3 rounded-3xl ">
            <button onClick={()=>setColor("red")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("orange")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"orange"}}>Orange</button>
            <button onClick={()=>setColor("white")} className='rounded-full outline-none px-4 shadow-xl shadow-black text-black' style={{backgroundColor:"white"}}>white</button>
            <button onClick={()=>setColor("black")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"black"}}>Black</button>
            <button onClick={()=>setColor("purple")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"purple"}}>Purple</button>
            <button onClick={()=>setColor("brown")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"brown"}}>Brown</button>
            <button onClick={()=>setColor("pink")} className='rounded-full outline-none px-4 shadow-xl shadow-black' style={{backgroundColor:"pink"}}>Pink</button>
            <button onClick={()=>setColor("yellow")} className='rounded-full outline-none px-4 shadow-xl shadow-black text-black' style={{backgroundColor:"yellow"}}>Yelow</button>
            
          </div>
        </div>
      </div>
    
  )
}

export default App
