"use client";
import React from "react";
import "../Styles/AboutUs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Aboutusowl() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container p-0">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["desktop"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="about-us-card-1 ">
            <i className="fa-solid fa-hourglass-half about-us-icon"></i>
            <h2>Established in 2011</h2>
            <p>
              The company is now entering its 13th year and is proud of its
              growth and extended reputation as a major player in the worldwide
              family of Mobile Toilet Vans, Portable Toilet Cabins, Bio Digester
              Tanks, and VIP Cabins..
            </p>
          </div>

          <div className="about-us-card-1 ">
            <i className="fa-solid fa-earth-americas about-us-icon"></i>
            <h2>Nationwide Presence</h2>
            <p>
              Based in New Delhi, we supply 100% of the Indian market, offering
              our products and services across Delhi, Uttar Pradesh, and
              Gujarat. Our growth is focused on meeting the needs of customers
              throughout India.
            </p>
          </div>

          <div className="about-us-card-1 ">
            <i className="fa-solid fa-trademark about-us-icon"></i>
            <h2>Our Brand</h2>
            <p>
              The Hind Health And Enviro Solution Private Limited Works brand is a proudly owned trademark of Hind Health And Enviro Solution Private Limited Works products are distinctly
              marked with this brand name, reflecting our commitment to
              exceptional design and quality.
            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Aboutusowl;
