import React from 'react'
import '../../Styles/Exhibitions.css';

function Exhibitions() {
  return (
           <>
             <div className='container exhibitions rounded'>
             <h3 className=' container   text-white text-center'> EXHIBITIONS </h3>
            </div>

            <div className='text-center  event_div mt-5' >

              <img className='rounded' src='/image/event.webp' />
            </div>
              <div className='container mb-5 mt-5'>
               <div className="row row-cols-1 row-cols-md-3 g-4">
             <div className="col border-0">
            <div className="card border-0 h-100" id='card'>
         <img src='/image/exhibi_img1.webp' className="card-img-top" alt="Skyscrapers"/>
        <h5 className='text-center mt-3  fw-bold exhibi_head'>Exhibition 2019</h5>
     </div>
 </div>
     <div className="col border-0">
     <div className="card h-100 border-0" id='card'>
     <img src='/image/exhibi_img2.webp' className="card-img-top" alt="Los Angeles Skyscrapers"/>
     <h5 className='text-center mt-3  fw-bold exhibi_head'>Exhibition 2019</h5>
   </div>
    </div>
     <div className="col border-0">
    <div className="card h-100 border-0" id='card'>
    <img src='/image/exhibi_img3.webp'  className="card-img-top" alt="Palm Springs Road"/>
    <h5 className='text-center mt-3 fw-bold  exhibi_head'>Exhibition 2019</h5>
      </div>
   </div>
 </div>
  </div>
    <div className='container mb-5 mt-5'>
     <div className="row row-cols-1 row-cols-md-3 g-4">
     <div className="col border-0">
    <div className="card h-100 border-0">
     <img src='/image/exhibi_img4.webp' className="card-img-top" alt="Skyscrapers"/>                                                 <h5 className='text-center mt-3  fw-bold    exhibi_head'>Exhibition 2019</h5>
 </div>
 </div>
     <div className="col border-0">
     <div className="card h-100 border-0">
    <img src='/image/exhibi_img5.webp' className="card-img-top" alt="Los Angeles Skyscrapers"/>
     <h5 className='text-center mt-3  fw-bold exhibi_head'>Exhibition 2019</h5>
 </div>
</div>
    <div className="col border-0">
<div className="card h-100 border-0">
<img src='/image/exhibi_img6.webp'  className="card-img-top" alt="Palm Springs Road"/>
 <h5 className='text-center mt-3  fw-bold exhibi_head'>Exhibition 2019</h5>

 </div>
</div>
</div>

   </div>
 </>
  )
}

export default Exhibitions;
