<<<<<<< HEAD
import React from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f



function Barnav() {
<<<<<<< HEAD
=======
  const [showHostingSubmenu, setShowHostingSubmenu] = useState(false);

  const handleHostingClick = () => {
    setShowHostingSubmenu((prev) => !prev);
  };

>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
  return (
    <div className="app-background">
      <div className="top-bar">
        {/* Remove the green line div, as the whole bar is now green */}
        <div className="top-bar-content">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 0, marginRight: '0.7rem' }}>
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          <a href="mailto:indo@siteworx.in" className="top-bar-email">
            indo@siteworx.in
          </a>
          <button className="top-bar-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
              <rect x="3" y="11" width="18" height="10" rx="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            Client Mode
          </button>
        </div>
      </div>
      {/* Sections Bar */}
      <div className="sections-bar">
        <span className="section-link">DOMAINS</span>
<<<<<<< HEAD
        <span className="section-link">
          HOSTING
        
        </span>
        <span className="section-link">
          SERVER
          
        </span>
=======
        <span className="section-link" style={{ position: 'relative' }} onClick={handleHostingClick}>
          HOSTING
          {showHostingSubmenu && (
            <div style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              background: '#fff',
              color: '#333',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              borderRadius: '4px',
              zIndex: 10,
              minWidth: '160px',
              padding: '0.5rem 0',
            }}>
              <div className="section-link" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Reseller Hosting</div>
              <div className="section-link" style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Research Hosting</div>
            </div>
          )}
        </span>
        <span className="section-link">SERVER</span>
>>>>>>> 537e01a6b1123df37c077beb433592fa614b211f
        <span className="section-link">EMAIL MARKETING</span>
        <span className="section-link">GOOGLE WORKSPACE</span>
        <span className="section-link">LICENSE</span>
        <span className="section-link">SUPPORT</span>
        <span className="section-link">ABOUT</span>
      </div>
      
    </div>
  );
}

export default Barnav;