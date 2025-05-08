
              
                 //LISTS


import React from 'react'

import products from './apis'

function CompThree() {
    const Arr = [1, 3, 4, 5, 7, 9 ,90,34 ,45]
   

  return (
    <>
    <div style={{
        textAlign:"center"
    }}>
      <h1>Hello Component three</h1>
      <h1>{Arr[0]} {Arr[2]}</h1>

      {
        Arr.map((num , index)=>{
          return <h1 key={index}>{num}</h1>
         })

      }
    </div>

    <div style={{
                        width:"100%",
                        display:"flex",
                        flexWrap:"wrap",
                        gap : "30px",
                        justifyContent:"center"
                    }}>
        {
            products.map((product , id)=>{
                return(
                    <div >
                         <div key={id} style={{
                        width:"400px",
                        height:"500px",
                        background : "blue",
                        marginTop:"30px",
                        textAlign:"center"

                    }}>
                        <h1>{product.author}</h1>
                        <h1>{product.id}</h1>
                        <img style={{
                            width:"100%",
                            height:"60%"
                        }} src={product.download_url} alt="#" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus magnam aut sit delectus nostrum aspernatur porro repellat.</p>


                    </div>
                    </div>
                   
                )
            })
        }
    </div>
   
    </>
  )
}

export default CompThree
