import React from 'react'
import Nav from '../components/Nav'


export default function Projects () {
  return (
    <>
      <Nav />
      <div id='Projects' className='bg-blue-950 text-white h-screen flex flex-col' >
        <h1>Projects</h1>
        <div className='mx-auto'>
          <div>
            {/* <img src='client\src\imgs\Screenshot (11).png' className='inline-block'/> */}
            <div className='inline-block'>
              <h2>Wordle site</h2>
              <p>This is one of the first sites I made. It is my version of the game Wordle.
                I had a lot of fun making this and plan on working on it more in the future.
                I made it using HTML, CSS, and vanilla JS 
              </p>
            </div>
            
          </div>
          <div>
          {/* <img src='client\src\imgs\Screenshot (12).png' className='inline-block'/> */}
            <div className='inline-block'>
              <h2>Marvel site</h2>
              <p>I made this site to for an assignment, it's using an api to help you get information on your favorite 
                marvel superheros, villians, and comics. I plan to rework this entire site in the near future.
                I made it using React, Javascript, CSS, and Web Apis.
              </p>
            </div> 
          </div>
        </div>
        <p>More things coming soon...</p>
      </div>
    </>
  )

}

//these are the links to the pages that will go here
// https://jaylenberrien.github.io/wordle-project/
// https://marvell-discover.netlify.app/