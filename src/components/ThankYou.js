"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router'; 
import '../Styles/ThankYou.css'; 
 
const ThankYou = () => {
  const router = useRouter();  
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 4000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="thankyou-container">
      <div className="thankyou-content">
        <h1 className="thankyou-title">THANK YOU!</h1>
        <p className="thankyou-message">Thanks for getting in touch! We appreciate you contacting us. We will get back to you shortly.</p>
        <i className="fa fa-check thankyou-icon"></i>
      </div>
    </div>
  );
};

export default ThankYou;
