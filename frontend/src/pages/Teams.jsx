import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



const allTeamMembers = [
  {
    name: 'John Doe',
    role: 'Event Coordinator',
    bio: 'John has been with the team for 3 years, coordinating major events.',
    detailedInfo: 'John has worked on over 50 successful events and specializes in event logistics and coordination.',
    social: {
      linkedin: 'https://www.linkedin.com/in/johndoe',
    },
    image: '/images/john-doe.jpg',
  },
  {
    name: 'MUN',
    role: 'Volunteer Manager',
    bio: 'Jane manages the volunteers for all our events, ensuring everything runs smoothly.',
    detailedInfo: 'Jane is an expert in volunteer coordination and has led volunteer teams for large conferences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/janesmith',
    },
    image: 'https://media.licdn.com/dms/image/v2/D5622AQFW9cK3rAXqcA/feedshare-shrink_800/B56ZTcjXkIGsAk-/0/1738867081458?e=1742428800&v=beta&t=zwQYNUE25XM9CRGj-i-KulNIrB2PYLJ10yt81FytYcA',
  },
  {
    name: 'Alice Brown',
    role: 'Marketing Specialist',
    bio: 'Alice leads marketing campaigns and social media strategies.',
    detailedInfo: 'Alice has extensive experience in digital marketing and helps drive engagement for all our events.',
    social: {
      linkedin: 'https://www.linkedin.com/in/alicebrown',
    },
    image: '/images/alice-brown.jpg',
  },
  {
    name: 'Bob White',
    role: 'Technology Lead',
    bio: 'Bob handles all technical aspects of our events and website.',
    detailedInfo: 'Bob is a software engineer with a passion for event tech solutions, ensuring smooth virtual experiences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/bobwhite',
    },
    image: '/images/bob-white.jpg',
  },
  {
    name: 'Bob White',
    role: 'Technology Lead',
    bio: 'Bob handles all technical aspects of our events and website.',
    detailedInfo: 'Bob is a software engineer with a passion for event tech solutions, ensuring smooth virtual experiences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/bobwhite',
    },
    image: '/images/bob-white.jpg',
  },
  {
    name: 'Bob White',
    role: 'Technology Lead',
    bio: 'Bob handles all technical aspects of our events and website.',
    detailedInfo: 'Bob is a software engineer with a passion for event tech solutions, ensuring smooth virtual experiences.',
    social: {
      linkedin: 'https://www.linkedin.com/in/bobwhite',
    },
    image: '/images/bob-white.jpg',
  }
  // Add more team members here...
];

const TeamPage = () => {
  const [visibleMembers, setVisibleMembers] = useState(3);
  const [modalInfo, setModalInfo] = useState(null); // To manage the modal state
  const [showModal, setShowModal] = useState(false); // To toggle modal visibility

  const handleViewMore = () => {
    setVisibleMembers(prev => prev + 3);
  };

  const openModal = (member) => {
    setModalInfo(member);  // Set the team member's detailed info
    setShowModal(true);  // Open the modal
  };

  const closeModal = () => {
    setShowModal(false);  // Close the modal
    setModalInfo(null);  // Reset modal content
  };

  return (
        <><Header/>
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center text-blue-800">Meet Our Teams</h1>
      <p className="text-center text-gray-600 mt-4">Get to know the amazing people behind our events</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {allTeamMembers.slice(0, visibleMembers).map((member, index) => (
          <div key={index} className="group p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-40 object-cover rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">{member.name}</h2>
              <p className="text-blue-600">{member.role}</p>
              <p className="mt-2 text-gray-700">{member.bio}</p>
              <div className="mt-4 flex space-x-4">
                {member.social.linkedin && (
                  <a
                    href={member.social.linkedin}
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
              <button
                onClick={() => openModal(member)}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {visibleMembers < allTeamMembers.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleViewMore}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            View More
          </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-lg w-4/5 md:w-1/3 max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold text-gray-800">{modalInfo.name}</h2>
            <p className="text-blue-600">{modalInfo.role}</p>
            <p className="mt-4 text-gray-700">{modalInfo.detailedInfo}</p>
            <div className="mt-4 flex space-x-4">
              {modalInfo.social.linkedin && (
                <a
                  href={modalInfo.social.linkedin}
                  className="text-blue-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              )}
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default TeamPage;
