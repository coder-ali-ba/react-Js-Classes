import React from 'react'

function CompTwo(props) {
    const {user , userAge , tochild} = props

    const toPar ="HelloParent"
  return (
    <div style={{
        textAlign:"center"
    }}>
      <h1>Here is comPonent 2</h1>
      <h1>{user} {userAge} {tochild} {toPar}</h1>  
    </div>
  )
}

export default CompTwo
