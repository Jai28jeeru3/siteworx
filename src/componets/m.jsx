import React from 'react';
import T5669487 from '../imge/5669487.jpg';
import images1 from '../imge/images1.jpg';
import images2 from '../imge/images2,jpg.webp';
import images3 from '../imge/images3.jpg';
import images4 from '../imge/images4.jpg';
import images5 from '../imge/images5.jpg';



// Custom SVG Icons matching the image
const SpeedIcon = () => (
   <img
      src={T5669487}
      alt="Speed Icon"
      className="w-16 h-16 text-5 object-contain feature-icon"
    />
);

const SupportIcon = () => (
  <img src={images1} alt="Support" className="feature-icon w-16 h-16 object-contain" />
);

const ControlPanelIcon = () => (
  <img
      src={images2}
      alt="Control Panel Icon"
      className="w-16 h-16 object-contain feature-icon"
    />
);

const SecurityIcon = () => (
  <img
      src={images3}
      alt="Security Icon"
      className="w-16 h-16 object-contain feature-icon"
    />
);

const LayersIcon = () => (
  <img
      src={images4}
      alt="Layers Icon"
      className="w-16 h-16 object-contain feature-icon"
    />
);

const ServicesIcon = () => (
  <img
      src={images5}
      alt="Services Icon"
      className="w-16 h-16 object-contain feature-icon"
    />
);

export default function SiteWorxFeaturesSection() {
  const features = [
    {
      icon: <SpeedIcon />,
      title: "Superfast website speed and uptime",
      description: "SiteWorx's web hosting uses advanced server technology and resources to let you experience the best performance, irrespective of what web hosting plan you choose with us."
    },
    {
      icon: <SupportIcon />,
      title: "24/7 Customer Support", 
      description: "SiteWorx is best known among its users for its multi-channeled customer support. Our customer support team is available 24/7 on these platforms to ensure that the users get support through email, phone and live chat."
    },
    {
      icon: <ControlPanelIcon />,
      title: "Intuitive Control Panel",
      description: "SiteWorx provides you cPanel to efficiently help you manage your web hosting account. Our users consider it as one of our user-friendly options because its UI makes it easier to navigate and monitor their usage."
    },
    {
      icon: <SecurityIcon />,
      title: "Built-in Security Features",
      description: "Without robust security your business's website and data can be easily misused by cyber criminals. SiteWorx's every plan offers built-in security features to protect your website from all potential threats by default."
    },
    {
      icon: <LayersIcon />,
      title: "Cost-effective Services",
      description: "With SiteWorx, you get the best services at a price that is hard to beat. You won't even have to stress about getting unpleasant surprises such as hidden costs or unreliable services. We promise!"
    },
    {
      icon: <ServicesIcon />,
      title: "Offer Services",
      description: "Most of the services offered by a cheap web hosting provider www.siteworx.com aren't helpful for small scale businesses, or the large-scale companies looking for long-term web hosting solutions. This is one of the reasons SiteWorx offers different types of web hosting plans."
    }
  ];

  return (
    <>
      <style jsx>{`
        .features-container {
          background-color: #dde9f9;
          padding: 40px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .feature-card {
          background: white;
          border-radius: 12px;
          padding: 30px 25px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e9ecef;
        }
        
        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }
        
        .icon-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .feature-icon {
          width: 64px;
          height: 64px;
          padding: 12px;
          background: linear-gradient(135deg,  #dde9f9 100%);
          border-radius: 50%;
          border: 2px solid #b8e6df;
        }
        
        .feature-title {
          font-size: 18px;
          font-weight: 600;
          color: #000;
          margin-bottom: 15px;
          line-height: 1.3;
          letter-spacing: -0.02em;
        }
        
        .feature-description {
          font-size: 18px;
          color: #6c757d;
          line-height: 1.6;
          margin: 0;
          text-align: left;
        }
        
        @media (max-width: 768px) {
          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .feature-card {
            padding: 25px 20px;
          }
          
          .feature-title {
            font-size: 16px;
          }
          
          .feature-description {
            font-size: 13px;
          }
        }
        
        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <div className="features-container mt-[100px]">
       <div className='h-[250px] w-full bg-[#e2efff] mb-10'>
            <p className="text-center text-4xl text-[#115256]  font-serif ">The SiteWorx Advantage for Web Hosting Services in India</p>
               <p className="m-auto  text-center w-[80%] text-black text-xl text-md font-serif mt-3">SiteWorx offers the best and cheap web hosting solutions with the backend handled by professionals with industry expertise. Our web hosting combines one of the best features in every package.  But why should you choose SiteWorx advantage? Here the all the features that make us stand out:</p>
               <p className='text-center text-[#1A1C26] text-xl font-serif mt-3'>Build For Speed</p>
               <p className="text-center text-[#1A1C26] text-4xl font-serif mt-3">Why SiteWorx for web hosting service in India?</p>
       </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">
                {feature.title}
              </h3>
              <p className="feature-description">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}