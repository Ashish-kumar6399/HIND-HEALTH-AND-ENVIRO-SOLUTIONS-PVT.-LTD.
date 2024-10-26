"use client";
import React, { useEffect, useState } from "react";
import "../../../Styles/Product.css";
import tourData from "../../../Data";
import { getName } from "../../../utils";
import Link from "next/link";

const Product = ({ params }) => {
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
              <h3>Features</h3>
              <ul>
                <li>{single.features2}</li>
                <li>{single.features1}</li>
                <li>{single.feature3}</li>
              </ul>
            </p>

           

            <Link href="/form">
              <button className="product-btn2">Request Quote</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
      <h4 className="p-0 m-0">Technical Specifications</h4>
      </div>

      <div className="container"> 
           <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <strong>{single.Wheel }/{single.Compartment}</strong>
                    
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                 <strong>{  single.Tank }/{single.Brand}</strong> 

                    
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
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
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                  <strong>{  single.Built }/{single.Wall}</strong>

                   
                  </div>
                </div>
              </div>
            </div></div>
    </div>
  );
};

export default Product;
