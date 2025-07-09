import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import siteworex from "../imge/s1.jpg"

const Footer = () => {
  return (
    <footer className="text-white bg-[#0c2570] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className=" rounded-lg p-2 mr-3">
                  <img src={siteworex} className="h-[40px] w-[150px] rounded-lg" alt="" />
              </div>
              {/* <span className="text-xl font-semibold">SiteWorx</span> */}
            </div>
            
            <p className="text-white mb-6 leading-relaxed">
              Siteworx offers the complete solution for online businesses including Domain Registration, Web Designing, Web Development, App Development, Software Development, MLM Software Development, Web Hosting, VPS Server, Dedicated Server, Email Marketing Server, Business Email, cPanel Licenses Etc. Working 24/7 at your service.
            </p>
            
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Payments We Accept</h4>
              <div className="flex space-x-2">
                <div className="bg-red-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  MasterCard
                </div>
                <div className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-semibold">
                  RuPay
                </div>
                <div className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  PayPal
                </div>
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  UPI
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-8 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Dedicated Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Email Marketing Server</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">VPS</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Reseller Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Shared Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Java Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">CMS Hosting</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Ecommerce Hosting</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wide">
              Products
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-teal-100 hover:text-white transition-colors">Google Workspace</a></li>
              <li><a href="#" className="text-teal-100 hover:text-white transition-colors">Licenses</a></li>
            </ul>

            <h3 className="text-white text-lg font-semibold mb-6 mt-8 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-white hover:text-gray-200 transition-colors">Refund policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6 uppercase tracking-wide">
              Contact - Us
            </h3>
            <div className="flex items-center mb-4">
              <Mail className="w-5 h-5 mr-3 text-white" />
              <a href="mailto:info@siteworx.in" className="text-white hover:text-gray-200 transition-colors">
                info@siteworx.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="text-teal-200 text-sm mb-4 md:mb-0">
              © Copyright 2024 Site Worx
            </div>
           
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;