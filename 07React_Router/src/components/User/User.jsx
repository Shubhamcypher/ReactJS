import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id}= useParams()
  return (
    <div className=' w-full h-screen '>
      <div className='flex bg-orange-700 text-white text-3xl p-4  text-center align-middle justify-center w-full h-full'>User:{id}</div>
    </div>
  )
}

export default User