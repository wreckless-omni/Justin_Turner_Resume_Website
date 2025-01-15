import "./site.css"
import  NavBar  from "./navBar";
import AssignmentIndSharpIcon from '@mui/icons-material/AssignmentIndSharp';




export function Contact (){

return(
    <div className="Contact">
    <header className="Contact-header">
    <NavBar/>
    
   
      

    </header>

   
    <body>
    <h1>-Contact- <br/></h1>
    <p class = "paragragh">
        -Justin Turner-<br/>
        (818) 649-0278<br/>
        Justin.turner83@gmail.com<br/><br/>
      

      
      <a
        className="Contact-link"
        href="https://github.com/wreckless-omni"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={"./Github.png"} alt="" height={30}/>
      </a>

      <a
        className="Contact-link"
        href="https://mega.nz/file/zapHEQwY#_ODVt_xdiF8vTlk3peGBA89kp5YwWsjqyu1uaZx08y8"
        target="_blank"
        rel="noopener noreferrer"
      >
     
<AssignmentIndSharpIcon  style={{ color: 'aqua'}}/>
      </a>

      <a
        className="Contact-link"
        href="https://www.linkedin.com/in/justinturner83/"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img src={"./bluelinkedin.png" } alt=""/>
      </a>
      </p>



    </body>
  </div>


);

}

