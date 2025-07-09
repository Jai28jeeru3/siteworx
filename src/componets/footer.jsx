import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import siteworex from "../imge/siteworex.png"

const Footer = () => {
  return (
    <footer className="bg-[#0a2259] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white rounded-lg p-2 mr-3">
                  <img src={siteworex} className="h-[40px] w-[150px] rounded-lg" alt="" />
              </div>
              {/* <span className="text-xl font-semibold">SiteWorx</span> */}
            </div>
            
            <p className="text-white text-lg md:text-xl mb-6 leading-relaxed">
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
          <div className="ml-16">
            <h3 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
              Services
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li><a href="#" className="text-white hover:text-white transition-colors">Dedicated Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Email Marketing Server</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Cloud Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">VPS</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Reseller Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Shared Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Java Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">CMS Hosting</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Ecommerce Hosting</a></li>
            </ul>
          </div>

          {/* Products Section */}
          <div className="ml-16">
            <h3 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
              Products
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li><a href="#" className="text-white hover:text-white transition-colors">Google Workspace</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Licenses</a></li>
            </ul>

            <h3 className="text-white text-xl font-semibold mb-6 mt-8 uppercase tracking-wide">
              Legal
            </h3>
            <ul className="space-y-4 text-lg md:text-xl">
              <li><a href="#" className="text-white hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Privacy policy</a></li>
              <li><a href="#" className="text-white hover:text-white transition-colors">Refund policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 uppercase tracking-wide">
              Contact - Us
            </h3>
            <div className="flex items-center mb-4 text-lg md:text-xl">
              <Mail className="w-5 h-5 mr-3 text-white" />
              <a href="mailto:info@siteworx.in" className="text-white hover:text-white transition-colors">
                info@siteworx.in
              </a>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:opacity-80">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-sky-400"><path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.22-1.63A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.77 0-3.5-.46-5.01-1.33l-.36-.21-3.69.97.99-3.59-.23-.37A9.94 9.94 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3.01.15.2 2.03 3.1 5.02 4.22.7.24 1.25.38 1.68.49.71.18 1.36.15 1.87.09.57-.07 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:opacity-80">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-blue-400"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 0 0-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-blue-700"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76c.97 0 1.75.79 1.75 1.76s-.78 1.76-1.75 1.76zm15.25 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-pink-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 8.332 2 8.741 2 12c0 3.259.012 3.668.07 4.948.058 1.281.318 2.393 1.298 3.373.981.981 2.093 1.241 3.374 1.299C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.299.981-.98 1.241-2.092 1.299-3.373.058-1.28.07-1.689.07-4.948 0-3.259-.012-3.668-.07-4.948-.058-1.281-.318-2.393-1.299-3.373-.98-.981-2.092-1.241-3.373-1.299C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:opacity-80">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="text-red-600"><path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.657 9.128 8.438 10.093-.117-.858-.223-2.178.047-3.118.242-.828 1.557-5.281 1.557-5.281s-.396-.792-.396-1.963c0-1.838 1.067-3.211 2.396-3.211 1.13 0 1.676.849 1.676 1.867 0 1.137-.724 2.834-1.096 4.414-.312 1.32.663 2.396 1.963 2.396 2.356 0 3.941-3.021 3.941-6.594 0-2.729-1.844-4.779-5.188-4.779-3.771 0-6.006 2.828-6.006 5.969 0 1.09.418 2.258.941 2.892.104.125.119.234.087.36-.095.39-.308 1.237-.35 1.409-.055.23-.18.28-.418.17-1.563-.726-2.537-3.004-2.537-4.84 0-3.941 3.334-8.646 9.926-8.646 5.297 0 8.773 3.824 8.773 7.938 0 5.438-3.021 9.484-7.219 9.484-1.447 0-2.805-.782-3.27-1.664l-.889 3.389c-.266 1.01-.787 2.273-1.176 3.045C9.293 23.941 10.633 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-teal-600 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center w-full">
            <div className="text-white text-base md:text-lg mb-4 md:mb-0">
              © Copyright 2024 Site Worx
            </div>
          </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;