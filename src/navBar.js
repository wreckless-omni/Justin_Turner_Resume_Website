import { Link } from 'react-router-dom';
import "./site.css"



const tone1 = "./Web_Tone-001.mp3"
const tone2 = "./Web_Tone-002.mp3"
const tone3 = "./Web_Tone-003.mp3"
const tone4 = "./Web_Tone-004.mp3"

function NavBar(){
  const audio1 = new Audio(tone1);
  const audio2 = new Audio(tone2);
  const audio3 = new Audio(tone3);
  const audio4 = new Audio(tone4);

  const handleClick1 = () => {
    audio1.play(); 
  };
  const handleClick2 = () => {
    audio2.play(); 
  };
  const handleClick3 = () => {
    audio3.play(); 
  };
  const handleClick4 = () => {
    audio4.play(); 
  };

  

return(
  
  <nav className = "nav">
<Link to = "/"   onClick={handleClick2} className='site-title'> 


<img  src={"./home logo2.png"} alt="" height={100}/>

</Link>


<ul>
 <li><Link to ='/Contact' onClick={handleClick3}>Contact</Link></li>
 <li> <Link to ='/About'  onClick={handleClick4}>About</Link></li>
 <li><Link to ='/Projects'  onClick={handleClick1}>Projects</Link></li>


  
</ul>





  </nav>
  
  
  
 






);
}

export default NavBar;