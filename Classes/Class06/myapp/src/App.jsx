

          //UseEFFECT


import { useEffect, useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)
  let [name , setName] =useState("")

       //runs for only first time of render
  useEffect(()=>{
    console.log("Ali MOLA");   
  },[])



       //Runs after every re-render
  useEffect(()=>{
    console.log(name);
  })


      //Runs after only the single state is being updated

  useEffect(()=>{
    console.log("Ali Baba");
    
  }, [count])


  

  return (
    <>
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(++count)
    }}>CLick</button>


    <input type="text" value={name} onChange={(e)=>{
    setName(e.target.value)
    }} />
    </>
  )
}

export default App
