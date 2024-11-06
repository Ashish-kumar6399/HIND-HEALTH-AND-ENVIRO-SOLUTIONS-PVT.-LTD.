"use client";
import React from "react";
import "../Styles/AboutUs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Vision() {
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
      <div className="container mt-3 mb-3 p-0">
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
          containerclassName="carousel-container"
          removeArrowOnDeviceType={["desktop"]}
          // deviceType={this.props.deviceType}
          dotListclassName="custom-dot-list-style"
          itemclassName="carousel-item-padding-40-px"
        >
          <div className="about-us-card-1 ">
          <i className="fa fa-bullseye" ></i> 
          <h2>Our Vision</h2>

            <p>
            Our vision is to lead the market by offering a comprehensive range of high-quality toilet cabins and dustbins. We focus on providing durable, well-designed products that cater to diverse needs while continually expanding our selection to stay aligned with market demands.            </p>
          </div>

          <div className="about-us-card-1 ">
          <i className="fa-solid fa-people-group"></i> 
          <h2>Our Team</h2>
            <p>
            Our dedicated team of experts is focused on delivering sustainable sanitation and waste management solutions. We prioritize innovation, quality, and environmental responsibility, offering products that enhance public health and support eco-friendly practices in waste management.            </p>
          </div>

          <div className="about-us-card-1 ">
          <i className="fa fa-eye" aria-hidden="true"></i> 
          <h2>Our Mission</h2>
            <p>
            Our goal is to offer effective and dependable waste management solutions at affordable rates. We are committed to balancing quality with cost-efficiency, ensuring that our solutions are accessible while delivering reliable results for sustainable waste management.

            </p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Vision;
