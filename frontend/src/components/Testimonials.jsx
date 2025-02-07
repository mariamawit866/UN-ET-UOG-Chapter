import React from 'react';
import img from '../assets/1.png';
import img1 from '../assets/3.png';
import img2 from '../assets/4.png'
import { FaStar, FaHeart, FaRocket } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="pt-4 pb-2 mb-2 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          <FaStar className="absolute top-0 right-50 text-orange-500 text-2xl animate-pulse" />
          
          {/* Testimonial 1 */}
          <div className="bg-white px-6 rounded w-2/3 ">
            <img src={img1} alt="Emily Smith" className="h-12 w-12 rounded-full mb-4" /> {/* Replace with actual image and name */}
            <p className="text-gray-700 mb-2 text-lg">Emily Smith</p>
            <p className='text-sm'>UN-ET UOG Chapter has been instrumental in helping students find their voice and fostering a sense of community on campus.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white px-6 rounded w-2/3">
            <img src={img} alt="Michael Johnson" className="h-12 w-12 rounded-full mb-4" /> {/* Replace with actual image and name */}
            <p className="text-gray-700 mb-2 text-lg ">Michael Johnson</p>
            <p className='text-sm'>Participating in UN-ET UOG Chapter has allowed me to explore unique leadership opportunities while impacting our campus positively.</p>
          </div>
          <div className="bg-white px-6 rounded w-2/3">
            <img src={img2} alt="Michael Johnson" className="h-12 w-12 rounded-full mb-4" /> {/* Replace with actual image and name */}
            <p className="text-gray-700 mb-2 text-lg ">Nelson Amido</p>
            <p className='text-sm'>Participating in UN-ET UOG Chapter has allowed me to explore unique leadership opportunities while impacting our campus positively.</p>
          </div>
          {/*  more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;