import React from "react";
import { FaFacebook, FaKickstarter, FaTwitter, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white p-5 flex flex-col md:flex-row justify-between w-full" id="footer" style={{ height: '240px' }}>
      <div className="flex flex-col justify-end h-full space-y-3 pb-7">
        <p>Contact: +91 7720076457  |  Email: quoppo@xyz</p>
      </div>
      <div className="flex flex-col pb-5 justify-end items-end h-full space-y-3">
        <div className="flex flex-col space-y-3">
          <p>Subscribe to our newsletter and stay up to date about the company.</p>
          <div className="flex items-center w-full">
  <input
    type="email"
    placeholder="Enter your email address"
    className="px-6 py-2 rounded-l-3xl text-black w-full"
  />
  <button className="bg-white text-black px-4 py-2 rounded-r-3xl">Signup</button>
</div>

        </div>
        <div className="flex justify-center pt-10 md:justify-end space-x-8 mt-3 md:mt-0">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Kickstarter"
          >
            <FaKickstarter size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
