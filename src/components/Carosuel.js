"use client";
import React from "react";
import Image from "next/image";
import '../Styles/Carousel.css';

import { Carousel as BootstrapCarousel } from "bootstrap";
import image1 from "../../public/image/img/demo.jpg";
import image2 from "../../public/image/img/banner2.jpg";
import image3 from "../../public/image/img/banner3.jpg";
import image4 from "../../public/image/img/banner4.jpg";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* First Slide */}
          <div className="carousel-item active">
            <Image className=" carousel-image " src={image1}  alt="Image 1" layout="" />
          </div>
          {/* Fourth Slide */}

          <div className="carousel-item">
            <Image  className=" carousel-image " src={image4} alt="Image 1" layout="" />
          </div>

          <div className="carousel-item">
          <Image  className=" carousel-image " src={image3} alt="Image 1" layout="" />

          </div>

          <div className="carousel-item">
          <Image  className=" carousel-image " src={image2} alt="Image 1" layout="" />

          </div>

          
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
