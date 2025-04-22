import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />

//   </StrictMode>,
// )

const root = createRoot(document.getElementById("root"))
root.render(
  // <StrictMode>
  //     <h1>habib ali</h1>
  
  // </StrictMode>,
  <div><h1>habib ali</h1>
  <img  src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg" alt="" /></div>
  
)