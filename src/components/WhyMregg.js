import React from "react";
import "../Styles/WhyMregg.css";
import Certificates from "./Certificates";

const WhyMregg = () => {
  return (
    <div className="why-mregg container">
      <div className="why-mregg-upper row">
        <h3 className="fw-bolder">Why Choose Us?</h3>
        <div className="text-details col-12">
          <p>
            <span className="bold-details">
              Hind Health And Enviro Solution Private Limited
            </span>{" "}
            Founded in 2011, Hind Health & Enviro Solutions Pvt. Ltd. is a leading manufacturer focused on transforming sanitation solutions. With a strong commitment to environmental sustainability and public health, we specialize in producing advanced Mobile Toilet Vans, Portable Toilet Cabins, Bio Digester Tanks, and VIP Cabins.{" "}
            <br/>
          </p>
          <p>Our Mobile Toilet Vans are built for easy mobility, making them ideal for outdoor events, construction sites, and emergency relief efforts. They offer a clean and convenient restroom solution wherever it's required.          </p>
          
          <p>
          Our Portable Toilet Cabins provide flexible and efficient sanitation solutions, making them ideal for remote locations and temporary setups. Built with durability and comfort, they maintain the high standards of quality we uphold.
          </p>
          <p>
          Central to our mission is the Bio Digester Tank, an innovative solution for organic waste management. Utilizing advanced technology, these tanks effectively break down waste, reducing environmental impact and fostering sustainability.
          </p>
        </div>

      </div>
    </div>
  );
};

export default WhyMregg;
