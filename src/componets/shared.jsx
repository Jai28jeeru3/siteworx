import Navbar from './navbar';
import Footer from './footer';
import React from 'react';
import L from './l';
import MYPR from './mypr1';// Assuming you have a mypr component
import MN from './mn'; // Assuming you have a mn component
import MN1 from './mn1';
import Popularity from './popularity';
import Sliderui from "./mand";
import V from './v';
import FAQ1 from './faq1';

function Shared() {
  return (
     <div className="h-auto w-full bg-[#e2efff] bg-cover bg-no-repeat">
    <>
      <Navbar />
      {/* Add your shared page content here */}
        
            <L />
            <MYPR />
            <MN />
            <MN1 />
        <Sliderui />
            <Popularity />
            <V />
            <FAQ1 />
      <Footer />
    </>
    </div>
  );
}

export default Shared;