"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../Styles/Form.css';

const Form = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    address: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(formData.mobile)) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
    }

    return true; // Validation successful
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const emailBody = `
        <p>Name: ${formData.name}</p>
        <p>Phone: ${formData.mobile}</p>
        <p>Email: ${formData.email}</p>
        <p>Company: ${formData.company}</p>
        <p>Address: ${formData.address}</p>
        <p>Message: ${formData.message}</p>
      `;
  
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile,
            email: formData.email,
            company: formData.company,
            address: formData.address,
            message: formData.message,
            emailBody: emailBody, // Optional: if you need to pass the body
          }),
        });
  
        const result = await response.json();
  
        if (response.ok && result.success) {
          alert('Email sent successfully!');
          setTimeout(() => {
            router.push('/thankyou'); // Redirect to thank you page
          }, 1000);
        } else {
          alert('Failed to send email. Please try again.');
        }
      } catch (error) {
        alert('An error occurred: ' + error.message);
      }
    }
  };
  

  return (
    <div className='contact-form col-12 col-md-12 text-center container'>
      <div className='contact-form-1'>
        <p className='contact-details-p'>GET IN TOUCH –</p>
        <h2 className='contact-details-h2'>Support Is Online</h2>
        <form className='contact-form' onSubmit={handleSubmit}>
          <div className='form-row'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              required
              className='form-input'
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type='email'
              name='email'
              required
              placeholder='Email Id'
              className='form-input unique'
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-row'>
            <input
              type='tel'
              name='mobile'
              placeholder='Mobile Number'
              required
              className='form-input'
              value={formData.mobile}
              onChange={handleInputChange}
            />
            <input
              type='text'
              name='company'
              placeholder='Company Name'
              required
              className='form-input unique'
              value={formData.company}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-row'>
            <input
              type='text'
              name='address'
              placeholder='Address'
              className='form-input'
              required
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-row'>
            <textarea
              name='message'
              placeholder='Message'
              className='form-input message-input'
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type='submit' className='submit-button'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
