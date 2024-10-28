'use client'
import React, { useRef } from 'react';
import '../Styles/Service.css';
import Link from 'next/link';
import Servicescard from './Servicescard';


const Service = () => {
  const cardContainerRef = useRef(null);

  const scrollLeft = () => {
    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth;

    if (container.scrollLeft === 0) {
      // If at the first image, jump to the last image with smooth scroll
      container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    const container = cardContainerRef.current;
    const scrollAmount = container.clientWidth;

    // Use a slightly reduced value to handle any floating point or minor padding issues
    if (Math.ceil(container.scrollLeft + container.clientWidth) >= container.scrollWidth) {
      // If at the last image, reset back to the first image smoothly
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className='services'>
        <h1 className=''>
          Our Service <span style={{ color: 'black' }}></span>
        </h1>
        <div className='ser-p container'>
          <p id='para_colour'>
           we are offering Mobile Toilet Vans, Toilet cabins, Dustbins etc, which help in proper collection & dumping of garbage and solid wastes. Facilitated with advanced machinery and upgraded technology, we are capable of fulfilling the diverse demand of clients according the need of size, shape and application.          </p>
        </div>
        <Servicescard/>

        {/* Service Card with Left and Right Controllers */}
        {/* <div className='card-wrapper'>
          <button id='scroll-button1' className='scroll-btn left' onClick={scrollLeft}>&lt;</button>
          <div className='card-container' ref={cardContainerRef}>
            <div className='card card_main mt-2'>
              <img id='img_service' src={'/image/img/toilet cabins.webp'} alt='Card 1' />
              <div className='card-body'>
                <h2>Toilet Cabin</h2>
                <p className='' id='para_colour'>
                A toilet cabin is a portable restroom designed for convenience and hygiene, offering a clean, private space for sanitation at events, construction sites, and outdoor festivals.                </p>
                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>              </div>
            </div>
            <div className='card card_main mt-2'>
              <img id='img_service' src={'/image/img/Ten Seated Stainless Steel Wc Toilet.webp'} alt='Card 2' />
              <div className='card-body'>
                <h2>Ten Seated  Wc Toilet </h2>
                <p id='para_colour'>
                The Ten-Seated  Toilet is a durable, corrosion-resistant solution ideal for high-traffic areas. It offers multiple cabins with essential amenities for comfort and hygiene.                </p>


                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>              </div>
            </div>
            <div className='card card_main mt-2'>
              <img id='img_service' src={'/image/img/Ten Seated Stainless Steel Wc Toilet.webp'} alt='Card 2' />
              <div className='card-body'>
                <h2>Ten Seated  Wc Toilet </h2>
                <p id='para_colour'>
                The Ten-Seated  Toilet is a durable, corrosion-resistant solution ideal for high-traffic areas. It offers multiple cabins with essential amenities for comfort and hygiene.                </p>


                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>              </div>
            </div>
            <div className='card card_main mt-2'>
              <img id='img_service' src={'/image/img/Biogas Storage Tank.webp'} alt='Card 3' />
              <div className='card-body'>
                <h2>Biogas Storage Tank</h2>
                <p id='para_colour'>
                The Biogas Storage Tank  for storing biogas produced from organic waste. It ensures safe storage and efficient gas utilization in various industrial and agricultural applications.                </p>
                <Link href='/products'>
                <button id='services-button'>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
          <button id='scroll-button2' className='scroll-btn right' onClick={scrollRight}>&gt;</button>
        </div> */}
      </div>
    </div>
  );
};

export default Service;