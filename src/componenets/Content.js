import react from "react";
import Showcase from "./Showcase/Showcase";
import Map from "./Map";
import Footer from "./Footer/Footer";
import Whyus from "./Whyus/Whyus";
import Navbar from "./Navbar";
import Register from "./Admin/Register/Register";
 function Content(){
     return(
         <div>
         <Navbar/>
        <Showcase/>
        <Whyus/>
        <div>
        </div>
         </div>
        
     )
 }
 export default Content;