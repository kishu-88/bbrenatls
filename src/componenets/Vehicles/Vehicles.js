import react from "react";
import './Vehicles.css';
import  '../Navbar';
import Navbar from "../Navbar";
import Footer from "../Footer/Footer";
import Bikeimg from "../../assets/vehicle_assets/bike.jpg"
import Scooterimg from "../../assets/vehicle_assets/scooter.png"
function Vehicle(){
    return(
      <div>
          <Navbar/>
          <div className="VehiclesBody">
        <div className="VehInf container">
          <h1 className="col-12 mt-5">Vehicle Information</h1>
        </div>
        <hr />
        <div className="container">
          {/* Start of first row */}
          <div className="row" id="ads">
            {/* Category Card */}
            <div className="col-md-3 col-6">
              <div className="card rounded bikecard">
              <div className="ad-title m-auto bikeTitle">
                    <h5>Bike 1</h5>
                  </div>
                <a href="bikeinfo.html">
                  
                  <div className="card-image">
                    <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                  </div></a>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>

                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card rounded bikecard">
                <a href="bikeinfo.html">
                  <div className="ad-title m-auto bikeTitle">
                    <h5>Bike 1</h5>
                  </div>
                  <div className="card-image">
                    <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                  </div></a>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>

                  </div>
              </div>
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
            </div>
            </div>
        </div>
        {/* end of first row */}
        <hr />
        {/* Start of Second row */}
        <div className="row" id="ads">
            {/* Category Card */}
            <div className="col-md-3 col-6">
              <div className="card rounded bikecard">
                <a href="bikeinfo.html">
                  <div className="ad-title m-auto bikeTitle">
                    <h5>Bike 1</h5>
                  </div>
                  <div className="card-image">
                    <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                  </div></a>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
</div>
              </div>
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Bikeimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="card rounded bikecard">
                <a href="bikeinfo.html">
                  <div className="ad-title m-auto bikeTitle">
                    <h5>Bike 1</h5>
                  </div>
                  <div className="card-image">
                    <img className="img-fluid" src={Scooterimg} alt="Alternate Text" />
                  </div></a>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>

                  </div>
              </div>
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Scooterimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
              
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Scooterimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
              
            </div>
            <div className="col-md-3 col-6 cardShadow">
              <div className="card rounded bikecard">
                <div className="ad-title m-auto bikeTitle">
                  <h5>Bike 2</h5>
                </div>
                <div className="card-image">
                  <img className="img-fluid" src={Scooterimg} alt="Alternate Text" />
                </div>
                <div className="card-body text-center bikeAval">
                  <p>Availability:<span className="availability"> Available</span></p>
                </div>
              </div>
              
            </div>
            </div>
            <div className="Vehiclefooter">
            <Footer/>
            </div>
        </div>
        </div>
    )
}
export default Vehicle;