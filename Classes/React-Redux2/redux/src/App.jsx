import { Route, Routes } from "react-router-dom"
import MainPage from "./Pages/mainPage/MainPage"
import SecondPage from "./Pages/secondPage/SecondPage"


function App() {
  return (
   <Routes>
     <Route path="/" element={<MainPage />}></Route>
     <Route path="/second" element={<SecondPage />}></Route>
   </Routes>

  )
}

export default App
