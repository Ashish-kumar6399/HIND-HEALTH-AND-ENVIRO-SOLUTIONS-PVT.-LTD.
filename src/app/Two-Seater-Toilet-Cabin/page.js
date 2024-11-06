"use client";
import React from 'react';
import '../../Styles/Products.css';
import Link from 'next/link';
import Product from '../../Data'; 
import { getSlug } from '../../utils';

const Products = () => {
  // Filter for the Mobile Toilet Trolley subcategories
  const filteredProducts = Product.flatMap(product => 
    product.id === 20 ? product.subcategories : [] // Assuming the ID for Mobile Toilet Trolley is 1
  );

  return (
    <div>
      <div className='products'>
        <h1>Explore Our Mobile Toilet Trolley Products</h1>
        <p>All products are meticulously crafted by our expert team in our state-of-the-art facility in India.</p>
        
        <div className='products-main row gap-3 mx-auto justify-content-center'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((subcategory) => (
              <div
                key={subcategory.id} // Use subcategory ID as the key
                className='shadow flex col-md-6 col-lg-4 col-xl-3 mb-4'
              >
                <Link className='text-decoration-none' href={`/product/${getSlug(subcategory.name)}`} passHref>
                  <img
                    src={subcategory.img}
                    alt={subcategory.name} // Use subcategory name for alt text
                    className='img-fluid'
                  />
                  <h2>{subcategory.name}</h2>
                </Link>
              </div>
            ))
          ) : (
            <p>No products available in this category.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;