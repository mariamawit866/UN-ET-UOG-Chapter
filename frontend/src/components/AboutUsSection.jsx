import React from 'react';

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gray-200">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Championing Global Citizenship at UN-ET UOG Chapter</h3>
          <p className="text-center mb-8">At UN-ET UOG Charter, we are committed to embedding the ideals of the United Nations into the student experience at the University of Gondar. Our organization thrives on building a community that emphasizes collaboration, leadership, and the pursuit of global awareness through meaningful initiatives.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Section 1 */}
            <div className="bg-white p-6 rounded shadow-md">
              <img src="/assets/images/team1.jpg" alt="Team Project" className="mb-4" /> {/* Replace with actual image */}
              <h4 className="text-xl font-bold mb-2">Participate in Dynamic Team Projects for Social Impact</h4>
              <p>Join one of our six specialized teams to collaborate on initiatives that align with the UN's vision, creating real change within our community and beyond.</p>
            </div>
            {/* Section 2 */}
            <div className="bg-white p-6 rounded shadow-md">
              <img src="/assets/images/team2.jpg" alt="Workshops" className="mb-4" /> {/* Replace with actual image */}
              <h4 className="text-xl font-bold mb-2">Enhance Your Skills through Engaging Workshops and Events</h4>
              <p>Take part in skill-building events designed to equip you with essential competencies, fostering innovation and collaboration among like-minded peers.</p>
            </div>
            {/* Section 3 */}
            <div className="bg-white p-6 rounded shadow-md">
              <img src="/assets/images/team3.jpg" alt="Networking" className="mb-4" /> {/* Replace with actual image */}
              <h4 className="text-xl font-bold mb-2">Network and Collaborate for Meaningful Connections and Partnerships</h4>
              <p>Build a strong network of peers and mentors, creating partnerships that extend beyond the university and actively support global objectives.</p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default AboutUsSection;