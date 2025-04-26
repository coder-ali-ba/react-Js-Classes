import React from "react";
import {createRoot} from 'react-dom/client'
import './style.css'
import {Header,HeroSec} from './App'




const root = createRoot(document.getElementById("root"))

root.render(
  <div>
  <Header />
  <HeroSec />
  </div>

)

