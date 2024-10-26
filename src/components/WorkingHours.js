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
            <h1>Working Hours</h1>
            <p>Monday ————- 9.30 Am – 7.00Pm</p>
            <p>Tuesday ————-9.30 Am – 7.00Pm</p>
            <p>Wednesday ——–9.30 Am – 7.00Pm</p>
            <p>Thursday ———— 9.30 Am – 7.00Pm</p>
            <p>Friday —————9.30 Am – 7.00Pm</p>
            <p>Saturday ————9.30 Am – 7.00Pm</p>
            <p>Sunday ————– Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
