import React from 'react';
import teamProjects from '../assets/1.jpg';
import workshops from '../assets/1.jpg';
import network from '../assets/1.jpg';

const GlobalAwarenessSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="flex justify-between items-start mb-20  px-24 flex-col md:flex-row">
        <h2 className="text-5xl font-bold max-w-xl relative">
          Fostering Global 
          <span className="block">Awareness and</span>
          <span className="block">Leadership</span>
          <div className="absolute -bottom-5 left-2 w-64 h-1 bg-yellow-400"></div>
          <div className='absolute -bottom-7 left-7 w-72 h-1 bg-yellow-400 curve'></div>
        </h2>
        
        <div className="max-w-xl mt-6 md:mt-0">
          <p className="text-gray-700 text-lg">
            UN-ET UOG Charter empowers students at the University of Gondar to embrace the ideals of the United Nations through active engagement and collaboration. Our organization is committed to nurturing leadership skills and promoting a sense of global responsibility among our members.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-start">
          <img src={teamProjects} alt="Team Projects" className="rounded-2xl w-full h-64 object-cover mb-6" />
          <h3 className="text-2xl font-bold mb-4">Participate in Dynamic Team Projects for Social Impact</h3>
          <p className="text-gray-600">Join one of our six specialized teams to collaborate on initiatives that align with the UN's vision, creating real change within our community and beyond.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-start">
          <img src={workshops} alt="Workshops" className="rounded-2xl w-full h-64 object-cover mb-6" />
          <h3 className="text-2xl font-bold mb-4">Enhance Your Skills through Engaging Workshops and Events</h3>
          <p className="text-gray-600">Take part in skill-building events designed to equip you with essential competencies, fostering innovation and collaboration among like-minded peers.</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 rounded-3xl p-8 flex flex-col items-start">
          <img src={network} alt="Networking" className="rounded-2xl w-full h-64 object-cover mb-6" />
          <h3 className="text-2xl font-bold mb-4">Network and Collaborate for Meaningful Connections and Partnerships</h3>
          <p className="text-gray-600">Build a strong network of peers and mentors, creating partnerships that extend beyond the university and actively support global objectives.</p>
        </div>
      </div>
    </section>
  );
};

export default GlobalAwarenessSection;
