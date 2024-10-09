// Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/company/encrypto.png'; // Update the path to your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          {/* <img src={logo} alt="Encrypto TECH Logo" className="h-20" /> */}
          <span className="text-lg font-bold">Encrypto TECH</span>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <a href="tel:+123456789" className="flex items-center mr-6">
            <FaPhone className="mr-2" />
            <span>+123 456 789</span>
          </a>
          <a href="mailto:example@mail.com" className="flex items-center">
            <FaEnvelope className="mr-2" />
            <span>example@mail.com</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Encrypto TECH. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
