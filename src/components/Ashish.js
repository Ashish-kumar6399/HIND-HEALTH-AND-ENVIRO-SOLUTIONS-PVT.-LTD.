'use client'    
import React, { useRef, useState,useEffect } from 'react';
import '../Styles/Header.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer, Menu } from 'antd';
// import { IoIosLogOut } from 'react-icons/io';
// import Product from './Data.js'
import { getSlug } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// const Product = [
//   {
//     id: 1,
//     category: 'Electronics',
//     subcategories: [
//       { id: '1a', name: 'Mobiles' },
//       { id: '1b', name: 'Laptops' },
//     ],
//   },
//   {
//     id: 2,
//     category: 'Clothing',
//     subcategories: [
//       { id: '2a', name: 'Men' },
//       { id: '2b', name: 'Women' },
//     ],
//   },
// ];

// Menu items with routing
const items = [
  {
    key: 'sub0',
    label: <Link href='/' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Home</Link>,
  },
  {
    key: 'sub1',
    label: <span style={{ color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Product</span>,
    children: [
      {
        key: '1',
        label: <Link href='/product/1' style={{ textDecoration: 'none', color: '#1B9596' }}>Medical Gas Control & Auhrefmatic Changeover</Link>,
        children: [
          {
            key: '1-1',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>Semi Auhrefmatic Conrol Panel</Link>,
          },
          {
            key: '1-2',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>Fully Auhrefmatic Control Panel- Analog</Link>,
          },
          {
            key: '1-3',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>Fully Auhrefmatic Control Panel- Digital</Link>,
          },
          {
            key: '1-4',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>3 Source Fully Auhrefmatic Control Panel</Link>,
          },
          {
            key: '1-5',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>Fully Auhrefmatic Control Panel- hrefuch Screen</Link>,
          },
          {
            key: '1-6',
            label: <Link href={`/product/${getSlug("AGSS WAGD")}`} style={{ textDecoration: 'none', color: '#1B9596' }}>3 Source Fully Auhrefmatic Control Panel- hrefuch Screen</Link>,
          },
        ],
      },
      {
        key: '2',
        label: <Link href='/product/107' style={{ textDecoration: 'none', color: '#1B9596' }}>Cylinder Framr Header/ Manifold</Link>,
      },
      {
        key: '3',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Alarm System</Link>,
        children: [
          {
            key: '3-1',
            label: <Link href='/product/108' style={{ textDecoration: 'none', color: '#1B9596' }}>Digital Gas Alarm Systems</Link>,
          },
          {
            key: '3-2',
            label: <Link href='/product/109' style={{ textDecoration: 'none', color: '#1B9596' }}>LCD Alarm Alert-1 (Med hrefuch)</Link>,
          },
          {
            key: '3-3',
            label: <Link href='/product/110' style={{ textDecoration: 'none', color: '#1B9596' }}>Analog Gas Alarm Systems</Link>,
          },
          {
            key: '3-4',
            label: <Link href='/product/111' style={{ textDecoration: 'none', color: '#1B9596' }}>Master Alarm</Link>,
          },
        ],
      },
      {
        key: '4',
        label: <Link href='/product/112' style={{ textDecoration: 'none', color: '#1B9596' }}>Area Valve Service Unit</Link>,
      },
      {
        key: '5',
        label: <Link href='/product/113' style={{ textDecoration: 'none', color: '#1B9596' }}>Compact Multi Valve AVSU</Link>,
      },
      {
        key: '6',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Medical Gas Outlet</Link>,
        children: [
          {
            key: '6-1',
            label: <Link href='/product/114' style={{ textDecoration: 'none', color: '#1B9596' }}>British Standard Compatible (100% Metal) Nemo XP</Link>,
          },
          {
            key: '6-2',
            label: <Link href='/product/115' style={{ textDecoration: 'none', color: '#1B9596' }}>British Standard Compatible Nemo safe</Link>,
          },
          {
            key: '6-3',
            label: <Link href='/product/116' style={{ textDecoration: 'none', color: '#1B9596' }}>ISS Compatible</Link>,
          },
          {
            key: '6-4',
            label: <Link href='/product/117' style={{ textDecoration: 'none', color: '#1B9596' }}>British Standard Compatible (Gem 10)</Link>,
          },
          {
            key: '6-5',
            label: <Link href='/product/118' style={{ textDecoration: 'none', color: '#1B9596' }}>Puritan- Bennett Compatible</Link>,
          },
          {
            key: '6-6',
            label: <Link href='/product/119' style={{ textDecoration: 'none', color: '#1B9596' }}>Parkodex Compatible</Link>,
          },
          {
            key: '6-7',
            label: <Link href='/product/120' style={{ textDecoration: 'none', color: '#1B9596' }}>DIN Standard Compatible</Link>,
          },
          {
            key: '6-8',
            label: <Link href='/product/121' style={{ textDecoration: 'none', color: '#1B9596' }}>Ohmeda Standard Compatibl</Link>,
          },
        ],
      },
      {
        key: '7',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Accessories</Link>,
        children: [
          {
            key: '7-1',
            label: <Link href='/product/122' style={{ textDecoration: 'none', color: '#1B9596' }}>Regulahrefrs</Link>,
          },
          {
            key: '7-2',
            label: <Link href='/product/123' style={{ textDecoration: 'none', color: '#1B9596' }}>Plastic Shaddles & Clamps</Link>,
          },
          {
            key: '7-3',
            label: <Link href='/product/124' style={{ textDecoration: 'none', color: '#1B9596' }}>Isolation Ball Valve</Link>,
          },
          {
            key: '7-4',
            label: <Link href='/product/125' style={{ textDecoration: 'none', color: '#1B9596' }}>Medical Gas Accessories</Link>,
          },
          {
            key: '7-5',
            label: <Link href='/product/126' style={{ textDecoration: 'none', color: '#1B9596' }}>Pressure Gauges</Link>,
          },
          {
            key: '7-6',
            label: <Link href='/product/127' style={{ textDecoration: 'none', color: '#1B9596' }}>Baskets</Link>,
          },
          {
            key: '7-8',
            label: <Link href='/product/128' style={{ textDecoration: 'none', color: '#1B9596' }}>Flexible tail Pipe Connection</Link>,
          },
        ],
      },
      {
        key: '8',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Tubing for Medical Gases (Supply & Artificial Respiration)</Link>,
        children: [
          {
            key: '8-1',
            label: <Link href='/product/129' style={{ textDecoration: 'none', color: '#1B9596' }}>Oxygen</Link>,
          },
          {
            key: '8-2',
            label: <Link href='/product/130' style={{ textDecoration: 'none', color: '#1B9596' }}>Nitrous Oxide</Link>,
          },
          {
            key: '8-3',
            label: <Link href='/product/131' style={{ textDecoration: 'none', color: '#1B9596' }}>Medical Air</Link>,
          },
          {
            key: '8-4',
            label: <Link href='/product/132' style={{ textDecoration: 'none', color: '#1B9596' }}>Carbon Dioxide</Link>,
          },
          {
            key: '8-5',
            label: <Link href='/product/133' style={{ textDecoration: 'none', color: '#1B9596' }}>Vacuum/ Suction</Link>,
          },
          {
            key: '8-6',
            label: <Link href='/product/134' style={{ textDecoration: 'none', color: '#1B9596' }}>AGSS/WAGD</Link>,
          },
        ],
      },
      {
        key: '9',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Vacuum Regulahrefrs & Medical Suction Device</Link>,
        children: [
          {
            key: '9-1',
            label: <Link href='/product/135' style={{ textDecoration: 'none', color: '#1B9596' }}>Direct Mount or bed Head Panel & Pendants</Link>,
          },
          {
            key: '9-2',
            label: <Link href='/product/136' style={{ textDecoration: 'none', color: '#1B9596' }}>Reusable polycarbonate collection jar-1 L with Leak Proof self</Link>,
          },
          {
            key: '9-3',
            label: <Link href='/product/137' style={{ textDecoration: 'none', color: '#1B9596' }}>Direct Mount on wall Outlet & collection Jar on medical rail below patient body level</Link>,
          },
        ],
      },
      {
        key: '10',
        label: <Link href='/product/138' style={{ textDecoration: 'none', color: '#1B9596' }}>Theatre Suction trolley</Link>,
      },
      {
        key: '11',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Medical Oxygen Flow meter</Link>,
        children: [
          {
            key: '11-1',
            label: <Link href='/product/139' style={{ textDecoration: 'none', color: '#1B9596' }}>0-5 LPM</Link>,
          },
          {
            key: '11-2',
            label: <Link href='/product/140' style={{ textDecoration: 'none', color: '#1B9596' }}>0-15 LPM</Link>,
          },
          {
            key: '11-3',
            label: <Link href='/product/141' style={{ textDecoration: 'none', color: '#1B9596' }}>0-70 LPM</Link>,
          },
          {
            key: '11-4',
            label: <Link href='/product/142' style={{ textDecoration: 'none', color: '#1B9596' }}>Humidifier bottle</Link>,
          },
        ],
      },
      {
        key: '12',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Monihrefr Stand</Link>,
        children: [
          {
            key: '12-1',
            label: <Link href='/product/143' style={{ textDecoration: 'none', color: '#1B9596' }}>Monihrefr Stand Multi Movement</Link>,
          },
          {
            key: '12-2',
            label: <Link href='/product/144' style={{ textDecoration: 'none', color: '#1B9596' }}>Monihrefr Stand</Link>,
          },
        ],
      },
      {
        key: '13',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Cubical Curtain Track</Link>,
        children: [
          {
            key: '13-1',
            label: <Link href='/product/145' style={{ textDecoration: 'none', color: '#1B9596' }}>IV Hanger</Link>,
          },
        ],
      },
      {
        key: '14',
        label: <Link href='/product/146' style={{ textDecoration: 'none', color: '#1B9596' }}>Nurse Call System</Link>,
      },
      {
        key: '15',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Pendants</Link>,
        children: [
          {
            key: '15-1',
            label: <Link href='/product/147' style={{ textDecoration: 'none', color: '#1B9596' }}>Stainless Steel Rigid Pendant</Link>,
          },
          {
            key: '15-2',
            label: <Link href='/product/148' style={{ textDecoration: 'none', color: '#1B9596' }}>Endoscopy / Laproscopy Pendant</Link>,
          },
          {
            key: '15-3',
            label: <Link href='/product/149' style={{ textDecoration: 'none', color: '#1B9596' }}>Shelf Type Double Arm Pendant</Link>,
          },
          {
            key: '15-4',
            label: <Link href='/product/150' style={{ textDecoration: 'none', color: '#1B9596' }}>Double Arm Pendant</Link>,
          },
          {
            key: '15-5',
            label: <Link href='/product/151' style={{ textDecoration: 'none', color: '#1B9596' }}>Swievel Pendant</Link>,
          },
          {
            key: '15-6',
            label: <Link href='/product/152' style={{ textDecoration: 'none', color: '#1B9596' }}>ICU Pendant</Link>,
          },
          {
            key: '15-7',
            label: <Link href='/product/153' style={{ textDecoration: 'none', color: '#1B9596' }}>Single Arm Pendant</Link>,
          },
        ],
      },
      {
        key: '16',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Bed Head Panel</Link>,
        children: [
          {
            key: '16-1',
            label: <Link href='/product/154' style={{ textDecoration: 'none', color: '#1B9596' }}>Vertical panel</Link>,
          },
          {
            key: '16-2',
            label: <Link href='/product/155' style={{ textDecoration: 'none', color: '#1B9596' }}>Horizontal Panel</Link>,
          },
        ],
      },
      {
        key: '17',
        label: <Link href='/product/156' style={{ textDecoration: 'none', color: '#1B9596' }}>Operation Theatre</Link>,
      },
      {
        key: '18',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Operation Theatre Accessories</Link>,
        children: [
          {
            key: '18-1',
            label: <Link href='/product/157' style={{ textDecoration: 'none', color: '#1B9596' }}>Operation Theatre Control Panel</Link>,
          },
          {
            key: '18-2',
            label: <Link href='/product/158' style={{ textDecoration: 'none', color: '#1B9596' }}>Surgeon Control Panel (hrefuch screen)</Link>,
          },
          {
            key: '18-3',
            label: <Link href='/product/159' style={{ textDecoration: 'none', color: '#1B9596' }}>X-Ray Viewer</Link>,
          },
          {
            key: '18-4',
            label: <Link href='/product/160' style={{ textDecoration: 'none', color: '#1B9596' }}>Writing Board</Link>,
          },
          {
            key: '18-5',
            label: <Link href='/product/161' style={{ textDecoration: 'none', color: '#1B9596' }}>Hatch Box</Link>,
          },
          {
            key: '18-6',
            label: <Link href='/product/162' style={{ textDecoration: 'none', color: '#1B9596' }}>Scrub Sink</Link>,
          },
          {
            key: '18-7',
            label: <Link href='/product/163' style={{ textDecoration: 'none', color: '#1B9596' }}>Vinyl Flooring</Link>,
          },
          {
            key: '18-8',
            label: <Link href='/product/164' style={{ textDecoration: 'none', color: '#1B9596' }}>P.R D</Link>,
          },
          {
            key: '18-9',
            label: <Link href='/product/165' style={{ textDecoration: 'none', color: '#1B9596' }}>OT Door</Link>,
          },
        ],
      },
      {
        key: '19',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Air Compressor & Vacuum Pump</Link>,
        children: [
          {
            key: '19-1',
            label: <Link href='/product/166' style={{ textDecoration: 'none', color: '#1B9596' }}>Vacuum Pump</Link>,
          },
          {
            key: '19-2',
            label: <Link href='/product/167' style={{ textDecoration: 'none', color: '#1B9596' }}>Receiver Tank</Link>,
          },
          {
            key: '19-3',
            label: <Link href='/product/168' style={{ textDecoration: 'none', color: '#1B9596' }}>Air Dryer</Link>,
          },
          {
            key: '19-4',
            label: <Link href='/product/169' style={{ textDecoration: 'none', color: '#1B9596' }}>Air Compressor</Link>,
          },
        ],
      },
      {
        key: '20',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>Anaesthetic Gas Scavenging System</Link>,
        children: [
          {
            key: '3-1',
            label: <Link href='/product/170' style={{ textDecoration: 'none', color: '#1B9596' }}>AGSS- Simplx</Link>,
          },
          {
            key: '3-1',
            label: <Link href='/product/171' style={{ textDecoration: 'none', color: '#1B9596' }}>AGSS – Duplex</Link>,
          },
        ],
      },
      {
        key: '21',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#1B9596' }}>AGSS / WAGD Accessories</Link>,
        children: [
          {
            key: '21-1',
            label: <Link href='/product/172' style={{ textDecoration: 'none', color: '#1B9596' }}>Receiver / Interface Unit</Link>,
          },
          {
            key: '21-2',
            label: <Link href='/product/173' style={{ textDecoration: 'none', color: '#1B9596' }}>Receiver/ Interface unit with transfer & Evacuation Hose Assembly (3M) conforming href BS EN ISO: 80601-2-13 : 2012+A2: 2019</Link>,
          },
          {
            key: '21-3',
            label: <Link href='/product/174' style={{ textDecoration: 'none', color: '#1B9596' }}>3m BS Compatible AGSS Evacuation Hose Assembly (5m on request)</Link>,
          },
          {
            key: '21-4',
            label: <Link href='/product/175' style={{ textDecoration: 'none', color: '#1B9596' }}>Remote switch</Link>,
          },
          {
            key: '21-5',
            label: <Link href='/product/176' style={{ textDecoration: 'none', color: '#1B9596' }}>Scavenging Connechrefr for Trasfer Hose-30mm ISO Conical Male & Female (pair)</Link>,
          },
          {
            key: '21-6',
            label: <Link href='/product/177' style={{ textDecoration: 'none', color: '#1B9596' }}>Kink- resistance transfer hose with a pair of 30mm Conical (ISO) Male & female connechrefr</Link>,
          },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: <Link href='/about' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>About Us</Link>,
  },
  {
    key: 'sub3',
    label: <Link href='/blog' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Blog</Link>,
  },
  {
    key: 'sub4',
    label: <Link href='/contact' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Contact Us</Link>,
  },
  {
    key: 'sub5',
    label: <Link href='/exhibition' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Exhibition</Link>,
  },
  {
    key: 'sub6',
    label: <Link href='/client' style={{color: '#1B9596',textDecoration: 'none',fontSize: '18px'}}>Clientele</Link>,
  },
];

const Header = () => {
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const router = useRouter();

 
  // Function to close the dropdown after clicking any product link
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  // Function to close the dropdown
  const closeDropdown = () => {
    setIsDropdownOpen(false); // Update state to close dropdown
  };

  // Effect to handle closing the dropdown
  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap && !isDropdownOpen) {
      const dropdownElement = dropdownRef.current;
      if (dropdownElement) {
        const dropdownInstance = new window.bootstrap.Dropdown(dropdownElement);
        dropdownInstance.hide();
      }
    }
  }, [isDropdownOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.bootstrap) {
      const dropdownElement = dropdownRef.current;
      if (dropdownElement) {
        try {
          new window.bootstrap.Dropdown(dropdownElement);
        } catch (error) {
          console.error('Bootstrap dropdown initialization error:', error);
        }
      }
    }
  }, []);

 const showDrawer = () => { setOpen(true)};
const onClose = () => {setOpen(false)};
  const onClick = (e) => {
    console.log('click ', e);
    setOpen(false)
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
        router.replace(`/search/${searchQuery}`);
    }
  };
  
  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   router.replace(`/search/${searchQuery}`);
  // };



  const handleCategoryClick = (e, categoryId) => {
    e.stopPropagation();
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    setActiveSubcategory(null);
  };

  const handleSubcategoryClick = (e, subcategoryId) => {
    e.stopPropagation();
    setActiveSubcategory(activeSubcategory === subcategoryId ? null : subcategoryId);
  };

  return (
    <div className='container'>
      <Drawer
        placement={'left'}
        width={310}
        onClose={onClose}
        open={open}
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src='/image/Logo.jpeg'
              alt='logo'
              style={{height: '6.2rem',width: '8rem'}}
            />
          </div>
        }
      >
        <div className='d-flex flex-column justify-content-between'>
      <div>
        <Menu
          onClick={onClick}
          style={{
            width: 298,
            fontSize: '14px',
            marginLeft: '-1.6rem',
            color: '#1B9596'
          }}
          mode='inline'  // Set to inline for vertical expansion
          items={items}
          className='custom-menu'
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          width: '90%',
          paddingBottom: '20px',
          backgroundColor: '#fff',
          padding: '10px',
          textDecoration: 'none',
        }}
      >
      </div>
    </div>
      </Drawer>
      <div className='header' id='myHeader'>
        <div className='header-logo'>
          <Link href='/'>
            <h1 className='pt-2'>
              <img
                src='/image/Logo.jpeg'
                alt='logo/img'
              />
            </h1>
          </Link>
        </div>
        <div className='header-menu'>
        <Link href='/' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Home
            </div>
          </Link>
          
          <div className='dropdown border-0 bg-white'>
              <button
                className='btn btn-secondary dropdown-toggle border-0 bg-white text-primary fw-bolder'
                type='button'
                id='dropdownMenuButton'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                ref={dropdownRef}
              >
                Products
              </button>
              <div
                className='dropdown-menu border-0 bg-white p-0'
                aria-labelledby='dropdownMenuButton'
                style={{
                  position: 'absolute',  // Position dropdown absolutely
                  top: '100%',            // Position directly below the button
                  left: '0',             // Align with the button
                  margin: '0',           // Remove default margin
                  padding: '0',          // Remove default padding
                }}
              >
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '1')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Medical Gas Control & Automatic Changeover
                    </button>
                    {activeCategory === '1' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Semi Automatic Conrol Panel")}`}  style={{textDecoration: 'none',color: '#1B9596'}}>Semi Automatic Conrol Panel</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Analog")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Fully Automatic Control Panel Analog</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Digital")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Fully Automatic Control Panel Digital</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Source Fully Automatic Control Panel")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Source Fully Automatic Control Panel</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Touch Screen")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Fully Automatic Control Panel Touch Screen</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("3 source fully automatic control panel touch screen")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Source Fully Automatic Control Panel Touch Screen</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '2')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Cylinder Frame Header Manifold")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Cylinder Frame Header Manifold</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '21')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Alarm System
                    </button>
                    {activeCategory === '21' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Digital Gas Alarm Systems")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Digital Gas Alarm Systems</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("lcd alarm alert med touch")}`} style={{textDecoration: 'none',color: '#1B9596'}}>LCD Alarm Alert 1 Med Touch</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Analog Gas Alarm Systems")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Analog Gas Alarm Systems</Link>
                          </button>
                        </div>
                    </div>
                    <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Master Alarm")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Master Alarm</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '3')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Area Valve Service Unit")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Area Valve Service Unit</Link>
                      
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '31')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Compact Multi Valve AVSU")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Compact Multi Valve AVSU</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '32')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Medical Gas Outlet
                    </button>
                    {activeCategory === '32' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("british-standard-compatible-nemo-xp")}`} style={{textDecoration: 'none',color: '#1B9596'}}>British Standard Compatible 100% Metal Nemo XP</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("British Standard Compatible Nemo safe")}`} style={{textDecoration: 'none',color: '#1B9596'}}>British Standard Compatible Nemo safe</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("diss-compatible")}`} style={{textDecoration: 'none',color: '#1B9596'}}>DISS Compatible</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("British Standard Compatible Gem 10")}`} style={{textDecoration: 'none',color: '#1B9596'}}>British Standard Compatible Gem 10</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Puritan Bennett Compatible")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Puritan Bennett Compatible</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Parkodex Compatible")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Parkodex Compatible</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("DIN Standard Compatible")}`} style={{textDecoration: 'none',color: '#1B9596'}}>DIN Standard Compatible</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Ohmeda Standard Compatibl")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Ohmeda Standard Compatibl</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '4')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Accessories
                    </button>
                    {activeCategory === '4' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Regulators")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Regulators</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("plastic-shaddles-clamps")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Plastic Shaddles & Clamps</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Isolation Ball Valve")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Isolation Ball Valve</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Medical Gas Accessories")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Medical Gas Accessories</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Pressure Gauges")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Pressure Gauges</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Baskets")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Baskets</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Flexible tail Pipe Connection")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Flexible tail Pipe Connection</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '5')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Tubing for Medical Gases (Supply & Artificial Respiration)
                    </button>
                    {activeCategory === '5' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Oxygen")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Oxygen</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Nitrous Oxide")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Nitrous Oxide</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Medical Air")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Medical Air</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Carbon Dioxide")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Carbon Dioxide</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Vacuum Suction")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Vacuum/ Suction</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("AGSS WAGD")}`} style={{textDecoration: 'none',color: '#1B9596'}}>AGSS/WAGD</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '6')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Vacuum Regulators & Medical Suction Device
                    </button>
                    {activeCategory === '6' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Direct Mount or bed Head Panel And Pendants")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Direct Mount or bed Head Panel & Pendants</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("reusable-polycarbonate-collection-jar-1-l-with-leak-proof-self-")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Reusable polycarbonate collection jar-1 L with Leak Proof self </Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("direct-mount-on-wall-outlet-and-collection-jar-on-medical-rail-below-patient-body-level")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Direct Mount on wall Outlet & collection Jar on medical rail below patient body level</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '7')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("theatre-suction-trolley")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Theatre Suction trolley</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '8')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Medical Oxygen Flow meter
                    </button>
                    {activeCategory === '8' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-5-lpm")}`} style={{textDecoration: 'none',color: '#1B9596'}}>0-5 LPM</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-15-LPM")}`} style={{textDecoration: 'none',color: '#1B9596'}}> 0-15 LPM</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-70-LPM")}`} style={{textDecoration: 'none',color: '#1B9596'}}> 0-70 LPM</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative href the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text href the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Humidifier bottle")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Humidifier bottle</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '9')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text href the left
                        color: '#1B9596'
                      }}
                    >
                      Monitor Stand
                    </button>
                    {activeCategory === '9' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative href the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text href the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("monitor-stand-multi-movement")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Monitor Stand Multi Movement</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("monitor-stand")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Monitor Stand</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '10')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Cubical Curtain Track
                    </button>
                    {activeCategory === '10' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("IV-Hanger")}`} style={{textDecoration: 'none',color: '#1B9596'}}>IV Hanger</Link>
                            </button>
                          </div>
                      </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '11')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("nurse-call-system")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Nurse Call System</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '12')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Pendants
                    </button>
                    {activeCategory === '12' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("stainless-steel-rigid-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Stainless Steel Rigid Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("endoscopy-laproscopy-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Endoscopy / Laproscopy Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("shelf-type-double-arm-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Shelf Type Double Arm Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("double-arm-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Double Arm Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("swievel-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Swievel Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("icu-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}> ICU Pendant</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("single-arm-pendant")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Single Arm Pendant</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '13')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Bed Head Panel
                    </button>
                    {activeCategory === '13' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vertical-panel")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Vertical panel</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("horizontal-panel")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Horizontal Panel</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item'
                      onClick={(e) => handleCategoryClick(e, '14')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("operation-theatre")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Operation Theatre</Link>
                    </button>
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '15')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Operation Theatre Accessories
                    </button>
                    {activeCategory === '15' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("operation-theatre-control-panel")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Operation Theatre Control Panel</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("surgeon-control-panel-touch-screen")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Surgeon Control Panel (Touch screen)</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("X Ray Viewer")}`} style={{textDecoration: 'none',color: '#1B9596'}}>X-Ray Viewer</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("writing-board")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Writing Board</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("hatch-box")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Hatch Box</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("scrub-sink")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Scrub Sink</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vinyl-flooring")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Vinyl Flooring</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("p-r-d")}`} style={{textDecoration: 'none',color: '#1B9596'}}> P.R D</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("ot-door")}`} style={{textDecoration: 'none',color: '#1B9596'}}> OT Door</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '16')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Air Compressor & Vacuum Pump
                    </button>
                    {activeCategory === '16' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vacuum-pump")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Vacuum Pump</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-tank")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Receiver Tank</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("air-dryer")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Air Dryer </Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("air-compressor")}`} style={{textDecoration: 'none',color: '#1B9596'}}> Air Compressor</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '17')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      Anaesthetic Gas Scavenging System
                    </button>
                    {activeCategory === '17' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("agss-simplx")}`} style={{textDecoration: 'none',color: '#1B9596'}}>AGSS- Simplx</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                          <Link onClick={closeDropdown} href={`/product/${getSlug("agss-duplex")}`} style={{textDecoration: 'none',color: '#1B9596'}}> AGSS – Duplex</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
                  <div>
                    <button
                      className='dropdown-item dropdown-toggle'
                      onClick={(e) => handleCategoryClick(e, '18')}
                      style={{
                        cursor: 'pointer',
                        padding: '5px 10px',
                        marginTop: '-1.2rem',
                        display: 'block',    // Make button block-level for proper width handling
                        width: '100%',       // Ensure button takes full width
                        textAlign: 'left',  // Align text to the left
                        color: '#1B9596'
                      }}
                    >
                      AGSS / WAGD Accessories
                    </button>
                    {activeCategory === '18' && (
                      <div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-interface-unit")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Receiver / Interface Unit</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-interface-unit-with-transfer-and-evacuation-hose-assembly-conforming-to-bs-en-")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Receiver/ Interface unit with transfer & Evacuation Hose Assembly (3M) conforming to BS EN</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("3m-bs-compatible-agss-evacuation-hose-assembly-5m-on-request")}`} style={{textDecoration: 'none',color: '#1B9596'}}>3m BS Compatible AGSS Evacuation Hose Assembly (5m on request)</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("remote-switch")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Remote switch</Link>
                            </button>
                          </div>
                      </div>
                      <div
                        className='dropdown-submenu'
                        style={{
                          position: 'relative',  // Position relative to the parent
                          paddingLeft: '15px',
                          padding: '0',         // Remove padding
                        }}
                      >
                          <div>
                            <button
                              className='dropdown-item'
                              onClick={(e) => handleSubcategoryClick(e, '11')}
                              style={{
                                cursor: 'pointer',
                                padding: '3px 20px',
                                marginTop: '-1.2rem',
                                display: 'block',    // Make button block-level for proper width handling
                                width: '100%',       // Ensure button takes full width
                                textAlign: 'left',  // Align text to the left
                                color: '#1B9596'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("scavenging-connector-for-trasfer-hose-30mm-iso-conical-male-and-female-pair")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Scavenging Connector for Trasfer Hose-30mm ISO Conical Male & Female (pair)</Link>
                            </button>
                          </div>
                      </div>
                      <div
                      className='dropdown-submenu'
                      style={{
                        position: 'relative',  // Position relative to the parent
                        paddingLeft: '15px',
                        padding: '0',         // Remove padding
                      }}
                    >
                        <div>
                          <button
                            className='dropdown-item'
                            onClick={(e) => handleSubcategoryClick(e, '12')}
                            style={{
                              cursor: 'pointer',
                              padding: '3px 20px',
                              marginTop: '-1.2rem',
                              display: 'block',    // Make button block-level for proper width handling
                              width: '100%',       // Ensure button takes full width
                              textAlign: 'left',  // Align text to the left
                              color: '#1B9596'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("kink-resistance-transfer-hose-with-a-pair-of-30mm-conical-male-and-female-connector")}`} style={{textDecoration: 'none',color: '#1B9596'}}>Kink- resistance transfer hose with a pair of 30mm Conical (ISO) Male & female connector</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
              </div>
            </div>




          <Link href='/about' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              About us
            </div>
          </Link>
          <Link href='/blog' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Blog
            </div>
          </Link>
          <Link href='/contact' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Contact Us
            </div>
          </Link>
          <Link href='/exhibition' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
            Exhibitions
            </div>
          </Link>
          <Link href='/client' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Clientele
            </div>
          </Link>
        </div>
        <div className='header-search'>
          <form className='example' action='action_page.php'>
            <input
              className='header-searchbar'
              type='text'
              placeholder='Search..'
              name='search'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='header-search-button' type='submit' onClick={handleSearchSubmit}>
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div className='hamburger-icon'>
          <RxHamburgerMenu
            style={{ width: '25px', height: '25px', marginTop: '15px' }}
            onClick={showDrawer}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
