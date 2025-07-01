import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { addCounter, minusCounter } from './fatures/counter/couneter'

function App() {
 const {counter}= useSelector((store)=>store.counter)

 const dispath = useDispatch()
 

  return (

    <>
    <h1>Counter : {counter}</h1>
    <button onClick={()=>{
      dispath(addCounter())
    }}>Incre</button>

    <button onClick={()=>{
      dispath(minusCounter())
    }}>Decre</button>
    </>
  )
}

export default App
