import React from "react";
import img from '../assets/green-curve-shape-arrow.svg'
import img1 from '../assets/swirl.svg'
import img2 from '../assets/dart.svg'
import { FaGlobe, FaBullseye, FaSearch } from "react-icons/fa";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Empowering{" "}
            <span className="relative inline-block mb-2">
              Students for Global
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
              <span className="absolute -bottom-5 left-6 w-3/5 h-1 bg-orange-300 "></span>
            </span>
            <br /> Impact
          </h1>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-600 text-lg">
            UN-ET UOG Chapter is dedicated to instilling the values of the United Nations within the vibrant community of the University of Gondar. Our organization thrives on collaboration, leadership, and active engagement among students, fostering a spirit of unity and purpose.
          </p>
          <img src={img} alt="Curved Arrow" className=" w-40 h-32 text-teal-600" />
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {/* Engagement Card */}
        <div className="bg-gray-50 rounded-3xl p-8 relative shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Engagement through{" "}
            <span className="text-blue-900">Active Participation</span> in Global Initiatives
          </h3>
          <p className="text-gray-600 mb-8">
            Join our six dedicated teams to collaborate on projects that align with the UN's mission, making a tangible impact on campus and beyond.
          </p>
          <img src={img1} alt="Spiral Icon" className="w-12 h-12 text-teal-600 absolute bottom-4 left-8" />
          <div className="absolute bottom-4 right-8 bg-gray-200 rounded-full p-3">
            <FaSearch className="w-12 h-8 text-gray-700" />
          </div>
        </div>

        {/* Leadership Development Card */}
        <div className="bg-gray-50 rounded-3xl p-8 relative shadow-lg">
          <div className="text-teal-600 mb-6">
            <FaGlobe className="w-16 h-16" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            Leadership Development through{" "}
            <span className="text-blue-900">Tailored Events</span> and Workshops
          </h3>
          <p className="text-gray-600 mb-8">
            Participate in enriching events designed to empower students with skills and knowledge, while promoting a culture of collaboration and innovation.
          </p>
        </div>

        {/* Community Impact Card */}
        <div className="bg-gray-50 rounded-3xl p-8 relative shadow-lg">
          <h3 className="text-2xl font-bold mb-4">
            Community Impact through{" "}
            <span className="text-blue-900">Meaningful Connections</span> and Collaborations
          </h3>
          <p className="text-gray-600 mb-8">
            Our initiatives encourage students to build strong networks, fostering partnerships that extend beyond the university, and support global goals.
          </p>
          <img src={img2} alt="Target Icon" className="w-16 h-16 text-teal-600 absolute bottom-4 left-8" />
          <div className="absolute bottom-4 right-8 bg-gray-200 rounded-full p-3">
            <FaBullseye className="w-12 h-12 text-gray-700" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
