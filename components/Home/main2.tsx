"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaKickstarter } from 'react-icons/fa';

const Main: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "assets/carousel1.png",
    "assets/carousel2.png",
    "assets/carousel3.png",
    "assets/carousel4.png",
    "assets/carousel5.png",
  ];

  const handlePrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const [text] = useTypewriter({
    words: [
      "web & app development",
      "embedded hardware services",
      "product design & development",
      "prototyping",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  
  const [text2] = useTypewriter({
    words: [
      "Our services",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 70,
    delaySpeed: 100,
  });
  
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      event.target.reset();
    } else {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  // Create refs for accordion bodies
  const accordionRefs: Record<number, React.RefObject<HTMLDivElement>> = {
    1: useRef<HTMLDivElement>(null),
    2: useRef<HTMLDivElement>(null),
    3: useRef<HTMLDivElement>(null),
    4: useRef<HTMLDivElement>(null),
  };
  

  // Function to set accordion height
  const setAccordionHeight = (accordionId: number) => {
    const accordionBody = accordionRefs[accordionId].current;
    if (accordionBody) {
      accordionBody.style.height = `${accordionBody.scrollHeight}px`;
    }
  };

  // Effect to set height when content changes
  useEffect(() => {
    Object.keys(accordionRefs).forEach(key => {
      setAccordionHeight(Number(key));
    });
  }, []);

  // Handle accordion toggle
  const handleAccordionToggle = (accordionId: number) => {
    const accordionBody = accordionRefs[accordionId].current;
    if (accordionBody) {
      const isOpen = accordionBody.style.height !== "0px";
      accordionBody.style.height = isOpen ? "0px" : `${accordionBody.scrollHeight}px`;
    }
  };

  return (
    <div>
      <div className="relative w-screen h-screen flex flex-col items-center p-4 bg-white">
        <script src="https://unpkg.com/flowbite@1.6.4/dist/flowbite.min.js"></script>

        <div className="flex">
          <div className="relative w-1/2 overflow-hidden p-8 bg-white">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-100 h-100 pl-10 items-center"
                />
              ))}
            </div>

            <div className="flex justify-center mt-4">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
                    currentIndex === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
                  onClick={() => goToSlide(index)}
                ></div>
              ))}
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 pt-10 pl-20">The Kequel Smart Bedside Table seamlessly blends technology and convenience, enhancing your modern lifestyle. Designed for optimal functionality, it ensures a restful and connected night's sleep.</p>
            </div>
          </div>
          <div className="p-8 w-1/2">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl font-bold mb-2">Kequel Mini Smart Side Table</h1>
              <p className="text-gray-600 mb-4">470 x 450 x 470 cm (WxDxH)</p>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 ml-2">(0 reviews)</p>
              </div>

              {/* Price */}
              <p className="text-2xl font-bold text-gray-900 mb-4">$</p>

              {/* Choose Color */}
              <div className="mb-4">
                <p className="text-lg font-semibold mb-2">Choose colour</p>
                <div className="flex space-x-4">
                  <div className="w-[110px] h-[110px] bg-gray-300 rounded-lg">
                    <img src="assets/image 92.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="w-[110px] h-[110px] bg-gray-300 rounded-lg">
                    <img src="assets/image 93.png" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="w-[150px] h-[110px] bg-gray-300 rounded-lg">
                    <img src="assets/image 94.png" alt="Image 3" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="w-[110px] h-[110px] bg-gray-300 rounded-lg">
                    <img src="assets/image 95.png" alt="Image 4" className="w-full h-full object-cover rounded-lg" />
                  </div>
                </div>
              </div>

              {/* How to Get */}
              <div className="pt-4">
                <p className="text-lg font-semibold mb-2">How to get</p>
                <div className="bg-white border border-gray-300 pl-11 rounded-md p-4 flex items-center">
                  <div className="flex items-center"><FaKickstarter className="text-6xl m-11" /></div>
                  <div>
                    <p>Kickstarter</p>
                    <p className="text-gray-600 pb-11">Back us on Kickstarter to secure your Kequel Mini Bedside Table.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-screen bg-white">
        <hr className="border-t border-gray-300" />
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-1">
            <button
              type="button"
              className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-poppins text-black dark:text-black hover:bg-white gap-3"
              onClick={() => handleAccordionToggle(1)}
              aria-expanded="false"
              aria-controls="accordion-collapse-body-1"
            >
              <span className="text-3xl">Product details</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0 dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-1"
            className="hidden"
            ref={accordionRefs[1]}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-black">
              <p>Our product features state-of-the-art technology integrated with a sleek and modern design, ensuring both functionality and style.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-screen bg-white">
        <hr className="border-t border-gray-300" />
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-2">
            <button
              type="button"
              className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-poppins text-black dark:text-black hover:bg-white gap-3"
              onClick={() => handleAccordionToggle(2)}
              aria-expanded="false"
              aria-controls="accordion-collapse-body-2"
            >
              <span className="text-3xl">Quality & Warranty</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0 dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-2"
            className="hidden"
            ref={accordionRefs[2]}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-black">
              <p>We ensure that our product meets the highest standards of quality and comes with a comprehensive warranty to guarantee your satisfaction.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-screen bg-white">
        <hr className="border-t border-gray-300" />
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-3">
            <button
              type="button"
              className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-poppins text-black dark:text-black hover:bg-white gap-3"
              onClick={() => handleAccordionToggle(3)}
              aria-expanded="false"
              aria-controls="accordion-collapse-body-3"
            >
              <span className="text-3xl">Shipping & Delivery</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0 dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-3"
            className="hidden"
            ref={accordionRefs[3]}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-black">
              <p>We offer reliable shipping and delivery services, ensuring that your product arrives safely and promptly to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-screen h-screen bg-white">
        <hr className="border-t border-gray-300" />
        <div id="accordion-collapse" data-accordion="collapse">
          <h2 id="accordion-collapse-heading-4">
            <button
              type="button"
              className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-poppins text-black dark:text-black hover:bg-white gap-3"
              onClick={() => handleAccordionToggle(4)}
              aria-expanded="false"
              aria-controls="accordion-collapse-body-4"
            >
              <span className="text-3xl">Returns & Exchanges</span>
              <svg
                data-accordion-icon
                className="w-3 h-3 rotate-180 shrink-0 dark:text-black"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </h2>
          <div
            id="accordion-collapse-body-4"
            className="hidden"
            ref={accordionRefs[4]}
          >
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-black">
              <p>Our return and exchange policy is designed to make the process as smooth as possible, giving you peace of mind with your purchase.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="p-6 bg-gray-200 text-center">
        <h2 className="text-xl font-bold">Contact Us</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="submit"
            className={`px-4 py-2 text-white bg-blue-500 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </footer>
    </div>
  );
};

export default Main;
