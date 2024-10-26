import React from 'react'
import "../Styles/Certified.css"
// import img1 from "../image/certificate1.webp"
// import img2 from "../image/certificate2.webp"
// import img3 from "../image/certificate3.webp"
import Certifiedowl from './Certifiedowl';

const Certified=()=> {
    return (
        <div>
            <div className="certified container">
                <h1>Certified Excellence in Quality and Professionalism</h1>
                <p className='certified_para'>We are an ISO 9001:2015 certified company, complying with the Medical Device Quality 
                            Management System (QMS) ISO 13485:2016 standards. Our products also meet International 
                            Quality Standards (IQS) and are CE certified. We cater to the needs of medical colleges, 
                            hospitals, and nursing homes across India. Furthermore, our products are well-represented in 
                            dealer networks throughout various Indian states, including Bangalore, Delhi, Hyderabad, 
                            Kerala, Maharashtra, Mumbai, Madhya Pradesh, Orissa, Punjab, Uttar Pradesh, and Tamil Nadu.</p>
                
                
                {/* <div className='certified-card row'>

                    <div className='certified-card-1 shadow'>
                        <div><i class="fa-regular fa-star"></i></div>
                        <div>
                            <h1>A QUALITY MANAGEMENT SYSTEM</h1>
                            <p className='certified_para' >M.R. Engg. Works adheres to a rigorous Quality Management System that meets the standards of ISO 9001 and ISO 13485. This commitment ensures that all our products and services adhere to the highest quality and regulatory requirements.</p>
                        </div>
                    </div>



                    <div className='certified-card-1 shadow'>
                        <div><i class="fa-solid fa-magnifying-glass"></i></div>
                        <div>
                            <h1>A TEAM OF EXPERTS</h1>
                            <p className='certified_para'  >M.R. Engg. Works boasts a dedicated team of experts committed to delivering exceptional service and upholding the highest standards of quality in all our products and solutions.</p>
                        </div>
                    </div>


                    <div className='certified-card-1 shadow'>
                        <div><i class="fa-solid fa-medal"></i></div>
                        <div>
                            <h1>A TRUSTED PARTNERSHIP</h1>
                            <p className='certified_para'  >
                                Certainly! Here’s a more polished version:

                                M.R. Engg. Works is a trusted partner for medical device suppliers throughout India, having established a close collaboration with Precision India since 2010.</p>
                        </div>
                    </div>



                    <div className='certified-card-1 shadow'>
                        <div><i class="fa-solid fa-circle-check"></i></div>
                        <div>
                            <h1>A TRUSTED REPONDER</h1>
                            <p className='certified_para'  >M.R. Engg. Works is supported by a dedicated team of experts who are committed to delivering exceptional service and maintaining the highest standards of quality in every aspect of our operations.</p>
                        </div>
                    </div>



                </div> */}
                <Certifiedowl/>
            </div>
        </div>
    )
}

export default Certified
