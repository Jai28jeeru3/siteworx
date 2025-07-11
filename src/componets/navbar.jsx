<<<<<<< HEAD
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import siteworex from "../imge/siteworex.png"
import Login from "./login";
import SignIn from "./signin";
import { createPortal } from "react-dom";

const useNewWindow = (Component, show) => {
  const newWindow = useRef(null);
  const [container, setContainer] = useState(null);

  React.useEffect(() => {
    if (show) {
      newWindow.current = window.open("", "_blank", "width=" + window.screen.availWidth + ",height=" + window.screen.availHeight + ",fullscreen=yes");
      const doc = newWindow.current.document;
      doc.write('<!DOCTYPE html><html><head><title>Form</title></head><body><div id="form-root"></div></body></html>');
      doc.close();
      setContainer(doc.getElementById("form-root"));
      newWindow.current.moveTo(0, 0);
      newWindow.current.resizeTo(window.screen.availWidth, window.screen.availHeight);
    }
    return () => {
      if (newWindow.current) {
        newWindow.current.close();
        newWindow.current = null;
      }
      setContainer(null);
    };
  }, [show]);

  return container ? createPortal(<Component />, container) : null;
};

const Sitenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clientDropdownOpen, setClientDropdownOpen] = useState(false);
  const [showLoginWindow, setShowLoginWindow] = useState(false);
  const [showSignInWindow, setShowSignInWindow] = useState(false);

  const loginPortal = useNewWindow(Login, showLoginWindow);
  const signInPortal = useNewWindow(SignIn, showSignInWindow);

  return (
   <div className="h-[50px]  w-[100%] m-auto ">
     <nav className="bg-[#0a2259] shadow-md bg-opacity-100 backdrop-blur-sm fixed-top w-[100%] m-auto ">
      <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 w-full" style={{ marginLeft: '6rem' }}>
          {/* Brand - fixed to left */}
          <div className="flex items-center" style={{ position: 'absolute', left: 0, top: 0, height: '100%', marginLeft: '1.5rem' }}>
            <Link className="text-2xl font-bold text-blue-600">
              <button style={{ background: '#fff', borderRadius: '0.5rem', padding: '0.2rem' }}>
                <img src={siteworex} className="h-[40px] w-[150px] rounded-lg" alt="" />
              </button>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center items-center gap-10 font-normal flex-1 ml-0 ">
            <Link className="text-white hover:text-blue-300" to="/">
              DOMAINS
            </Link>
            <Link className="text-white hover:text-blue-300" to="/about">
              HOSTING
            </Link>
            <Link className="text-white hover:text-blue-300" to="/services">
              SERVERS
            </Link>
            <Link className="text-white hover:text-blue-300" to="/contact">
              EMAIL MARKETING
            </Link>
            <Link className="text-white hover:text-blue-300" to="/">
              GOOGLE WORKSPACE
            </Link>
            <Link className="text-white hover:text-blue-300" to="/about">
              LICENSE
            </Link>
            <Link className="text-white hover:text-blue-300" to="/services">
              SUPPORT
            </Link>
            <Link className="text-white hover:text-blue-300" to="/contact">
              ABOUT
            </Link>
          </div>

          {/* Client Area Dropdown - fixed right corner */}
          <div className="relative flex items-center h-full pr-4" style={{ position: 'absolute', right: 0, top: 0, height: '100%' }} tabIndex={0}>
            <button
              className="flex items-center text-white hover:text-blue-300 focus:outline-none"
              onClick={() => setClientDropdownOpen((prev) => !prev)}
            >
              Client Area
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {clientDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10 transition-opacity duration-200">
                <button onClick={() => setShowLoginWindow(true)} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">Login</button>
                <button onClick={() => setShowSignInWindow(true)} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-100">Sign In</button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none ml-[230px]"
        >
          {menuOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } px-4 pb-4 transition-all duration-300`}
      >
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/">Home</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/about">About</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/services">Services</Link>
        <Link className="block py-2 text-gray-700 hover:text-blue-600" to="/contact">Contact</Link>
        {/* Mobile Client Area Dropdown */}
        <div className="mt-2">
          <details>
            <summary className="flex items-center cursor-pointer text-gray-700 select-none">
              Client Area
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="ml-4 mt-1">
              <Link to="/login" className="block px-2 py-1 text-gray-700 hover:bg-blue-100 rounded">Login</Link>
              <Link to="/signup" className="block px-2 py-1 text-gray-700 hover:bg-blue-100 rounded">Signup</Link>
            </div>
          </details>
        </div>
      </div>

      {/* Fullscreen Login/SignIn Windows */}
      {loginPortal}
      {signInPortal}
    </nav>

  


   </div>
   
=======
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import siteworex from "../imge/siteworex.png"
import NewNavbar from "./navtop";


const Sitenav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serverDropdown, setServerDropdown] = useState(false);
  const [hostingDropdown, setHostingDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[50px]   w-[100%] m-auto ">
        <NewNavbar/>
        <nav className="bg-[#0c2570] text-white shadow-md fixed-top top-12   w-[100%] m-auto">
          <div className="max-w-7xl  px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
              {/* Brand */}
              <div className="flex float-left">
                
                <Link className="text-2xl font-bold text-white">
                 <button>
                    <img src={siteworex} className="h-[40px] w-[150px] rounded-lg bg-white p-1" alt="" />
                 </button>
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-3  ml-32 ">
                <Link className="text-white hover:text-blue-200" to="/">
                  DOMAINS 
                </Link>
                <div className="relative">
                  <button
                    className="text-white hover:text-blue-200 flex items-center gap-1 focus:outline-none"
                    onClick={() => setHostingDropdown((prev) => !prev)}
                    type="button"
                  >
                    HOSTING
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${hostingDropdown ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {hostingDropdown && (
                    <div className="absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg z-20">
                      <Link
                        to="/reseller-hosting"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setHostingDropdown(false)}
                      >
                        Reseller Hosting
                      </Link>
                      <Link
                        to="/shared-hosting"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setHostingDropdown(false)}
                      >
                        Shared Hosting
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <button
                    className="text-white hover:text-blue-200 flex items-center gap-1 focus:outline-none"
                    onClick={() => setServerDropdown((prev) => !prev)}
                    type="button"
                  >
                    SERVERS
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${serverDropdown ? 'rotate-180' : ''}`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                  {serverDropdown && (
                    <div className="absolute left-0 mt-2 w-44 bg-white text-gray-800 rounded shadow-lg z-20">
                      <Link
                        to="/vps-server"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setServerDropdown(false)}
                      >
                        VPS Server
                      </Link>
                      <Link
                        to="/dedicated-server"
                        className="block px-4 py-2 hover:bg-blue-100"
                        onClick={() => setServerDropdown(false)}
                      >
                        Dedicated Server
                      </Link>
                    </div>
                  )}
                </div>
                <Link className="text-white hover:text-blue-200" to="/">
                  EMAIL MARKETING
                </Link>

                 <Link className="text-white hover:text-blue-200" to="/">
                  GOOGLE WORKSPACE
                </Link>
                <Link className="text-white hover:text-blue-200" to="/">
                  LICENSE
                </Link>
                <Link className="text-white hover:text-blue-200" to="/">
                  SUPPORT
                </Link>
                <Link className="text-white hover:text-blue-200" to="/">
                  ABOUT
                </Link>
               
              </div>
                
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="text-gray-700 focus:outline-none ml-[230px]"
                >
                  {menuOpen ? (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden ${
              menuOpen ? "block" : "hidden"
            } px-4 pb-4 transition-all duration-300`}
          >

            <Link className="block py-2 text-white hover:text-blue-200" to="/">Home</Link>
            <Link className="block py-2 text-white hover:text-blue-200" to="/about">About</Link>
            <Link className="block py-2 text-white hover:text-blue-200" to="/services">Services</Link>
            <Link className="block py-2 text-white hover:text-blue-200" to="/contact">Contact</Link>
          </div>
        </nav>
      </div>
    </>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
  );
};

export default Sitenav;
