import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002D62] text-white py-8">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 gap-6 md:gap-0">
          {/* Logo */}
          <div className="text-xl font-bold text-center md:text-left">
            UN-ET UOG Charter
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#" className="hover:text-gray-300">About Us</a>
            <a href="#" className="hover:text-gray-300">Our Teams</a>
            <a href="#" className="hover:text-gray-300">Events</a>
            <a href="#" className="hover:text-gray-300">Join Us</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
            <a href="#" className="hover:text-gray-300">Resources</a>
            <a href="#" className="hover:text-gray-300">FAQ</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="bg-white text-[#002D62] p-2 rounded-full transition-transform hover:scale-110">
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-300">
          © copyright unet-uogcharter.com 2025. All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
