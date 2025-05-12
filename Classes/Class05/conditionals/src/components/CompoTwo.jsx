

                   //CONDITIONAL RENDERING
                 

                   
import React from 'react'
    const name = prompt("enter your name")
    const Num = 21

function CompoTwo() {

    function checkName(){
        if(name === "HabibAli"){
          alert("Correct")
        }else{
          alert("InCorrect")
        }
    }



 

    function checkNum(){
      Num >= 18 ? console.log("u r eligible") : console.log("u r not eligible")  
    }

  return (
    <div>
       <button onClick={checkName}>Click</button>
       <button onClick={checkNum}>Click</button>
    </div>
  )
}

export default CompoTwo
