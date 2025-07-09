import { Link } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewNavbar = () => {
 
  const navigate=useNavigate()
   const handleClick = () => {
    navigate('/login');
  };
  return (
    <nav className="w-full flex items-center justify-between px-6 fixed-top py-2 bg-white shadow-md" style={{ fontFamily: 'sans-serif' }}>
      {/* Left: Email */}
      <div className="flex items-center gap-2 text-blue-900 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#1e40af" strokeWidth="2" className="mr-1"><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22,6 12,13 2,6"/></svg>
        <a href="mailto:info@siteworx.in" className="hover:underline" style={{color:'#1e40af'}}>info@siteworx.in</a>
      </div>
      {/* Right: Client Area Dropdown */}
      <div className="relative">
       
       
        <button
          className="flex items-center gap-1 px-3 py-1 rounded hover:bg-blue-100 transition-colors focus:outline-none border border-blue-100 text-blue-900 font-semibold"
          onClick={handleClick}
        >
          Client Area
          
        </button>
       
       
        
      </div>
    </nav>
  );
};

export default NewNavbar;