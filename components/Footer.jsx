import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WealthGenix Branding */}
          <div>
            <h2 className="text-xl font-semibold">WealthGenix</h2>
            <p className="text-sm text-gray-400 mt-2">
              AI-driven insights to optimize your wealth management strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><Link href="/"><span className="hover:text-gray-200 cursor-pointer">Home</span></Link></li>
              <li><Link href="/about"><span className="hover:text-gray-200 cursor-pointer">About Us</span></Link></li>
              <li><Link href="/services"><span className="hover:text-gray-200 cursor-pointer">Services</span></Link></li>
              <li><Link href="/contact"><span className="hover:text-gray-200 cursor-pointer">Contact</span></Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-gray-400 mt-2">
              Get the latest AI-powered wealth insights.
            </p>
            <div className="mt-3 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 text-gray-900 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} WealthGenix. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
