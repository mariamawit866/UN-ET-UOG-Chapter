import React from "react";
import img from "../assets/1.jpg";
import imgg from "../assets/16.jpg";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex items-start justify-between">
      {/* Left Content */}
      <div className="max-w-2xl">
        <h1 className="text-6xl font-bold leading-tight mb-6">
          Empower Your Future With
          <span className="block">UN-ET UOG</span>
          <span className="block">Chapter Join Us</span>
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Join a vibrant community at the University of Gondar, dedicated to
          leadership, global awareness, and engagement among students.
        </p>

        <div className="flex items-center gap-6">
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
      </div>

      {/* Right Content */}
      <div className="relative w-full max-w-2xl">
        {" "}
        {/* Set max width for the right section */}
        <div className="bg-blue-100 rounded-3xl p-6">
          {/* Images Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={img}
                alt="Classroom scene"
                className="w-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src={imgg}
                alt="Teaching scene"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Join Us Badge */}
          <div className="absolute -left-12 top-1/4">
            <div className="bg-orange-500 text-white px-6 py-4 rounded-full transform rotate-8">
              Join Us
            </div>
          </div>

          {/* Decorative Dots */}
          <div className="absolute bottom-8 right-8">
            <div className="grid grid-cols-3 gap-1">
              <span className="w-2 h-2 bg-orange-300 rounded-full" />
              <span className="w-2 h-2 bg-orange-300 rounded-full" />
              <span className="w-2 h-2 bg-orange-300 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
