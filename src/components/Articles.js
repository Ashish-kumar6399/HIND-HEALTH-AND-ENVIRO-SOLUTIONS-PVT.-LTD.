import React from 'react';
// import img1 from "/image/Anaesthetic Gas Scavenging System.png"
// import img2 from "/image/Medical Oxygen Flowmeter.png"
// import img3 from "/image/Operation Theatre Control Panel Surgeon Control Panel (Touch Screen).png"

import '../Styles/Articles.css';
import Articlesdiv from './Articlesdiv';

const Articles = () => {
  return (
    <div className='pb-5'>
      <div className='articles-upper'>
        <h1 className='fw-bold'>
          Latest  Articles <span style={{ color: '#1995ad' }}></span>
        </h1>
        <p>Read all the latest information from M.R. Engg. Works</p>
      </div>


     
      
      <Articlesdiv/>
    </div>
  );
};

export default Articles;