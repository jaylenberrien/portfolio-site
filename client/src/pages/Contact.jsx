import React from 'react'
import Nav from '../components/Nav'


export default function Contact () {
  return (
    <>
      <Nav />
      <div id='Contact' className='bg-blue-950 text-white h-screen flex flex-col'>
        <div className='mx-auto'>
          Contact me
        </div>
        <div className='m-auto'>
          {/* <p className='flex-block'>Made by Jaylen Berrien|2024</p> */}
          <a href='https://github.com/jaylenberrien?tab=overview&from=2024-01-01&to=2024-01-09'><img className='' src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png"/></a>
          <a href='https://www.linkedin.com/in/jaylen-berrien/'><img className='' src="https://cdn-icons-png.flaticon.com/128/3669/3669739.png"/></a>
          <a href='mailto:jaylenberrien.jb@gmail.com'>jaylenberrien.jb@gmail.com</a>
        </div>
      </div>
 


      
    </>

  )
}

