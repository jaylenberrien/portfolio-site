import React from 'react'
import Nav from '../components/Nav'

export default function About() {
  return (
    <>
      <Nav />
      <div id='About' className='flex bg-blue-950 text-white h-screen flex-col text-center'>
        <div className='mx-auto mb-24 mt-24 '>About</div>        
        <div className='mx-auto'>My name is Jaylen Berrien, I'm a fullstack developer that is looking to grow my skills and deepen my knowledge of programming/web development. I also knew I wanted to be some form of an engineer, a year after I graduated I decided I wanted to become a mechanical engineer. I started to learn to code to prepare for what I thought I would be doing in college. In the process of practicing and learning the basics I fell in love and knew that programming was what I wanted to do. Soon after I joined PerScholas's Software Engineering Program, and I have been learning more and more ever since.</div>
      </div>
    </>

  )
}

