import React from 'react';
import img from '../assets/texticon-removebg-preview.png';

const ContactSection = () => {
  return (
    <section className="relative py-16 bg-blue-900 text-white p-4 md:p-16 m-4 md:m-24 rounded-3xl">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        {/* Contact Form - Left Side */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Get in Touch with UN-ET UOG Charter
          </h3>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 rounded-lg">
              Send Your Inquiry
            </button>
          </form>
        </div>

        {/* Right Side - Descriptive Section */}
        <div className="w-full md:w-1/2 bg-blue-800 p-6 rounded-xl shadow-lg mt-8 md:mt-0 md:ml-6">
          <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
          <p className="text-gray-300 mb-4">
            Whether you have questions about our events, want to collaborate, or simply need more info, we’re here to help.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-300">
            <li>Stay updated with our latest programs and events</li>
            <li>Get guidance on how to join our community</li>
            <li>Ask anything related to UN-ET UOG Charter</li>
          </ul>
          <div className="absolute top-2 right-2 m-2 transform translate-x-8 -translate-y-8 ">
            <img src={img} alt="Framed Content" className="w-28 h-28 p-2 shadow-none " />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;