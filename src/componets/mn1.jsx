import React from 'react';
import II from '../imge/ll.jpg';
import II1 from '../imge/ll1.jpg';
import II2 from '../imge/ll2.jpg';
import II3 from '../imge/ll3.jpg';
import II4 from '../imge/ll4.jpg';
import II5 from '../imge/ll6.jpg';

const features = [
  {
    img: II,
    title: 'Server Performance',
    desc: `Underperforming servers can impact your user's experience. Look for a provider with optimized resources and has a proven track record.`,
  },
  {
    img: II1,
    title: 'Uptime Guarantee',
    desc: `There's nothing more disappointing than seeing the website not open. It doesn't just impact the user experience but also the website's SEO. So, find web hosting solutions with uptime closer to 100%.`,
  },
  {
    img: II2,
    title: 'Response Time',
    desc: `53% of users leave the website if the response time is over 3 seconds. So, like uptime, ensure the web service provider guarantees an efficient response time.`,
  },
  {
    img: II3,
    title: 'Server Location',
    desc: `If your target audience is from one area, it's better to choose a cheap hosting server with their data center nearby. That way your website will load faster to your visitors than usual!`,
  },
  {
    img: II4,
    title: 'Customer Support',
    desc: `More than promising all the features, the best hosting must offer fast customer support. Their ability to resolve queries in minutes makes a big difference in making your website a success.`,
  },
  {
    img: II5,
    title: 'Support Channels',
    desc: `Look for a web service provider offering multiple support channels, such as email, phone, and live chat. Also ensure the support team is available on these platforms 24/7 to assist you with any issues.`,
  },
];

function Mn1() {
  return (
    <div className="min-h-screen py-12 px-4" style={{ background: '#e1eefe' }}>
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-7">What to Look for in a Cheap Web Hosting Provider</h2>
        <p className="text-xl text-gray-700 mb-8 text-justify leading-relaxed max-w-3xl mx-auto">
          Choosing a cheap web hosting provider can be challenging with so many options in the market. Focus on the features you need most to find the best value for your business. Here are the top considerations for selecting a web service provider:
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {features.map((feature, idx) => (
          <div
            key={idx}

            className={`relative group bg-white rounded-lg shadow-md w-96 h-80 flex items-center justify-center overflow-hidden mx-12 my-0${idx === 0 ? ' -ml-4' : ''}${idx === 2 ? ' ml-32' : ''}${idx === 3 ? ' -ml-8' : ''}${idx === 5 ? ' ml-32' : ''}`}
            style={{ background: '#e1eefe' }}
          >
            {/* Image slides out to the left on hover */}
            <img
              src={feature.img}
              alt={feature.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:-translate-x-full z-10"
            />
            {/* Content always visible */}
            <div className="absolute inset-0 flex flex-col justify-center items-center px-8 py-6 w-full h-full z-20">
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">{feature.title}</h3>
              <p className="text-base text-black leading-relaxed text-center">{feature.desc}</p>
            </div>
          </div>
        ))}
        {/* Empty for 3x3 grid symmetry */}
        <div className="bg-transparent shadow-none w-96 h-80 flex flex-col items-center justify-between"></div>
      </div>
    </div>
  );
}

export default Mn1;
