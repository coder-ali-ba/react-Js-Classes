import { useState } from 'react'
import './App.css'
import Home from './Components/Home'
import Contacts from './Components/Contacts'
import { Routes , Route, Link} from 'react-router-dom'

function App() {
  

  return (
   
    <>
   <h1 className='text-red-500'>Habib Ali</h1>
   <Link to={'/'}>Home</Link>
   <Link to={'contact'}>Contact</Link>
     <Routes>
         
          <Route path='/' element={<Home />} />
          <Route path="contact" element={<Contacts />} />
        
      </Routes>
    </>
  )
}

export default App
