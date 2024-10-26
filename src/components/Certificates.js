'use client'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Styles/WhyMregg.css';

function Certificates() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 4 
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
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    
  <div >
    <img   className='img_ceri'   src={'/image/certi1.webp'}  alt='certificate' />
  </div>
  <div>    
    <img   className='img_ceri'  src={'/image/certi2.webp'}  alt='certificate' />

  </div>
  <div>   
     <img   className='img_ceri'  src={'/image/certi3.webp'}  alt='certificate' />

  </div>
  <div>   
     <img   className='img_ceri'  src={'/image/certi4.webp'}  alt='certificate' />

  </div>
  
</Carousel>
      
    </>
  )
}

export default Certificates;