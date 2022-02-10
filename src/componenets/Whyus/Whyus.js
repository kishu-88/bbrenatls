import react from "react";
import Map from "../Map";
import Footer from "../Footer/Footer";
import nosecurity from '../../assets/nosecurity.gif';
import doortodoor from '../../assets/doortodoor.gif';
import garage from '../../assets/garage.gif';
import customer from '../../assets/customer.gif';
import './Whyus.css'

// import doortodoor from './logo.png';
// import garage from './logo.png';
// import customer from './logo.png';
function Whyus(){
    return (
        <div className="">
             <div className="whyussection container">
        <div className="whyus mt-2">Why Us?</div>
        <div className="row mt-1 whyuscards">
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">No Security Deposit</h5>
                <img src={nosecurity} className="card-img-top" alt="..." />
                <p className="card-text">
                  Customers dont have to deposit security amount. They have to
                  provide their original document.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Door to Door Delivery</h5>
                <img src={doortodoor} className="card-img-top" alt="..." />
                <p className="card-text">
                  In case you are not able to reach at our office, we can bring a bike at your location without you having to pay extra fee.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Own Garage availability</h5>
                <img src={garage} className="card-img-top" alt="..." />
                <p className="card-text">
                  We have our own garage available.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Good Customer Reviews</h5>
                <img src={customer} className="card-img-top" alt="..." />
                <p className="card-text">
                  We have some of the most loyal customers and have received
                  very good feedbacks from our customers.
                </p>
              </div>
            </div>
          </div>
          <Map/>
        <Footer/>
        </div>
      </div>
        </div>
    )
}
export default Whyus;