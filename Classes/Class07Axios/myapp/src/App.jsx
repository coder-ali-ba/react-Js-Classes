
import './App.css'
import OffcanvasExample from './Components/Navbar'
import Card from './Components/Card'

function App() {
 

  return (
    <>
    <OffcanvasExample />

    <div style={{
      width:"100%",
      height:"150px",
      backgroundColor:"yellow"
    }}>

    </div>
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
