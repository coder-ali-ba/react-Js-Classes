import React from "react";
import {createRoot} from 'react-dom/client'
import './style.css'
import {Header,HeroSec,Cards} from './App'




const root = createRoot(document.getElementById("root"))

root.render(
  <div>
  <Header />
  <HeroSec />
  <Cards />
  </div>

)

