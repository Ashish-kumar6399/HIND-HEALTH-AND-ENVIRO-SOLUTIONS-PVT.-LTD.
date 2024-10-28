"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/WhyMregg.css";
import '../Styles/Service.css';
import Link from 'next/link';


function Servicescard() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <>
      <div className="container">
        <Carousel
           swipeable={true}
           draggable={true}
             showDots={true}
              responsive={responsive}
               ssr={true} // means to render carousel on server-side.
                infinite={true}
                      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                      autoPlaySpeed={1000}
                      keyBoardControl={true}
                      customTransition="all"
                      transitionDuration={500}
                      containerClass="carousel-container"
                      removeArrowOnDeviceType={["desktop"]}
                      // deviceType={this.props.deviceType}
                      dotListClass="custom-dot-list-style"
                      itemClass="carousel-item-padding-40-px" >
             
          <div className="card card_sevices  rounded">
          <img id='img_service' src={'/image/img/toilet cabins.webp'} alt='Card 1' />

            <div className="card-body">
            <h2>Toilet Cabin</h2>
            <p className='' id='para_colour'>
                A toilet cabin is a portable restroom designed for convenience and hygiene, offering a clean, private space for sanitation at events, construction sites, and outdoor festivals.                </p>
                <Link href='/products'>
                <button id='services-button'>Learn More →</button>
                </Link>
            </div>
          </div>
          <div className="card card_sevices rounded">
          <img id='img_service' src={'/image/img/ten seated.webp'} alt='Card 2' />

            <div className="card-body ">
            <h2>Ten Seated  Wc Toilet </h2>
            <p id='para_colour'>
                The Ten-Seated  Toilet is a durable, corrosion-resistant solution ideal for high-traffic areas. It offers multiple cabins with essential amenities for comfort and hygiene.                </p>

                <Link href='/products'>
                <button id='services-button'>Learn More →</button>
                </Link>
            </div>
          </div>
          <div className="card card_sevices">
          <img className="rounded-top" id='img_service' src={'/image/img/bio-digester-tank-500x500.png'} alt='Card 3' />

            <div className="card-body">
            <h2>Biogas Storage Tank</h2>
            <p id='para_colour'>
                The Biogas Storage Tank  for storing biogas produced from organic waste. It ensures safe storage and efficient gas utilization in various industrial and agricultural applications.                </p>
                
                <Link href='/products'>
                <button id='services-button'>Learn More →</button>
                </Link>
            </div>
          </div>
          <div className="card card_sevices ">
          <img id='img_service' src={'/image/img/mobile toilet van.webp'} alt='Card 3' />

            <div className="card-body">
              <h2 className="card-title">mobile toilet van</h2>
              <p className="card-text">
              A mobile toilet van offers  portable restrooms that  easily transported. It provides a practical sanitation  for events, construction sites and remote areas ensuring hygiene . 
                           </p>
              <Link href='/products'>
                <button id='services-button'>Learn More →</button>
                </Link>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Servicescard;
