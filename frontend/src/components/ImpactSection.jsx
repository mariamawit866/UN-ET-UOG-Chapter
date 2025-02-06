import React from 'react';

const ImpactSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h3 className="text-2xl font-bold text-center mb-8">Empowering Students for Global Impact</h3>
        <p className="text-center mb-8">UN-ET UOG Chapter is dedicated to instilling the values of the United Nations within the vibrant community of the University of Gondar. Our organization thrives on collaboration, leadership, and active engagement among students, fostering a spirit of unity and purpose.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Section 1 */}
          <div className="bg-white p-6 rounded shadow-md">
            <div className="text-center mb-4">{/*Add icon here*/}</div>
            <h4 className="text-xl font-bold mb-2">Engagement through Active Participation in Global Initiatives</h4>
            <p>Join our six dedicated teams to collaborate on projects that align with the UN's mission, making a tangible impact on campus and beyond.</p>
          </div>
          {/* Section 2 */}
          <div className="bg-white p-6 rounded shadow-md">
            <div className="text-center mb-4">{/*Add icon here*/}</div>
            <h4 className="text-xl font-bold mb-2">Leadership Development through Tailored Events and Workshops</h4>
            <p>Participate in enriching events designed to empower students with skills and knowledge, while promoting a culture of collaboration and innovation.</p>
          </div>
          {/* Section 3 */}
          <div className="bg-white p-6 rounded shadow-md">
            <div className="text-center mb-4">{/*Add icon here*/}</div>
            <h4 className="text-xl font-bold mb-2">Community Impact through Meaningful Connections and Collaborations</h4>
            <p>Our initiatives encourage students to build strong networks, fostering partnerships that extend beyond the university and actively support global goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;