import React from 'react';

const ContactSection = () => {
  return (
    <section className="py-16 bg-blue-900 text-white">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Connect with UN-ET UOG Charter</h3>
        <form className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Your Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Send Your Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;