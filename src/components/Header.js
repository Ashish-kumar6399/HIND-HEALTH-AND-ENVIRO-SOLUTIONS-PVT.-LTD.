'use client'    
import React, { useRef, useState,useEffect } from 'react';
import '../Styles/Header.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Drawer, Menu } from 'antd';
// import { IoIosLogOut } from 'react-icons/io';
import data from '../Data'
import { getSlug } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// Menu items with routing
const items = [
  {
    key: 'sub0',
    label: <Link href='/' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Home</Link>,
  },
  {
    key: 'sub2',
    label: <Link href='/about' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>About Us</Link>,
  },
  {
    key: 'sub1',
    label: <span style={{ color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Product</span>,
    children: [
      {
        key: '1',
        label: <Link href='/product/1' style={{ textDecoration: 'none', color: '#009eff' }}>Mobile Toilet Trolley</Link>,
        children: [
          {
            key: '1-1',
            label: <Link href={`/product/${getSlug("8 Seater Mobile Toilet")}`} style={{ textDecoration: 'none', color: '#009eff' }}>08 Seater Mobile Toilet</Link>,
          },
          {
            key: '1-2',
            label: <Link href={`/product/${getSlug("Indian Style Four Seater Toilet Trolley")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Indian Style Four Seater Toilet Trolley</Link>,
          },
          {
            key: '1-3',
            label: <Link href={`/product/${getSlug("Ten Seater Mobile Toilet Trolley")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Ten Seater Mobile Toilet Trolley</Link>,
          },
          {
            key: '1-4',
            label: <Link href={`/product/${getSlug("Six Seater Mobile Toilet Trolley (Indian Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Six Seater Mobile Toilet Trolley (Indian Style)</Link>,
          },
          {
            key: '1-5',
            label: <Link href={`/product/${getSlug("Four Seater Mobile Toilet")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Four Seater Mobile Toilet</Link>,
          },
        ],
      },
      {
        key: '2',
        label: <Link href='/product/1' style={{ textDecoration: 'none', color: '#009eff' }}>Single Seater Portable Toilet Cabin
</Link>,
        children: [
          {
            key: '2-1',
            label: <Link href={`/product/${getSlug("Urinal Toilet Cabin")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Urinal Toilet Cabin</Link>,
          },
          {
            key: '2-2',
            label: <Link href={`/product/${getSlug("FRP Portable Toilet Cabin (Indian Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>FRP Portable Toilet Cabin (Indian Style)</Link>,
          },
        ],
      },
      {
        key: '3',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#009eff' }}>Toilet Cabin</Link>,
        children: [
          {
            key: '3-1',
            label: <Link  href={`/product/${getSlug("Single Seater Portable Toilet cabin")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Single Seater Portable Toilet cabin</Link>,
          },
          {
            key: '3-2',
            label: <Link  href={`/product/${getSlug("FRP Portable Toilet Cabin( Urinal Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>FRP Portable Toilet Cabin( Urinal Style)</Link>,
          },
          {
            key: '3-3',
            label: <Link  href={`/product/${getSlug("Portable Toilet Cabin (Indian Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Portable Toilet Cabin (Indian Style)</Link>,
          },
          {
            key: '3-4',
            label: <Link  href={`/product/${getSlug("FRP Portable Toilet Cabin (Western Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>FRP Portable Toilet Cabin (Western Style)</Link>,
          },
          {
            key: '3-5',
            label: <Link  href={`/product/${getSlug("02 FRP Portable Toilet Cabin (Indian Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>02 FRP Portable Toilet Cabin (Indian Style)</Link>,
          },
          {
            key: '3-6',
            label: <Link  href={`/product/${getSlug("Portable Toilet Cabin western & Urinal Style")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Portable Toilet Cabin western & Urinal Style</Link>,
          },
          {
            key: '3-7',
            label: <Link  href={`/product/${getSlug("Portable Toilet Cabin ( western Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Portable Toilet Cabin (western Style)</Link>,
          },
          {
            key: '3-8',
            label: <Link  href={`/product/${getSlug("Western Style Single Seater Portable Toilet Cabin")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Western Style Single Seater Portable Toilet Cabin</Link>,
          },
          {
            key: '3-9',
            label: <Link  href={`/product/${getSlug("FRP Portable Toilet Cabin ( Indian Style)")}`} style={{ textDecoration: 'none', color: '#009eff' }}>FRP Portable Toilet Cabin ( Indian Style)</Link>,
          },
        ],
      },
      {
        key: '4',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#009eff' }}>Two Seater Toilet Cabin</Link>,
        children: [
          {
            key: '4-1',
            label: <Link  href={`/product/${getSlug("Double Seated Toilet")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Double Seated Toilet</Link>,
          },
         
        ],
      },
      {
        key: '6',
        label: <Link href='/product/3' style={{ textDecoration: 'none', color: '#009eff' }}>Biogas Storage Tank</Link>,
        children: [
          {
            key: '6-1',
            label: <Link  href={`/product/${getSlug("Bio Digester Tank")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Bio Digester Tank</Link>,
          },
          {
            key: '6-2',
            label: <Link  href={`/product/${getSlug("Green FRP Bio Digester Tank")}`} style={{ textDecoration: 'none', color: '#009eff' }}>Green FRP Bio Digester Tank</Link>,
          },
          {
            key: '6-3',
            label: <Link  href={`/product/${getSlug("FRP Bio Digester Tank")}`} style={{ textDecoration: 'none', color: '#009eff' }}>FRP Bio Digester Tank</Link>,
          },
         
        ],
      },
      
    ],
  },
  {
    key: 'sub3',
    label: <Link href='/products' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Rental</Link>,
  },
  // {
    //   key: 'sub5',
    //   label: <Link href='/exhibition' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Exhibition</Link>,
    // },
    {
      key: 'sub6',
      label: <Link href='/client' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Clientele</Link>,
    },
    {
      key: 'sub4',
      label: <Link href='/contact' style={{color: '#009eff',textDecoration: 'none',fontSize: '18px'}}>Contact Us</Link>,
    },
];


// ------------------------------------- mobile header end ----------------------//
const Header = () => {
  const dropdownRef = useRef();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const router = useRouter();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState(null);

 
  // Function to close the dropdown after clicking any product link
  // const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

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



  // const handleCategoryClick = (e, categoryId) => {
  //   e.stopPropagation();
  //   setActiveCategory(activeCategory === categoryId ? null : categoryId);
  //   setActiveSubcategory(null);
  // };

  const handleSubcategoryClick = (e, subcategoryId) => {
    e.stopPropagation();
    setActiveSubcategory(activeSubcategory === subcategoryId ? null : subcategoryId);
  };

  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);

  const handleCategoryClick = (categoryId) => {
    setOpenCategory((prevCategory) => (prevCategory === categoryId ? null : categoryId));
    setOpenSubCategory(null); // Close subcategories when switching categories
  };

  const handleSubCategoryClick = (subcategoryName) => {
    setOpenSubCategory((prevSubCategory) =>
      prevSubCategory === subcategoryName ? null : subcategoryName
    );
  };

  // Toggle the main dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setOpenCategoryId(null); // Close any open subcategory
  };

  // Toggle the visibility of a specific category's subcategories
  const toggleSubcategory = (categoryId) => {
    setOpenCategoryId(openCategoryId === categoryId ? null : categoryId);
  };

  return (
    <div className='container-fluid mb-4' style={{backgroundColor:"#009eff"}}>
      <Drawer
     
      
        placement={'left'}
        width={310}
        onClose={onClose}
        open={open}
        title={
          <div style={{ display: 'flex', alignItems: 'center',  } }>
            <img
              src='/image/img/logo_mobile.png'
              alt='logo'             
              style={{height: '4.2rem',width: '7rem'}}
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
            color: '#009eff'
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
                src='/image/img/logoo.png'
                alt='logo/img'
              />
            </h1>
          </Link>
        </div>


        <div className='header-menu'>




        <Link href='/' style={{ textDecoration: 'none' }}>
            <div className='header_menu text-black' id='dropdownMenuButton'>
              Home
            </div>
          </Link>

          <Link href='/about' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              About us
            </div>
          </Link>

          <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Main Button to Open Dropdown */}
      <button className='fw-bolder'
        onClick={toggleDropdown}
        style={{
          padding: '6.5px 10px',
          cursor: 'pointer',
          color: 'white',
          backgroundColor: '#009eff',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        Products 
      </button>

      {/* Dropdown List */}
      {isDropdownOpen && (
        <div
          style={{
            position: 'absolute',
            top: '110%',
            left: 0,
            backgroundColor: 'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '4px',
            width: '380px',
            zIndex: 9,
            padding: '4px 0',
          }}
        >
          {/* List of Categories */}
          {data.map((category) => (
            <div key={category.id}>
              <button
                onClick={() => toggleSubcategory(category.id)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  border: 'none',
                  backgroundColor: openCategoryId === category.id ? '#e9f7ef' : 'white',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{category.name}</span>
                <span style={{ fontSize: '12px', marginLeft: '10px' }}>
                  {openCategoryId === category.id ? '▲' : '▼'}
                </span>
              </button>

              {/* Subcategories Dropdown */}
              {openCategoryId === category.id && (
                <div style={{ paddingLeft: '20px', backgroundColor: '#f9f9f9', padding: '4px 0' }}>
                  {category.subcategories.map((subcategory) => (
                    <Link href={`/product/${getSlug(subcategory.name)}`}  style={{textDecoration: 'none'}} >
                        <div
                          key={subcategory.id}
                          onClick={toggleDropdown}
                          style={{
                            cursor: 'pointer',
                            borderBottom: '1px solid #ddd',
                          }}
                        >
                          {subcategory.name}
                        </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>

          {/* <div className='dropdown border-0 '>
              <button
                className='btn btn-secondary dropdown-toggle border-0   text-primary fw-bolder'
                type='button'
                id='dropdownMenuButton'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
                ref={dropdownRef}
                style={{backgroundColor: '#009eff'}}
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Semi Automatic Conrol Panel")}`}  style={{textDecoration: 'none',color: '#009eff'}}>Semi Automatic Conrol Panel</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Analog")}`} style={{textDecoration: 'none',color: '#009eff'}}>Fully Automatic Control Panel Analog</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Digital")}`} style={{textDecoration: 'none',color: '#009eff'}}>Fully Automatic Control Panel Digital</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("3 Source Fully Automatic Control Panel")}`} style={{textDecoration: 'none',color: '#009eff'}}>3 Source Fully Automatic Control Panel</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Fully Automatic Control Panel Touch Screen")}`} style={{textDecoration: 'none',color: '#009eff'}}>Fully Automatic Control Panel Touch Screen</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("3 source fully automatic control panel touch screen")}`} style={{textDecoration: 'none',color: '#009eff'}}>Source Fully Automatic Control Panel Touch Screen</Link>
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Cylinder Frame Header Manifold")}`} style={{textDecoration: 'none',color: '#009eff'}}>Cylinder Frame Header Manifold</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Digital Gas Alarm Systems")}`} style={{textDecoration: 'none',color: '#009eff'}}>Digital Gas Alarm Systems</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("lcd alarm alert med touch")}`} style={{textDecoration: 'none',color: '#009eff'}}>LCD Alarm Alert 1 Med Touch</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Analog Gas Alarm Systems")}`} style={{textDecoration: 'none',color: '#009eff'}}>Analog Gas Alarm Systems</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Master Alarm")}`} style={{textDecoration: 'none',color: '#009eff'}}>Master Alarm</Link>
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Area Valve Service Unit")}`} style={{textDecoration: 'none',color: '#009eff'}}>Area Valve Service Unit</Link>
                      
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("Compact Multi Valve AVSU")}`} style={{textDecoration: 'none',color: '#009eff'}}>Compact Multi Valve AVSU</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("british-standard-compatible-nemo-xp")}`} style={{textDecoration: 'none',color: '#009eff'}}>British Standard Compatible 100% Metal Nemo XP</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("British Standard Compatible Nemo safe")}`} style={{textDecoration: 'none',color: '#009eff'}}>British Standard Compatible Nemo safe</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("diss-compatible")}`} style={{textDecoration: 'none',color: '#009eff'}}>DISS Compatible</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("British Standard Compatible Gem 10")}`} style={{textDecoration: 'none',color: '#009eff'}}>British Standard Compatible Gem 10</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Puritan Bennett Compatible")}`} style={{textDecoration: 'none',color: '#009eff'}}>Puritan Bennett Compatible</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Parkodex Compatible")}`} style={{textDecoration: 'none',color: '#009eff'}}>Parkodex Compatible</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("DIN Standard Compatible")}`} style={{textDecoration: 'none',color: '#009eff'}}>DIN Standard Compatible</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Ohmeda Standard Compatible")}`} style={{textDecoration: 'none',color: '#009eff'}}>Ohmeda Standard Compatible</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Regulators")}`} style={{textDecoration: 'none',color: '#009eff'}}>Regulators</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("plastic-shaddles-clamps")}`} style={{textDecoration: 'none',color: '#009eff'}}>Plastic Shaddles & Clamps</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Isolation Ball Valve")}`} style={{textDecoration: 'none',color: '#009eff'}}>Isolation Ball Valve</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Medical Gas Accessories")}`} style={{textDecoration: 'none',color: '#009eff'}}>Medical Gas Accessories</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Pressure Gauges")}`} style={{textDecoration: 'none',color: '#009eff'}}>Pressure Gauges</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Baskets")}`} style={{textDecoration: 'none',color: '#009eff'}}>Baskets</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Flexible tail Pipe Connection")}`} style={{textDecoration: 'none',color: '#009eff'}}>Flexible tail Pipe Connection</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Oxygen")}`} style={{textDecoration: 'none',color: '#009eff'}}>Oxygen</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Nitrous Oxide")}`} style={{textDecoration: 'none',color: '#009eff'}}>Nitrous Oxide</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Medical Air")}`} style={{textDecoration: 'none',color: '#009eff'}}>Medical Air</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Carbon Dioxide")}`} style={{textDecoration: 'none',color: '#009eff'}}>Carbon Dioxide</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Vacuum Suction")}`} style={{textDecoration: 'none',color: '#009eff'}}>Vacuum/ Suction</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("AGSS WAGD")}`} style={{textDecoration: 'none',color: '#009eff'}}>AGSS/WAGD</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("Direct Mount or bed Head Panel And Pendants")}`} style={{textDecoration: 'none',color: '#009eff'}}>Direct Mount or bed Head Panel & Pendants</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("reusable-polycarbonate-collection-jar-1-l-with-leak-proof-self-")}`} style={{textDecoration: 'none',color: '#009eff'}}>Reusable polycarbonate collection jar-1 L with Leak Proof self </Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("direct-mount-on-wall-outlet-and-collection-jar-on-medical-rail-below-patient-body-level")}`} style={{textDecoration: 'none',color: '#009eff'}}>Direct Mount on wall Outlet & collection Jar on medical rail below patient body level</Link>
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("theatre-suction-trolley")}`} style={{textDecoration: 'none',color: '#009eff'}}>Theatre Suction trolley</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-5-lpm")}`} style={{textDecoration: 'none',color: '#009eff'}}>0-5 LPM</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-15-LPM")}`} style={{textDecoration: 'none',color: '#009eff'}}> 0-15 LPM</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("0-to-70-LPM")}`} style={{textDecoration: 'none',color: '#009eff'}}> 0-70 LPM</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("Humidifier bottle")}`} style={{textDecoration: 'none',color: '#009eff'}}> Humidifier bottle</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("monitor-stand-multi-movement")}`} style={{textDecoration: 'none',color: '#009eff'}}>Monitor Stand Multi Movement</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("monitor-stand")}`} style={{textDecoration: 'none',color: '#009eff'}}>Monitor Stand</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("IV-Hanger")}`} style={{textDecoration: 'none',color: '#009eff'}}>IV Hanger</Link>
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("nurse-call-system")}`} style={{textDecoration: 'none',color: '#009eff'}}> Nurse Call System</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("stainless-steel-rigid-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}>Stainless Steel Rigid Pendant</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("endoscopy-laproscopy-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}>Endoscopy / Laproscopy Pendant</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("shelf-type-double-arm-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}> Shelf Type Double Arm Pendant</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("double-arm-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}> Double Arm Pendant</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("swievel-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}> Swievel Pendant</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("icu-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}> ICU Pendant</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("single-arm-pendant")}`} style={{textDecoration: 'none',color: '#009eff'}}> Single Arm Pendant</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vertical-panel")}`} style={{textDecoration: 'none',color: '#009eff'}}> Vertical panel</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("horizontal-panel")}`} style={{textDecoration: 'none',color: '#009eff'}}> Horizontal Panel</Link>
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
                        color: '#009eff'
                      }}
                    >
                      <Link onClick={closeDropdown} href={`/product/${getSlug("operation-theatre")}`} style={{textDecoration: 'none',color: '#009eff'}}> Operation Theatre</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("operation-theatre-control-panel")}`} style={{textDecoration: 'none',color: '#009eff'}}>Operation Theatre Control Panel</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("surgeon-control-panel-touch-screen")}`} style={{textDecoration: 'none',color: '#009eff'}}>Surgeon Control Panel (Touch screen)</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("X Ray Viewer")}`} style={{textDecoration: 'none',color: '#009eff'}}>X-Ray Viewer</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("writing-board")}`} style={{textDecoration: 'none',color: '#009eff'}}>Writing Board</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("hatch-box")}`} style={{textDecoration: 'none',color: '#009eff'}}> Hatch Box</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("scrub-sink")}`} style={{textDecoration: 'none',color: '#009eff'}}> Scrub Sink</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vinyl-flooring")}`} style={{textDecoration: 'none',color: '#009eff'}}> Vinyl Flooring</Link>
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("p-r-d")}`} style={{textDecoration: 'none',color: '#009eff'}}> P.R D</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("ot-door")}`} style={{textDecoration: 'none',color: '#009eff'}}> OT Door</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("vacuum-pump")}`} style={{textDecoration: 'none',color: '#009eff'}}> Vacuum Pump</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-tank")}`} style={{textDecoration: 'none',color: '#009eff'}}> Receiver Tank</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("air-dryer")}`} style={{textDecoration: 'none',color: '#009eff'}}>Air Dryer </Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("air-compressor")}`} style={{textDecoration: 'none',color: '#009eff'}}> Air Compressor</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("agss-simplx")}`} style={{textDecoration: 'none',color: '#009eff'}}>AGSS- Simplx</Link>
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
                              color: '#009eff'
                            }}
                          >
                          <Link onClick={closeDropdown} href={`/product/${getSlug("agss-duplex")}`} style={{textDecoration: 'none',color: '#009eff'}}> AGSS – Duplex</Link>
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
                        color: '#009eff'
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
                                color: '#009eff'
                              }}
                            >
                              <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-interface-unit")}`} style={{textDecoration: 'none',color: '#009eff'}}>Receiver / Interface Unit</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("receiver-interface-unit-with-transfer-and-evacuation-hose-assembly-conforming-to-bs-en-")}`} style={{textDecoration: 'none',color: '#009eff'}}>Receiver/ Interface unit with transfer & Evacuation Hose Assembly (3M) conforming to BS EN</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("3m-bs-compatible-agss-evacuation-hose-assembly-5m-on-request")}`} style={{textDecoration: 'none',color: '#009eff'}}>3m BS Compatible AGSS Evacuation Hose Assembly (5m on request)</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("remote-switch")}`} style={{textDecoration: 'none',color: '#009eff'}}>Remote switch</Link>
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
                                color: '#009eff'
                              }}
                            >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("scavenging-connector-for-trasfer-hose-30mm-iso-conical-male-and-female-pair")}`} style={{textDecoration: 'none',color: '#009eff'}}>Scavenging Connector for Trasfer Hose-30mm ISO Conical Male & Female (pair)</Link>
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
                              color: '#009eff'
                            }}
                          >
                            <Link onClick={closeDropdown} href={`/product/${getSlug("kink-resistance-transfer-hose-with-a-pair-of-30mm-conical-male-and-female-connector")}`} style={{textDecoration: 'none',color: '#009eff'}}>Kink- resistance transfer hose with a pair of 30mm Conical (ISO) Male & female connector</Link>
                          </button>
                        </div>
                    </div>
                    </div>
                    )}
                  </div>
              </div>
            </div> */}



          <Link href='/products' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Rental
            </div>
          </Link>

          <Link href='/client' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Clientele
            </div>
          </Link>

          <Link href='/contact' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
              Contact Us
            </div>
          </Link>

          {/* <Link href='/exhibition' style={{ textDecoration: 'none' }}>
            <div className='header_menu' id='dropdownMenuButton'>
            Exhibitions
            </div>
          </Link> */}



        </div>
        <div className='header-search'>
          <form className='example pb-2' action='action_page.php'>
            <input
              className='header-searchbar'
              type='text'
              placeholder='Search..'
              name='search'
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className='header-search-button ' type='submit' onClick={handleSearchSubmit}>
                <i className="fa-solid fa-magnifying-glass text-black"></i>
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