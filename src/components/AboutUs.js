import React from "react";
import "../Styles/AboutUs.css";
import Aboutusowl from "./Aboutusowl";

const AboutUs = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="about-us">
          <div className="col-12 w-100">
            <div id="about-unique">
              <div id="about-img">
                <img
                  src={"/image/img/3 seater portable toilet cabin.png"}
                  alt="about/image"
                  id="about_us_div_change" 
                />
              </div>
              <div>
                <h2>Hind Health And Enviro Solution Private Limited</h2>
                <p id="content-about-us-page">
                  Hind Health And Enviro Solution Private Limited Founded in
                  2011, Hind Health & Enviro Solutions Pvt. Ltd. is a leading
                  manufacturer focused on transforming sanitation solutions.
                  With a strong commitment to environmental sustainability and
                  public health, we specialize in producing advanced Mobile
                  Toilet Vans, Portable Toilet Cabins, Bio Digester Tanks, and
                  VIP Cabins.{" "}
                  <br />
                  Our Mobile Toilet Vans are built for easy mobility, making them ideal for outdoor events, construction sites, and emergency relief efforts. They offer a clean and convenient restroom solution wherever it's required.

                </p>
              </div>
            </div>
          </div>

          <div className="about-us-card"></div>
          <Aboutusowl />
        </div>
      </div>
    </div>
    
  );
};

export default AboutUs;
