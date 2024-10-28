import React from "react";
import "../Styles/Footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container pt-4" >
      <div className="container" >
        <div className="row">
          <div className="footer-1 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder contact text-white">Contact Us</h4>
            <div className="d-flex">
              <div id="icons-footer1">
                <Link
                  href="https://www.instagram.com/mr_engg_works_pvt_ltd?igsh=MThhYmdmaHBlcmtsOA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </div>
              <div id="icons-footer2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61564068751410&mibextid=LQQJ4d"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
              </div>
              <div id="icons-footer3">
                <Link
                  href="https://www.linkedin.com/company/mr-engg-works-pvt-ltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </Link>
              </div>
            </div>
            <div>

               

              <h4 className="fw-bolder callus text-white">
                <i className="fa-solid fa-phone text-white"></i> Call Us
              </h4>
              <p>
                <a
                  href="tel:+919871076261"
                  className="text-white  text-decoration-none"
                >
                  +91-9871076261
                </a>
              </p>
              <p>
                <a
                  href="tel:+919289239251"
                  className="text-white  text-decoration-none"
                >
                  +91-9289239251
                </a>
              </p>
            </div>

            <h4 className="fw-bolder text-white">
              {" "}
              <i className="fa-solid fa-envelope text-white"></i> Email Us
            </h4>

            <p>
              <a
                href="mailto:hhespvtltd@yahoo.com"
                className="text-white   text-decoration-none"
              >
                hhespvtltd@yahoo.com{" "}
              </a>
            </p>

            <h4 className="fw-bolder text-white ">
              <i className="fa-solid fa-location-dot text-white"></i> Our
              Address
            </h4>
            <p className="text-white">E-3/270, Shiv Ram Park Nangloi, Near Peer Baba Mazar, New Delhi, Delhi -110041</p>
          </div>

          <div className="footer-2 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder working text-white">Services </h4>
            <p>Toilet Cabins</p>
            <p>Mobile Toilet Van</p>
            <p>Biogas Storage Tank</p>
            <p>Mobile Toilet Trolley</p>
            <p>Two Seater Toilet Cabin</p>
            <p>Single Seater Portable Toilet Cabin</p>
            <p>Ten Seated Stainless Steel Wc Toilet</p>
          </div>

          <div className="footer-3 col-12 col-md-6 col-lg-4">
            <h4 className="fw-bolder text-white">Find Us Here</h4>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30773392.078304354!2d61.028322527582496!3d19.69057626482709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0544cbdb57d5%3A0x87d354459ab5ee5!2sHind%20Health%20and%20Enviro%20SolutionsPvt.Ltd.!5e0!3m2!1sen!2sin!4v1729751422038!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
              width="100%"
              height="90%"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
           
          </div>
        </div>
      </div>
      {/* <hr className="border" /> */}
      <div className="pt-2" style={{"backgroundColor":"#d1d5db"}}> 
      <div className="container  kanak " style={{"backgroundColor":"#d1d5db"}}>
        <p className="  text-start kanak_first">
          {" "}
          © 2024 HIND HEALTH AND ENVIRO SOLUTIONS PVT. LTD. All rights reserved
        </p>
        <p className="  kanak_second">
          {" "}
          Designed and Developed by{" "}
          <span className="text-danger">
            {" "}
            <Link
              className="text-decoration-underlined "
              href="https://kanakdrishtiinfo.com/"
              target="blank"
            >
              Kanak Drishti Infotech
            </Link>{" "}
          </span>
        </p>
      </div>
      </div>
    </div>
  );
};

export default Footer;
