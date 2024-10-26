"use client"
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Certifiedowl() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 3 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };
  return (
        <>
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
                        itemClass="carousel-item-padding-40-px" >
                        <div className='about-us-card-1 '>
                            <i className='fa-regular fa-star'></i>
                            <h2>A QUALITY MANAGEMENT SYSTEM</h2>
                            <p>
                            M.R. Engg. Works adheres to a rigorous Quality Management System that meets the standards of ISO 9001 and ISO 13485. This commitment ensures that all our products and services adhere to the highest quality and regulatory requirements.
                            </p>
                            </div>
                        
                            <div className='about-us-card-1 '>
              <i className='fa-solid fa-medal'></i>
              <h2>A TRUSTED PARTNERSHIP</h2>
              <p>
              Certainly! Here’s a more polished version:

M.R. Engg. Works is a trusted partner for medical device suppliers throughout India, having established a close collaboration with Precision India since 2010
              </p>
            </div>


            <div className='about-us-card-1 '>
              <i className='fa-solid fa-circle-check fa_circle_new'></i>
              <h2>A TRUSTED REPONDER</h2>
              <p>
              M.R. Engg. Works is supported by a dedicated team of experts who are committed to delivering exceptional service and maintaining the highest standards of quality in every aspect of our operations.              </p>
            </div>
                        
            <div className='about-us-card-1 '>
              <i className='fa-solid fa-magnifying-glass'></i>
              <h2>A TEAM OF EXPERTS</h2>
              <p>
              M.R. Engg. Works boasts a dedicated team of experts committed to delivering exceptional service and upholding the highest standards of quality in all our products and solutions.              </p>
            </div>

                        </Carousel>

                            </>
  )
}

export default Certifiedowl
