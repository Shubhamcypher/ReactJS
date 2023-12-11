
import React from 'react'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './userContext/userContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <div className='bg-red-600 font-extrabold text-3xl text-black'>Hello</div>

      <Login/>
      <Profile/>
      
    </UserContextProvider>
    
  )
}

export default App
