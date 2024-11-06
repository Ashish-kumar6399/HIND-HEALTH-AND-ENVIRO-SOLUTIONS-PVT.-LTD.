"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/Testimonial.css";
// import "../../style/Cards.css";
function Testimonial() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
    },
    tablet1: {
      breakpoint: { max: 1230, min: 930 },
      items: 3,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 930, min: 650 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="testimonial  ">
        <div className="testimonial_main_div pb-5">
          <h2 className="fw-bold text-center pt-5">What our clients says</h2>
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerclassName="carousel-container"
            removeArrowOnDeviceType={["tablet", ""]}
            //   deviceType={this.props.deviceType}
            dotListclassName="custom-dot-list-style"
            itemclassName="carousel-item-padding-40-px"
          >
            <div
              className="card border border-dark ml-4 mt-4  main_div_testim"
              style={{ width: "300px", height: "100%", margin: "0 auto" }}
            >
              <div
                className="card-body"
                id="card_body_new"
                style={{ padding: "16px" }}
              >
                <h5
                  className="card-title mt-3 fw-bolder"
                  style={{ textAlign: "center" }}
                >
                  Mr Bhardwaj
                </h5>
                <div
                  className="star_div mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>{" "}
                </div>
                <p className="card-text" style={{ textAlign: "center" }}>
                  " Hind Health & Enviro Solutions Pvt. Ltd." " delivered
                  exceptional quality with their Portable Toilet Cabin. It was
                  clean, spacious, and well-equipped, exceeding our
                  expectations. Their team's professionalism and timely service
                  were impressive. Highly recommend their products for any
                  sanitation requirements."
                </p>
              </div>
            </div>

            <div
              className="card border border-dark mt-4  main_div_testim"
              style={{ width: "300px", height: "100%", margin: "0 auto" }}
            >
              <div
                className="card-body rounded"
                id="card_body_new"
                style={{ padding: "16px" }}
              >
                <h5 className="card-title mt-3 fw-bolder text-center">Mr. Agarwal</h5>
                <div
                  className="star_div mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>{" "}
                </div>
                <p className="card-text " style={{ textAlign: "center" }}>
                  " Hind Health & Enviro Solutions Pvt. Ltd." " delivered
                  exceptional quality with their Portable Toilet Cabin. It was
                  clean, spacious, and well-equipped, exceeding our
                  expectations. Their team's professionalism and timely service
                  were impressive. Highly recommend their products for any
                  sanitation requirements."
                </p>
              </div>
            </div>

            <div
              className="card border border-dark mt-4  main_div_testim"
              style={{ width: "300px", height: "100%", margin: "0 auto" }}
            >
              <div
                className="card-body"
                id="card_body_new"
                style={{ padding: "16px" }}
              >
                <h5
                  className="card-title mt-3 fw-bolder"
                  style={{ textAlign: "center" }}
                >
                  Mr. Dubey
                </h5>
                <div
                  className="star_div mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>{" "}
                </div>
                <p className="card-text " style={{ textAlign: "center" }}>
                  " Hind Health & Enviro Solutions Pvt. Ltd." delivered an
                  exemplary VIP Cabin, surpassing our expectations. The cabin's
                  luxurious amenities and impeccable design added a touch of
                  elegance to our event. Their team's professionalism and
                  attention to detail were commendable. Highly recommend their
                  VIP cabins for premium sanitation solutions.
                </p>
              </div>
            </div>

            <div
              className="card border border-dark mt-4  main_div_testim"
              style={{ width: "300px", height: "100%", margin: "0 auto" }}
            >
              <div
                className="card-body"
                id="card_body_new"
                style={{ padding: "16px" }}
              >
                <h5
                  className="card-title mt-3 fw-bolder"
                  style={{ textAlign: "center" }}
                >
                  Mr. Singh
                </h5>
                <div
                  className="star_div mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>{" "}
                </div>
                <p className="card-text" style={{ textAlign: "center" }}>
                   "Hind Health & Enviro Solutions Pvt. Ltd." " delivered an
                  exemplary VIP Cabin, surpassing our expectations. The cabin's
                  luxurious amenities and impeccable design added a touch of
                  elegance to our event. Their team's professionalism and
                  attention to detail were commendable. Highly recommend their
                  VIP cabins for premium sanitation solutions."
                </p>
              </div>
            </div>

            <div
              className="card border border-dark mt-4  main_div_testim"
              style={{ width: "300px", height: "100%", margin: "0 auto" }}
            >
              <div
                className="card-body"
                id="card_body_new"
                style={{ padding: "16px" }}
              >
                <h5
                  className="card-title mt-3 fw-bolder"
                  style={{ textAlign: "center" }}
                >
                  Komal Singh
                </h5>
                <div
                  className="star_div mb-3"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>{" "}
                </div>
                <p className="card-text" style={{ textAlign: "center" }}>
                  "I recently utilized the Portable Toilet Cabin from Hind
                  Health & Enviro Solutions Pvt. Ltd., and I was thoroughly
                  impressed. The cabin was not only spotlessly clean but also
                  spacious and well-equipped, making it a fantastic choice for
                  our needs. "
                </p>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default Testimonial;
