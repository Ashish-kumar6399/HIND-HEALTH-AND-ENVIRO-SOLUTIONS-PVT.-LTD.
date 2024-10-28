import React from 'react';
import '../Styles/WorkingHours.css';

const WorkingHours = () => {
  return (
    <div className=''>
      <div className='working container'>
        {/* <h1 className='working-head'>Contact Us</h1> */}
        <div className='d-flex flex-row flex-wrap'>
          <div className='working-1'>
            <img className=''
              src={'/image/contactUs.webp'}
              alt='img/work'
            />
          </div>
          <div className='working-2'>
          <h1 className="fw-bolder working text-white">Services </h1>
            <p>Toilet Cabins</p>
            <p>Mobile Toilet Van</p>
            <p>Biogas Storage Tank</p>
            <p>Mobile Toilet Trolley</p>
            <p>Two Seater Toilet Cabin</p>
            <p>Single Seater Portable Toilet Cabin</p>
            <p>Ten Seated Stainless Steel Wc Toilet</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
