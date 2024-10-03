import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <nav className="flex space-x-6 text-lg mb-6">
          <a href="#about" className="hover:text-orange-400">
            About
          </a>
          <a href="#services" className="hover:text-orange-400">
            Services
          </a>
          <a href="#offers" className="hover:text-orange-400">
            Offers
          </a>
        </nav>
        <div className="w-full border-t border-gray-600 mb-8"></div>
        <div className="flex flex-col items-center space-y-6 px-8 md:px-0">
          <Image
            src="/footer-logo.svg"
            alt="Midcreatives Logo"
            width={1000}
            height={200}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
