import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer2: React.FC = () => {
  return (
    <div className="p-7">
      <div className="px-3">
        <hr />
      </div>
      <div className="p-3 flex flex-col lg:flex-row gap-3 lg:gap-20 font-inter">
        <div className="flex flex-col justify-between gap-1 lg:w-1/3">
          <h2 className="text-3xl">Site Name</h2>
          <div className="flex gap-5 text-gray-500 text-xs px-2">
            <a
              href="https://x.com/meskolabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/meskolabs/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/meskolabs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 lg:w-2/4">
          <div className="flex gap-3 sm:gap-5 justify-between text-center">
            <div>
              <div className="flex flex-col gap-3">
                <p className="text-xl">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <p className="text-xl">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-3">
                <p className="text-xl">Topic</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
                <p>Page</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
