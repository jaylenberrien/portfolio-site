// import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import './index.css'

function App() {


  return (
    <div className='h-dvh'>

      {/* <HomePage /> */}
      {/* <Nav /> */}
      <Routes>
        <Route exact path='/' element={<HomePage /> }/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
      {/* <About />
      <Projects />
      <Contact /> */}
      {/* <Footer /> */}

    </div>
  )
}

export default App
