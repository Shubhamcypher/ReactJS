import React from 'react'
import { useEffect,useState } from 'react'

function Github() {
    const [data, setdata] = useState([])
    useEffect(()=>{
        fetch('https:api.github.com/users/Shubhamcypher')
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        setdata(data)
    }),[]})
    
  return (
    <div className='text-center m-4 p-4 text-3xl bg-green text-white'>Github Followers:{data.followers}</div>
  )
}

export default Github