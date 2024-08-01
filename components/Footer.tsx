import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div
      className="bg-black text-white p-5 flex justify-between w-full"
      id="footer"
    >
      <div className="flex flex-col space-y-3">
        <a href="#services" className="text-xl">
          Services
        </a>
        <a href="/about-us" className="text-xl">
          About Us
        </a>
        <a href="#contactUs" className="text-xl">
          Contact Us
        </a>
      </div>
      <div className="flex flex-col text-right space-y-2">
        <p className="text-sm">Pune</p>
        <p className="text-sm">meskolabs@gmail.com</p>
        <p className="text-sm">+91 7720076457</p>
        <div className="flex justify-end space-x-3">
          <a
            href="https://www.instagram.com/meskolabs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com/company/meskolabs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
