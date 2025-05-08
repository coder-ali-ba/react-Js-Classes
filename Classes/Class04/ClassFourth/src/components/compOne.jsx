                  
                  
                  //PROPS
 
import React from 'react'

const CompOne = (props) => {
    const {userName , Age , desig} = props
  return (
    <div style={{
        textAlign:"center"
    }}>
        <h1>First Component {userName} {Age} {desig}</h1>
    </div>
  )
}

export default CompOne


