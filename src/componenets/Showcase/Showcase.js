import react from "react";
import { AiFillCaretDown } from "react-icons/ai";
import './Showcase.css';
function Showcase(){
    return (
     <div>
      <div className="no1rental mt-1 container">
        <div className="no1rentalInner">
        <p className="Showcase_brand">BUTWAL BIKE RENTALS</p>
        <h3>No.{Math.floor(Math.random()*30)} Bike Rental Service in Butwal</h3>
        <p className="Explorediv"><a className="Explore" href="">Explore<AiFillCaretDown/></a></p>
        
        </div>
      </div>
      </div>
    )
}
export default Showcase;