import React from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/4675.jpg";
import img3 from "../assets/16.jpg";
import joinUsImg from "../assets/joinus.svg";
import frameImg from "../assets/1.jpg";
import { FaStar, FaHeart, FaRocket } from "react-icons/fa"; // For decorative Icons
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs"; // Zig-zag arrows

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between relative">
      {/* Left Content */}
      <div className="relative max-w-2xl text-center md:text-left md:w-1/2 mb-8 md:mb-0">
        {/* Decorative Rocket Icon */}
        <FaRocket className="absolute top-40 right-10 text-purple-500 text-3xl animate-spin" />
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Empower Your Future With
          <span className="block text-blue-600">UN-ET UOG</span>
          <span className="block">Chapter Join Us</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Join a vibrant community at the University of Gondar, dedicated to
          leadership, global awareness, and engagement among students.
        </p>
        <div className="flex items-center gap-6 justify-center md:justify-start">
          <a
            href="#"
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Join Us Now
          </a>
          <a
            href="#"
            className="text-blue-600 flex items-center hover:underline"
          >
            Discover More
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
        {/* Framed Image on Upper Right */}
        <div className="absolute top-[-90px] right-[-150px] hidden md:block border-4 border-blue-500 p-2 rounded-full shadow-lg">
          <img src={frameImg} alt="Framed Content" className="w-40 h-52 object-cover rounded-full" />
        </div>
      </div>

      {/* Right Content */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        <div className="relative bg-blue-100 rounded-3xl p-6 w-full max-w-lg pb-12">
          {/* Decorative Icons */}
          {/* <FaStar className="absolute top-2 left-2 text-yellow-400 text-3xl animate-pulse" /> */}
          <FaHeart className="absolute bottom-4 right-4 text-red-500 text-3xl animate-bounce" />
          <FaRocket className="absolute top-10 right-10 text-purple-500 text-2xl animate-pulse" />

          {/* Decorative Zig-Zag Arrows */}
          <BsArrowDownLeft className="absolute top-12 left-16 text-blue-500 text-3xl" />
          <BsArrowUpRight className="absolute bottom-12 right-160 text-green-500 text-3xl" />

          {/* Main Image with Vertical Space */}
          <div className="relative w-full rounded-2xl overflow-hidden">
            <img src={img1} alt="Main scene" className="w-full h-full object-cover rounded-xl mt-4 mb-4" />
          </div>
          {/* Overlapping Images */}
          <div className="absolute top-4 right-4 w-72 h-40 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <img src={img2} alt="Small overlay" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-4 left-4 w-72 h-40 rounded-xl overflow-hidden border-4 border-white shadow-md">
            <img src={img3} alt="Small overlay" className="w-full h-full object-cover" />
          </div>
          {/* Custom Join Us Image */}
          <div className="absolute -left-12 top-0">
            <img src={joinUsImg} alt="Join Us" className="w-40 h-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;