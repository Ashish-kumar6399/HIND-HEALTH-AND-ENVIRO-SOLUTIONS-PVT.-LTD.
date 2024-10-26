import React from 'react';
import '../Styles/Committed.css';

const Committed = () => {
  return (
    <div>
      <div className='committed container'>
        <h2>We are committed to sustainability</h2>
        <h4 className='certified_para'  >
        To be the best-performing and leading manufacturer, 
supplier, service provider, and technology consultant 
of Medical Gas Pipeline Systems (MGPS) globally, as 
determined by our customers, employees, suppliers, 
and the medical infra sector in which we operate.
        </h4>
        <div className='committed-card row '>
          <div className=' col-12 col-md-6'>
            <p className='certified_para'  >
            We are dedicated to creating innovative, well-equipped 
medical equipment to provide the utmost care to each 
patient, making their experience more comfortable.
</p>
<p>
We develop our products using the latest technology to 
ensure sustainability and provide doctors with the tools 
they need to offer better patient care.
</p>
<p>
Our commitment to continuous improvement (KAIZEN) in quality 
performance drives us to achieve our mission and goals.
            </p>
          </div>
          <div className='col-12 col-md-6'>
            <div>
              <img
                src='https://www.precisionuk.co.uk/wp-content/uploads/2022/05/sustainabilitybooklet.png'
                alt='book/img'
                className='committed-2-img'
              />
            </div>
            <div>
              <button className='committed-2-button'>View our policy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committed;
