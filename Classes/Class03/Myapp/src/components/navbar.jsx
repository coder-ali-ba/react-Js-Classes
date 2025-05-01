import Button from 'react-bootstrap/Button';

const Nav = () => {
    const myName = "habib Ali"
    // console.log(myName , {12345 + 123243});
    function myFun(event ,a ,b){
    console.log( event.target , a + b);

    }

    return(
        <>
        <button onClick={(event)=>{
            myFun(event , 2 , 5)
        }}>Click</button>
        <h1 style={{
            color : 'white',
            background :'black'
        }}>Kurovi</h1>
        </>
    )
}


const Bootbtn = () => {
     function fun1(){
        alert("bootBtn is WOrking")
     }

     return(
        <>
           <Button variant="primary" onClick={fun1}>Primary</Button>
           <div style={{
            background : 'yellow',
            width : '300px',
            height :'300px'
           }}></div>
        </>
     )
}

export{Bootbtn , Nav}


