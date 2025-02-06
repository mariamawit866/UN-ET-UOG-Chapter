import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; copyright un-etuogcharter.com 2025. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-2xl"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-2xl"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-2xl"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;