import { Sun, Moon } from "lucide-react";
import "./style.css"; 


 function Header() {
  return (
    <header className='header'>
      <div className="logo">
        MyLogo
      </div>
      <nav className="nav-links">
        <a href="#blogs">Blogs</a>
        <a href="#projects">Projects</a>
      </nav>

      {/* Light/Dark Toggle */}
      <button  className="toggle-button">
        <Moon size={24} />
      </button>
     
    </header>
  );
}

function HeroSec(){
  return(
 
    <div>
         <img id="bacImg"  src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg" alt="Responsive" />
         <div id="cent">
           <h1 alt="Responsive">Hello</h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, blanditiis veritatis. Itaque officiis quidem a. Ipsam similique qui molestiae id voluptas corporis? Eaque temporibus blanditiis voluptatibus error, ullam molestiae maiores?</p>
         </div>
         
    </div>
    
  )
}


export  {Header,HeroSec}




