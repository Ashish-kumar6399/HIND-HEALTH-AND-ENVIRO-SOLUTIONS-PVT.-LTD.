"use client";
import React from "react";
import "../Styles/PlantRoom.css";
import Link from "next/link";

const PlantRoom = () => {
  return (
    <div className="container ">
      <div className="Plant-Room row">
        <div className="Plant-Room-img col-12 col-md-6">
          <img
            src={"image/img/Ten Seater Mobile Toilet.webp"}
            alt="img/photo"
          />
        </div>
        <div className="Plant-Room-content col-12 col-md-6">
          <h2 className="mt-4 mb-3  ps-5" style={{color:"#0092ed"}}>
            Mobile Toilet Trolley
            <br />
          </h2>
          <p className="content-p">
            Our company offers various types of Mobile Toilet Trolley that are
            available in multi-seater designs up to 10 cabins. These units are
            commonly used on constructional sites, slums and various other
            areas. They are equipped with water supply as well as lighting
            systems. The cabin walls are fabricated by using premium grade
            materials that make them capable to resist harsh climatic conditions
            which results in longer service life. Mobile Toilet Trolley availed
            by us are also provided with water storage tanks. 
          </p>
          <div className="Plant-Room-check">
            <div className="check-1">
              <p>
                <i className="fa-solid fa-circle-check "></i> Premium Quality
              </p>
              <p> <i className="fa-solid fa-circle-check "></i>  Low Maintenance Cost </p>
            </div>
            <div className="check-2">
              <p> <i className="fa-solid fa-circle-check "></i>   High Durability </p>
              <p>
                <i className="fa-solid fa-circle-check "></i> Latest Technology
              </p>
            </div>
          </div>
          <Link href="/products">
            <div id="main_div_catt">
              <button
                className="btn_main_div_catt text-center"
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open("/image/new_pdf.pdf", "_blank");
                  }
                }}
              >
                View catalogue →
              </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlantRoom;
