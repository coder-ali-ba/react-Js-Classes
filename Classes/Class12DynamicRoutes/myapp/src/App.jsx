import { useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import AllPro from './Components/Products/AllPro'
import PrOne from './Components/Products/PrOne'
import ProTwo from './Components/Products/ProTwo'
import ProThree from './Components/Products/ProThree'

function App() {
  

  return (
    <>
     {/* <div>
        <Link to="/">All Products</Link> | 
        <Link to="/one"></Link> | 
        <Link to="/contact">Contact</Link>
    </div> */}
    
    
    {/* <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Routes> */}


      <Routes>
        <Route path="/" element={<AllPro />}>
             <Route path='one' element={<PrOne />}></Route>
             <Route path='two' element={<ProTwo />}></Route>
             <Route path='three' element={<ProThree />}></Route>
        </Route>
      </Routes>


    
     
    </>
  )
}

export default App
