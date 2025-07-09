import React from 'react';
import T9 from '../imge/69.jpg'; // Adjust the path as necessary
import HBT from '../imge/HBT.jpg'; // Add this import for the HBT image
import IM from '../imge/im.jpg'; // Add this import for the IM image
import Preview from '../imge/preview.jpg'; // Add this import for the Preview image
import POP from '../imge/pop.jpg'; // Add this import for the POP image

function Mn() {
  const features = [
    'Instant Activation',
    '24 / 7 Support',
    '99.9% Uptime',
    'Cloud Powered',
    'Multi Datacenter',
  ];
  return (
    <div className="text-center mt-8" style={{ background: '#e1eefe' }}>
      <p className="text-lg font-semibold mb-2">Build For Speed</p>
      <h2 className="text-2xl font-bold mb-6">Hosting Features</h2>
      <div className="flex flex-wrap justify-center gap-12 mt-8">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={
              `w-48 h-40 bg-white bg-opacity-80 rounded-lg shadow flex flex-col items-center justify-center text-xl font-semibold` +
              (idx === 3 ? ' pt-2' : '')
            }
          >
            {idx === 0 && (
              <img src={T9} alt="Instant Activation" className="w-20 h-20 mb-2 object-cover rounded-full" />
            )}
            {idx === 1 && (
              <img src={IM} alt="24 / 7 Support" className="w-20 h-20 mb-2 object-cover rounded-full" />
            )}
            {idx === 2 && (
              <img src={HBT} alt="99.9% Uptime" className="w-20 h-20 mb-2 object-cover rounded-full" />
            )}
            {idx === 3 && (
              <img src={POP} alt="Cloud Powered" className="w-30 h-20 mb-2 object-cover bg-white" style={{boxShadow: '0 0 0 4px #fff', borderRadius: '0'}} />
            )}
            {idx === 4 && (
              <img src={Preview} alt="Multi Datacenter" className="w-30 h-20 mb-2 object-cover rounded-full" />
            )}
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mn;