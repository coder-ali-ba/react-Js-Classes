import { Menu, Moon } from "lucide-react";
import "./style.css"; 


 function Header() {
  return (
    <header className='header'>
      <div className="logo">
        MyLogo
      </div>
     
      <nav className="nav-links">
          
        <div>
           <a href="#home">HOME</a>
        </div>
        {/* <div>
           <div href="#" className="dropbtn">
             Hello
             <a href="" className="options">1</a>
             <a href="" className="options">2</a>
             <a href="" className="options">3</a>
             <a href="" className="options">4</a>
           </div>
        </div> */}
           <a href="#blogs">Blogs</a>
           <a href="#blogs">Blogs</a>
           <a href="#blogs">Blogs</a>
           <a href="#projects">Projects</a>
      </nav>
      <div>
           <button  className="toggle-button">
            <Moon id="moon" size={24}></Moon>
            <Menu id="burg" size={24}></Menu>
           </button>
      </div>
    </header>
  );
}

function HeroSec(){
  return(
 
    <div>
         {/* <img id="bacImg"  src="https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563356.jpg&fm=jpg" alt="Responsive" />
         <div id="cent">
           <h1 alt="Responsive">Hello</h1>
           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, blanditiis veritatis. Itaque officiis quidem a. Ipsam similique qui molestiae id voluptas corporis? Eaque temporibus blanditiis voluptatibus error, ullam molestiae maiores?</p>
         </div> */}

         <div id="skd">
                 <div className="card1">
                  <h1>Skardu Tour Packages</h1>
                  <p>We offer the best family and friends vacation trips from Islamabad to Skardu. In the Skardu tour packages, you will explore Deosai Plane, Shigar, Khaplu, Basho Meadows, Katpana Cold Desert, Organic Village tour, Shangrilla Resort, Chunda Valley, and many more. Secondly, there is a difference between flight times from Islamabad to Skardu on weekdays and weekends. Moreover, you can join our Skardu vacation trips from Lahore, Karachi, Rawalpindi, Multan, and Islamabad.</p>
                 </div>
         </div>
         
    </div>
    
  )
}


export  {Header,HeroSec}




