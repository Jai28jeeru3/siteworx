import React from 'react';
import WL from "../imge/Wl3.jpg"; // Adjust the path as necessary
import cloudGif from "../imge/data-transfer-icon.gif";

function L() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${WL})`,
        backgroundSize: '1700px 600px',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex flex-row items-center justify-center w-full max-w-5xl mt-8">
        <div className="p-8 w-full max-w-2xl text-center" style={{ background: 'transparent', boxShadow: 'none' }}>
          <h1 className="text-3xl font-bold">
           Reseller Hosting<span className="text-red-600">5% OFF</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
           Start your own hosting business effortlessly with our reseller hosting plan, offering top-notch performance, reliability, and dedicated support for your success.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            See All Plans
          </button>
        </div>
        <div className="hidden md:flex justify-center items-center ml-8">
          <img src={cloudGif} alt="Cloud Network" className="w-72 h-72 object-contain" />
        </div>
      </div>
    </div>
  );
}

export default L;
