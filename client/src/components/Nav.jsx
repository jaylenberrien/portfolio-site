import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav () {
  return (
    <>
      {/* <div className='flex flex-row justify-start m-4'>
        Example Title
      </div> */}
      <div className='h-16 flex flex-row justify-end text-black'>
        
        <Link to='/'>
          <div className='justify-start m-4'>test</div>
        </Link>

        <Link to='/about'> 
          <div className='flex-block m-4 justify-end'>About</div>
        </Link> 
        <Link to='/projects'> 
          <div className='flex-block m-4 justify-end'>Projects</div>
        </Link> 
        <Link to='/contact'> 
          <div className='flex-block m-4 justify-end'>Contact</div>
        </Link> 


      </div>
    </>

  )
}

