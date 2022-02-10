import react  from "react";
import { Link } from "react-router-dom";
import Showcase from "./Showcase/Showcase";
import Whyus from "./Whyus/Whyus";
import Map from "./Map";
function Navbar(){
    return(
<div>
{/* <!-- As a link --> */}
<nav className="navbar navbar-expand-lg navbar-dark container-fluid fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand brand-name navbar-expand" href="#">BUTWAL BIKE RENTALS</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
             <Link to="/vehicles" className="nav-link">Vehicles</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Why Us?</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Date: {todayDate()}</a>
            </li>
            <li className="nav-item">
            <Link to="/login" className="nav-link">Admin Login</Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
            </li> */}
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>s
</div>

    )
}
function todayDate(){
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  
  today = mm + '/' + dd + '/' + yyyy;
  return today;
}
export default Navbar;