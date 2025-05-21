
import './App.css'
import OffcanvasExample from './Components/Navbar'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from './Components/Card'
import { useState , useEffect } from 'react';


function App() {


  
 

  return (
    <>
    <OffcanvasExample />

   
    
     
    
    <div style={{
      display :"flex",
      flexWrap:"wrap"
    }}>
      <Card />
    </div>

  

    </>
  )
}

export default App
