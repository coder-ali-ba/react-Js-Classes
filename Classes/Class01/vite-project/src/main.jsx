import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {App , Header , Body} from './App.jsx'
import './App.css'



const root = createRoot(document.getElementById("root"))
root.render(
  <div className='main'>
        <h1>habib ali</h1>
        <img  src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" />
        <App/>
        <Header />
        <Body />
  </div>
  
)