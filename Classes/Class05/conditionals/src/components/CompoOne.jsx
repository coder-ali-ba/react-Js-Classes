             
             
             //USESTATE



import React from 'react'
import { useState } from 'react'

function CompoOne() {
     const [count, setCount] = useState(0)

  const [name , fullname] = useState("Habib")

  function incrCount(){
   setCount(count + 1)
   fullname(name + " AliBa")
  }
  return (
    <div>
      <div>
       <h1>{name}</h1>
       <h1>Hello {count}</h1>
      </div>
      <button onClick={incrCount}>Click</button>
    </div>
  )
}

export default CompoOne
