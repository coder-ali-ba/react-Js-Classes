import { useState } from 'react'

import CompOne from './components/compOne'
import CompTwo from './components/CompTwo'
import CompThree from './components/CompThree'



function App() {
const name = "Habib Ali"
const Age = 22

function childToPAr(){
console.log(toPar)
}

  return (
    <>
    <h1 style={{
      textAlign:"center"
    }}>HELLO</h1>
    <CompOne userName={name} Age={Age} desig={"Admin"}/>
    <CompTwo  user={name} userAge={Age} toChild={childToPAr}/>
    <CompThree />
    </>
  )
}

export default App
