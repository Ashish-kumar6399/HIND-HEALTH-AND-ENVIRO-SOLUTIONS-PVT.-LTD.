"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import "../Styles/Header.css";
import "../Styles/Hero.css";

const Hero = () => {
  const images = [
    // img
    "/image/img/Vip cabin.webp",
    "/image/img/2 Seater MS Toilet Cabin fRONT1.png",
    "/image/img/3 seater portable toilet cabin.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="container   " id="operation_div">
      <div className=" row d-flex  mr_flex">
        <div className="before-header-content  col-12 col-md-6">
          <h1 className="hero_section" id="hero_para">
            Hind Health And Enviro Solution Private Limited{" "}
            {/* <span style={{ color: '#2EA6F6' }}>   </span> */}
          </h1>
          <p className="content-p">
            We Hind Health And Enviro Solution Private Limited provide
            innovative sanitation and waste management solutions, including
            mobile toilet vans and wastewater dewatering services, to promote a
            cleaner and healthier environment.{" "}
            we are capable of fulfilling the diverse demand of clients according the need of size, shape and application. Also, we are offering Wastewater Dewatering Service to make the water reusable.
          </p>
          <Link href="/products">
            <button className="view-all-product" id="btn_before_header">
              View all products →
            </button>
          </Link>
        </div>
        <div className="before-header-img col-12 col-md-6 ">
          <img
            className="mb-2 "
            id="img_operation"
            src={images[currentImageIndex]}
            alt="img/photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
