"use client";
import React, { useEffect, useState } from "react";
import "../../../Styles/Product.css";
import tourData from "../../../Data";
import { getName } from "../../../utils";
import Link from "next/link";
import { Placeholder } from "react-bootstrap";

const Product = ({ params }) => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: '',
    mobile: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const { id } = params;
  const [single, setSingle] = useState(null);
  useEffect(() => {
    if (id) {
      const product = tourData.find(
        (item) => item.name.toLowerCase() === getName(id).toLowerCase()
      );
      setSingle(product || {});
    }
  }, [id]);

  if (single === null) return <p>Loading...</p>;
  if (!single.name) return <p>Product not found.</p>;

  return (
    <div>
      <div className="product container">
        <div className="product-main row">
          <div className="product-image col-12 col-md-5">
            <img src={single.img} alt="product-image" className="single-img" />
          </div>
          <div className="product-details col-12 col-md-7">
            <h2 className="product-details-h2">{single.name}</h2>
            <p className="product-details-p">{single.Description}</p>
            <p>
              <h3 className="fw-bolder">Features</h3>
              <ul className="list-unstyled text-justify ">
                <li className=""> <span className="" style={{color:"#009eff",fontSize:"1.5rem"}}> ★</span> {single.features2}</li>
                <li> <span className="" style={{color:"#009eff",fontSize:"1.5rem"}}> ★ </span>{single.features1}</li>
                <li><span className="" style={{color:"#009eff",fontSize:"1.5rem"}}> ★ </span>{single.feature3}</li>
              </ul>
            </p>

           

            <a href="#form_new">
              <button className="product-btn2">Request Quote</button>
            </a>
          </div>
        </div>
      </div>

     
      < div >
      <div className="container">
      <div className="row">
        
        {/* Accordion Section */}
        <div className="col-md-6" >
        <div className="container">
      <h4 className="p-0 m-0  fw-bolder pt-1 " style={{fontSize:"1.5rem",color:"#009eff"}}>Technical Specifications</h4>
      </div>
          <div className="accordion" id="accordionExample" style={{ margin: "1rem" }}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  No of Wheel/No. Of Compartments
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{single.Wheel}/{single.Compartment}</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Tank Capacity/Brand
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{single.Tank}/{single.Brand}</strong>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Built Type/Wall Type
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <strong>{single.Built}/{single.Wall}</strong>
                </div>
              </div>
            </div>
          </div>
          <img className="d-none d-md-block" id='img_service' src={'/image/img/Ten Seater Mobile Toilet.webp'} alt='Card 1' style={{width:"35vw"}}  />


        </div>
        
        {/* Form Section */}

        <div className="col-md-6" id="form_new" style={{backgroundColor:"aliceblue"}}>
                    <diV className="container fw-bolder text-center pt-2" style={{fontSize:"1.5rem",color:"#009eff"}} > Contact Form</diV>

          <form onSubmit={handleSubmit} style={{ margin: "1rem" }}>
            <div className="mb-3">
              <label htmlFor="name "  className="form-label">Name</label>
              
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="service" className="form-label">Select a Service</label>
              <select
                className="form-select"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Choose...</option>
                <option value="Service 1">Service 1</option>
                <option value="Service 2">Service 2</option>
                <option value="Service 3">Service 3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">Mobile No.</label>
              <input
                type="tel"
                className="form-control"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Product;
