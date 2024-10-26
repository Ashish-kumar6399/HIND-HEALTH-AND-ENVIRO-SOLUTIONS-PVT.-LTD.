'use client'
import React from 'react'
import '../Styles/Articles.css';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'

function Articlesdiv() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
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
    <div className='container'>
            <Carousel
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
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

              <div className='card cards mt-2' id='card_cards'>
                        <img  id='img_service'
                          src={'/image/Medical Oxygen Flowmeter.webp'}
                          alt='Card 1'
                        />
                        <div className='card-body'>
                          <h2>Medical Oxygen Flowmeter
                          </h2>
                          <p>
                          A Medical Oxygen Flowmeter regulates and measures oxygen flow to patients, ensuring accurate delivery.
                          </p>
                        </div>
                      </div>    
                      <div className='card cards mt-2' id='card_cards'>
                        <img  id='img_service'
                          src={'/image/Anaesthetic Gas Scavenging System.webp'}
                          alt='Card 1'
                        />
                        <div className='card-body'>
                          <h2>Anaesthetic Gas Scavenging System
                          </h2>
                          <p>
                          An Anaesthetic Gas Scavenging System (AGSS) removes waste anaesthetic gases from operating rooms, ensuring a safe environment by preventing exposure to healthcare staff.
                          </p>
                        </div>
                      </div>
                      <div className='card cards mt-2' id='card_cards'>
                        <img  id='img_service'
                          src={'/image/Operation Theatre Control Panel Surgeon Control Panel (Touch Screen).webp'} 
                          alt='Card 1'
                        />
                        <div className='card-body'>
                          <h2>Operation Theatre Control Panel</h2>
                          <p>
                          An Operation Theatre Control Panel monitors and controls key functions like lighting, temperature, and gas supply, creating an optimal surgical environment.</p>
                        </div>
                      </div>
              </Carousel>
              </div>
    </>
  )
}
export default Articlesdiv;