import react from "react";
import facebook from "../../assets/icons/facebook.png";
import insta from "../../assets/icons/insta.png";
import phone from "../../assets/icons/phone.png";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
        <div className="footer-padding">
      <h2>Contact Us</h2>
      <div className="footer-clean">
        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-4 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <span>Bike Rental</span>
                  </li>
                  <li>
                    <span>Garage</span>
                  </li>
                  <li>
                    <span>Helmet House</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                </ul>
              </div>
              {/* <div className="col-sm-4 col-md-3 item">
                <h3>Careers</h3>
                <ul>
                  <li>
                    <a href="#">Job openings</a>
                  </li>
                  <li>
                    <a href="#">Employee success</a>
                  </li>
                  <li>
                    <a href="#">Benefits</a>
                  </li>
                </ul>
              </div> */}
              <div className="col-lg-3 item social">
                <a href="https://www.facebook.com/butwalbikerental">
                  <i className="icon ion-social-facebook"><img classname="social-icons" src= {facebook}></img></i>
                </a>
                <a href="https://www.instagram.com/butwal_bike_rentals/">
                  <i className="icon ion-social-insta"><img classname="social-icons" src= {insta}></img></i>
                </a>
                <a href="#">
                  <i className="icon ion-social-phone"><img classname="social-icons" src= {phone}></img></i>
                </a>
                {/* <a href="#">
                  <i className="icon ion-social-instagram"></i>
                </a> */}
                <p className="copyright">Butwal Bike Rental Pvt. Ltd © 2018</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
    </div>
  );
}
export default Footer;
