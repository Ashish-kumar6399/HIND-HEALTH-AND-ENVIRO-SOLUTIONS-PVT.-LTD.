"use client";
import React, { useState,useEffect } from 'react';
import '../../Styles/Products.css';
import Link from 'next/link';
import Product from '../../Data'; 
import { getSlug } from '../../utils';

const Products = () => {
  const [isDownloadTriggered, setIsDownloadTriggered] = useState(false);
  const handleDownload = () => {
    setIsDownloadTriggered(true);
  };

  useEffect(() => {
    if (isDownloadTriggered && typeof window !== 'undefined') {
      const link = document.createElement('a');
      link.href = '/image/new_pdf.pdf'; 
      link.download = 'new_pdf.pdf'; 
      document.body.appendChild(link);
      link.click(); 
      document.body.removeChild(link); 
      setIsDownloadTriggered(false);
    }
  }, [isDownloadTriggered]);

  return (
    <div>
      <div className='products '>
        <h1>Explore Our Full Range of Products</h1>
        <p>All products are meticulously crafted by our expert team in our state-of-the-art facility in India.</p>
        {/* <button className='download-catalogue' id='download' onClick={handleDownload}>
          Download Catalogue
        </button> */}
        <div className='products-main row gap-3 mx-auto justify-content-center'>
          {/* Apply gap between cards */}
          {Product.map((e, index) => (
            <div
              key={index}
              className='shadow flex col-md-6 col-lg-4 col-xl-3 mb-4'
            >
              <Link className='text-decoration-none' href={`/product/${getSlug(e.name)}`} passHref>
              {/* <Link className='text-decoration-none' href="/contact" passHref> */}

                <img
                  src={e.img}
                  alt='product/image'
                  className='img-fluid'
                />
                <h2  >{e.name}</h2>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
