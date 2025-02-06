import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">What Our Members Say</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <img src="/assets/images/emily.jpg" alt="Emily Smith" className="h-12 w-12 rounded-full mb-4" /> {/* Replace with actual image */}
            <p className="text-gray-700 mb-2">Emily Smith</p>
            <p>UN-ET UOG Chapter has been instrumental in helping students find their voice and fostering a sense of community on campus.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <img src="/assets/images/michael.jpg" alt="Michael Johnson" className="h-12 w-12 rounded-full mb-4" /> {/* Replace with actual image */}
            <p className="text-gray-700 mb-2">Michael Johnson</p>
            <p>Participating in UN-ET UOG Chapter has allowed me to explore unique leadership opportunities while impacting our campus positively.</p>
          </div>
          {/*  more testimonials as needed */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;