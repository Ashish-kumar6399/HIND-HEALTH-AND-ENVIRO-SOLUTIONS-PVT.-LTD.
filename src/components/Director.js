import React from 'react';
import '../Styles/Director.css';
const Director = () => {
  return (
    <div className='container'>
      <div className='director row'>
 <div className="leaders-container">
 <div className="leader-info text-center">
          <div>
          <h2 id='director-header-img'><span className='fw-bolder'> Our Leaders:</span><span className='fw-bold'>The Driving Force Behind Our Success</span> </h2>
          </div>
          <div>
          <p>
           <span className='fw-bolder'>  Mohinder Singh, Virender Singh, and Jasvinder Singh.</span> Their unwavering dedication, passion, and leadership have propelled M.R. Engg. Works Pvt Ltd to new heights. With a relentless focus on quality, innovation, and customer satisfaction, they foster a culture of excellence. Their expertise and guidance inspire our team to deliver exceptional results, driving our company's success. Under their direction, we continue to push boundaries, explore new opportunities, and strengthen our position as a leading industry name.
          </p>
          </div>
      </div>

      {/* Second Div */}
      <div className="directors">
      <div className="director-card">
          <img src={'/image/director.webp'} alt="Virender Singh" className="director-image" />
          <h3>Mohinder Singh</h3>
          <p>Director</p>
        </div>
        <div className="director-card">
          <img src={'/image/director1.webp'} alt="Jasvinder Singh" className="director-image" />
          <h3>Virender Singh</h3>
          <p>Director</p>
        </div>
        <div className="director-card">
          <img src={'/image/director2.webp'} alt="Virender Singh" className="director-image" />
          <h3>Jasvinder Singh</h3>
          <p>Director</p>
        </div>
        <div className="director-card">
              <video width="280" height="260" controls>
                <source src="/video/videoMR.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
      </div>
    </div>

        <div className='director-lower'>
          <p>
          In 1996, Mr. Singh founded a Delhi-based enterprise specializing in Medical Gas Pipeline Systems (MGPS). His commitment to stringent quality control ensured the consistent delivery of high-quality products.
          </p>
          <p>
          Mr. Singh’s strong principles and integrity have built lasting relationships with vendors worldwide. Today, M.R. Engg. Works Pvt. Ltd.’s MGPS products are highly regarded and widely sought after by corporates, government hospitals, and medical institutions both in India and internationally.
          </p>
          <p id='para_display'>
           Notably, BOC India Limited and other leading multinational corporations have included M.R. Engg. Works Pvt. Ltd. in their approved vendor lists.
          </p>
          <p id='para_display'>
            The notable acclaim and technological excellence of M.R. Engg. Works
            Pvt. Ltd. products are a direct reflection of Mr. Singh’s visionary
            leadership and innovative prowess.
          </p>
          <p>
          May S. Mohinder Singh enjoy a long, healthy life and continue to guide and influence the company for years to come.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Director;
