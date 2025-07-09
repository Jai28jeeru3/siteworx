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
  );
};

export default Sitenav;
