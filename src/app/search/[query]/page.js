"use client";
import { useSearchParams } from 'next/navigation'; 
import Link from 'next/link';
import Product from '../../../Data'; 
import '../../../Styles/Products.css';


import { getSlug } from '../../../utils'; 
import { useEffect, useState } from 'react';

const SearchPage = ({params}) => {
  const query = params.query; 

  // Filter the data based on the query
  const filteredData = query
    ? Product.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

    const [isDownloadTriggered, setIsDownloadTriggered] = useState(false);

    // Function to trigger the download
    const handleDownload = () => {
      setIsDownloadTriggered(true);
    };
  
    useEffect(() => {
      if (isDownloadTriggered && typeof window !== 'undefined') {
        const link = document.createElement('a');
        link.href = '/image/new_pdf.pdf'; // Specify the URL for your PDF
        link.download = 'new_pdf.pdf'; // The name the downloaded file should have
        document.body.appendChild(link);
        link.click(); // Programmatically click the link to trigger the download
        document.body.removeChild(link); // Clean up
  
        // Reset the state to avoid repeated downloads
        setIsDownloadTriggered(false);
      }
    }, [isDownloadTriggered]);

  return (
    <div>
      {/* Check if there are any results */}
      {filteredData.length > 0 ? (
        <div>
          <div className="products container">
            <h1>Explore Our Full Range of Products</h1>
            <p>All products are meticulously crafted by our expert team in our state-of-the-art facility in India.</p>
            <button className="download-catalogue" onClick={handleDownload}>
              Download Catalogue
            </button>
            <div className="products-main row gap-3 mx-auto justify-content-center">
              {/* Apply gap between cards */}
              {filteredData.map((e, index) => (
                <div key={index} className="shadow col-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                  <Link href={`/product/${getSlug(e.name)}`} style={{ textDecoration: 'none' }}>
                    <img src={e.img} alt="product/image" className="img-fluid" />
                    <h2>{e.name}</h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchPage;
