import React,{useState, useContext} from 'react'
import UserContext from '../userContext/userContext'



function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassworde] = useState("")

    const {setUser}= useContext(UserContext)

    const handleSubmit= (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input 
        className='bg-gray-600 border border-black m-3 p-3 block'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        type="text"
         placeholder='username' />

        <input 
        className='bg-gray-600 border border-black m-3 p-3 block'
        value={password}
        onChange={(e)=>setPassworde(e.target.value)}
         type="text"
          placeholder='password' />
          
        <button className='bg-green-800 border-black border m-5 pl-4 pr-4' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login