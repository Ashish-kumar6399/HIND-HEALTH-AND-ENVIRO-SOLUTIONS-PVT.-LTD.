import React from 'react';
import "../Styles/Visionmission.css";

const VisionMission = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:"#f5fcff"}}>
    <div className=" vision-mission-container container">
      <div className=" row">
        {/* Vision Section */}
        <div className="col-md-4">
          <div className="card card_icons vision-card">
            <div className="card-body text-center">
              <div className="icon">
              <i className="fa fa-bullseye" aria-hidden="true"></i> 
              </div>
              <h5 className="card-title">Our Vision</h5>
              <p className="card-text">
              To be the foremost entity in the market with a robust and wide range of Toilet Cabins and Dustbins.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="col-md-4">
          <div className="card card_icons mission-card">
            <div className="card-body text-center">
              <div className="icon">
              <i className="fa fa-eye" aria-hidden="true"></i> 
              </div>
              <h5 className="card-title">Our Mission</h5>
              <p className="card-text">
              To bring out an effective and reliable solution for waste management at reasonable rates.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card_icons mission-card">
            <div className="card-body text-center">
              <div className="icon">
              <i class="fa-solid fa-people-group"></i>              </div>
              <h5 className="card-title">Our Team</h5>
              <p className="card-text">
              Dedicated experts committed to sustainable sanitation and waste management solutions.    </p>        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default VisionMission;
