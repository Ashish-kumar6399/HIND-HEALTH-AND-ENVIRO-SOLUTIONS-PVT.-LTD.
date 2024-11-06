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
                  href="https://www.instagram.com/hhespvtltd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </div>
              <div id="icons-footer2">
                <Link
                  href="https://www.facebook.com/profile.php?id=61565605417057"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-square-facebook"></i>
                </Link>
              </div>
              <div id="icons-footer3">
                <Link
                  href="https://g.co/kgs/Udp9Rdd/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <i className="fa-brands fa-google"></i>
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
            <h4 className="fw-bolder working text-white pb-0">Quick Links </h4>
            {/* <Link className="text-decoration-none fw-bolder " href='/home'><p className="">Home</p></Link> */}
            <Link className="text-decoration-none fw-bolder mb-0" href='/about'><p className="mb-2" >About Us</p></Link>
            <Link className="text-decoration-none fw-bolder" href=''><p className="mb-2" >Products</p  ></Link>
            <Link className="text-decoration-none fw-bolder" href='products'><p className="mb-2"> Rental</p></Link>
            <Link className="text-decoration-none fw-bolder" href='client'><p className="mb-2">Clientele</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='/Toilet-Cabin'><p className="mb-2">Toilet-Cabin</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='/Mobile_trolley'><p className="mb-2">Mobile trolley</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='/Biogas'><p className="mb-2">Biogas Storage Tank</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='Two-Seater-Toilet-Cabin'><p className="mb-2">Two-Seater-Toilet-Cabin</p></Link>
            <Link className="text-decoration-none fw-bolder text-white" href='Single-Seater-Portable-Toilet-Cabin'><p className="mb-2">Single-Seater-Portable-Toilet-Cabin</p></Link>
          </div>

          <div className="footer-3 col-12 col-md-6 col-lg-4" style={{marginTop:"2rem"}}>
            <h4 className="fw-bolder text-white">Find Us Here</h4>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112023.95043381833!2d76.90930909726558!3d28.667249699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05aa6aaaaaab%3A0xbbb0a7d980421f15!2sHHES-%20Mobile%20Toilet%20Manufacture%2C%20Portable%20Toilet%20Manufacturer%2C%20FRP%20Toilet%20Manufacturer!5e0!3m2!1sen!2sin!4v1730543898886!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
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
              className="text-decoration-none "
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
