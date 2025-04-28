import { Menu, Moon , Star ,Clock} from "lucide-react";
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
         <div id="skd">
                 <div className="card1">
                 <h1>Skardu Tour Packages</h1>
                 <p className="para">We offer the best family and friends vacation trips from Islamabad to Skardu. In the Skardu tour packages, you will explore Deosai Plane, Shigar, Khaplu, Basho Meadows, Katpana Cold Desert, Organic Village tour, Shangrilla Resort, Chunda Valley, and many more. Secondly, there is a difference between flight times from Islamabad to Skardu on weekdays and weekends. Moreover, you can join our Skardu vacation trips from Lahore, Karachi, Rawalpindi, Multan, and Islamabad.</p>
                  
                 </div>
         </div>
         
    </div>
    
  )
}




function Cards(){
  return(
    <div id="cards">
      <div id="part1">
         <div className="singleCard">
           <div className="imag">
               <p className="AIR">BY Air Tour Package</p>
               <img className="airImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5t048XMp-La9lBJfHyFtrXVoq6808faL3_w&s" alt="#" />
           </div>
           <div className="clock">
               <h1>tigiuh ioghnf lkiewhfoiewhfio</h1>
               <p><Clock size={20}></Clock>uheif</p>
           </div>
           <div className="PKR">
             <h3>From PKR 234235 TO</h3>
             <h1>PKR:23878</h1>
             <p>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star> 
             </p>
             <p>10 Reviews</p> 
             <button className="view">View Details</button>
           </div>
        </div>


        <div className="singleCard">
           <div className="imag">
               <p className="AIR">BY Air Tour Package</p>
               <img className="airImg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5t048XMp-La9lBJfHyFtrXVoq6808faL3_w&s" alt="#" />
           </div>
           <div className="clock">
               <h1>tigiuh ioghnf lkiewhfoiewhfio</h1>
               <p><Clock size={20}></Clock>uheif</p>
           </div>
           <div className="PKR">
             <h3>From PKR 234235 TO</h3>
             <h1>PKR:23878</h1>
             <p>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star> 
             </p>
             <p>10 Reviews</p> 
             <button className="view">View Details</button>
           </div>
        </div>


        <div className="singleCard">
           <div className="imag">
               <p className="AIR">BY Air Tour Package</p>
               <img className="airImg"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5t048XMp-La9lBJfHyFtrXVoq6808faL3_w&s" alt="#" />
           </div>
           <div className="clock">
               <h1>tigiuh ioghnf lkiewhfoiewhfio</h1>
               <p><Clock size={20}></Clock>uheif</p>
           </div>
           <div className="PKR">
             <h3>From PKR 234235 TO</h3>
             <h1>PKR:23878</h1>
             <p>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star>
              <Star size={24}></Star> 
             </p>
             <p>10 Reviews</p> 
             <button className="view">View Details</button>
           </div>
        </div>


      </div>








      <div id="part2">
        <h1> SKARDU TRIP PACKAGES</h1>
        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>



        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>



        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>


        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>



        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>



        <div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>



<div className="sra">
          <div>
               <img className="smImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnS3V5lvXGZJPVNTjWWJYjTW_-xNHRUYu-9g&s" alt="#" />
          </div>
        
          <div>
             <h3 className="tour">7 Days Skardu Deosai Tour Package from Lahore</h3>
             <button className="love">Lovely Tour Package</button>
             <p className="smPkr">from 24324 to PKR : 1`2435</p>
          </div>
        </div>

      </div>
    </div>
   
  )
}


export  {Header,HeroSec,Cards}




