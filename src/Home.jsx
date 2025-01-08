import { Link } from "react-router-dom";
import "./site.css"
import  NavBar  from "./navBar";




export function Home(){
    return(
        <div className="Home">
        <header className="Home-header">
        <NavBar/>
        -Justin Turner- <br/>
        -Software Developer-<br/>
         
       <img src="https://media.contentapi.ea.com/content/dam/gin/images/2017/01/syndicate-keyart-min.jpg.adapt.crop3x5.533p.jpg" alt="" />
        </header>

       

      </div>
    );
    
    }
    
