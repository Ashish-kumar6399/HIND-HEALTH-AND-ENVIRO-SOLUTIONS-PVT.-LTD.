import React from 'react';
import '../Styles/WorkingHours.css';
import Link from 'next/link';

const WorkingHours = () => {
  return (
    <div className=''>
      <div className='working container'>
        {/* <h1 className='working-head'>Contact Us</h1> */}
        <div className='d-flex flex-row flex-wrap'>
          <div className='working-1'>
            <img className=''
              src={'/image/img/contact.png'}
              alt='img/work'
            />
          </div>
          <div className='working-2'>
          <h1 className="fw-bolder working text-white">Services </h1>

           <Link className="text-decoration-none fw-bolder text-white" href='/Toilet-Cabin'><p>Toilet-Cabin</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='/Mobile_trolley'><p>Mobile_trolley</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='/Biogas'><p>Biogas Storage Tank</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='Two-Seater-Toilet-Cabin'><p>Two-Seater-Toilet-Cabin</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='Single-Seater-Portable-Toilet-Cabin'><p>Single-Seater-Portable-Toilet-Cabin</p></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingHours;
