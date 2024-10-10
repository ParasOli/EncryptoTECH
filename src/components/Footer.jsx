// Footer.jsx
import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/company/encrypto.png'; 

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <span className="text-lg font-bold">Encrypto</span>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6">
          <a href="tel:+123456789" className="flex items-center text-sm md:text-base">
            <FaPhone className="mr-2" />
            <span>+977 9868757379</span>
          </a>
          <a href="mailto:example@mail.com" className="flex items-center text-sm md:text-base">
            <FaEnvelope className="mr-2" />
            <span>encrypto@gmail.com</span>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Encrypto, All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
