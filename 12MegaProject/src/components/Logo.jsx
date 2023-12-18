import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div>
      <div>
        <img src="https://www.freepngimg.com/thumb/symbol/61606-logo-circle-brand-ibm-download-hd-png.png" alt="" className='h-10 w-20 inline' />
        <p className='inline font-extrabold'>NIDS</p>
      </div>
    </div>
  )
}

export default Logo