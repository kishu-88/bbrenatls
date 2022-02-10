import react from "react";
function Map() {
  return (
    <div className="mapsection"> 
      <div className="findus">Find us</div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14139.438357728557!2d83.4872213!3d27.628865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9459cb9a0eb1b2fb!2sButwal%20Bike%20Rental%20Service!5e0!3m2!1sen!2snp!4v1643096362826!5m2!1sen!2snp"
          width="100%"
          height={400}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
}
export default Map;
