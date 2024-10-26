import React from "react";
import "../../Styles/BlogPage.css";

const BlogPage = () => {
  return (
    <>
       <div className='col-12 w-100 mb-4 container'>
            <div id='about-unique'>
                <div id='about-img' className="text-center">
                  <img src='/image/blog_about.webp' alt="about/image" id='about_us_div_change' className="about_imgg rounded" />
                </div>
                <div className="about-para">
                  <h1 className=" text-center mt-3 mb-3 fw-bolder" id="galary_head" style={{"color":"#1B9596"}}>Welcome to the Medical Gas Pipeline Blog</h1>
                  <p id='content-about-us-page'>
                  Dedicated to professionals in the medical Gas pipeline manufacturing industry and our blog provides comprehensive insights into pipeline systems. We explore the best practices in manufacturing, cutting-edge technological advancements, and important regulatory updates. Stay informed and ahead with our expert analysis and industry news.
                  </p>
                </div>

              </div>
          </div>

    <div className="blog-container">

      
      {/* Featured Articles Section */}
      <section id="articles" className="featured-articles">
        <h2 className="fw-bolder">Featured Articles</h2>
        <div className="articles-grid">
            <article className="featured-article">
              <img
                src='/image/blog1.webp'
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Critical Medical Gas Pipeline Systems</h3>
                <p>
                    Medical gas pipelines ensure the safe, continuous supply of essential gases like oxygen and nitrous oxide, supporting vital healthcare functions and patient care.
                </p>
              </div>
            </article>
            <article className="featured-article">
              <img
                src='/image/blog2.webp'
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Monitoring Critical Medical Gas Systems</h3>
                <p>
                    Technicians ensure the safe and continuous operation of medical gas systems, essential for delivering life-saving gases in hospitals. Regular maintenance and monitoring are crucial for system reliability.
                </p>
              </div>
            </article>
            <article className="featured-article">
              <img
                src={`https://www.ny-engineers.com/hs-fs/hubfs/medical%20gas%20piping.jpg?width=2939&name=medical%20gas%20piping.webp`}
                alt={`Article`}
                className="featured-imagee"
              />
              <div className="article-content">
                <h3>Oxygen Supply Systems in Healthcare</h3>
                <p>
                xygen delivery systems are critical for patient care, providing a reliable source of medical oxygen in hospitals and emergency settings. Proper maintenance ensures safe and effective oxygen flow during surgeries and treatments.
                </p>
              </div>
            </article>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section id="gallery" className="image-gallery">
        <h2 className="fw-bolder">Image Gallery</h2>
        <div className="gallery-grid">
            <div className="gallery-item">
              <img
                src='/image/Gallery1.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src='/image/Gallery2.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src='/image/Gallery3.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src='/image//galary_20img2.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src='/image/galary_20img1.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
            <div className="gallery-item">
              <img
                src='/image/gal.webp'
                alt={`Gallery Image`}
                className="gallery-image"
              />
            </div>
        </div>
      </section>    
    </div>
    </>
  );
};

export default BlogPage;
