import React from 'react'
import Nav from '../components/Nav'
import { Link } from 'react-router-dom'

export default function HomePage () {
  return (
    <>
      <Nav />
      <div id='Homepage' className='bg-blue-950 text-white h-screen flex text-center'>
        <div className='m-auto'>
            <div>
                Hello, my name is <div className='inline-block text-purple-300'>Jaylen</div>.
            </div>
            <div>I'm a <div className='inline-block text-purple-300 mb-3'>Fullstack Developer</div>.</div>
            <Link to='/projects'> 
              <button className='text-purple-300 border-2 border-purple-300'> Go to my projects</button>   
            </Link> 
            
        </div>
      </div>
    </>

  )
}

