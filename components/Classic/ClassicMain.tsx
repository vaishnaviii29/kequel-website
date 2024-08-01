"use client";

import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Footer from "@/components/Footer";

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

  return (
  <div>
    <div className="relative w-screen h-screen flex flex-col items-center p-4 bg-white">
        <script src="https://unpkg.com/flowbite@1.6.4/dist/flowbite.min.js"></script>

         
        <div className="flex">
        <div className="relative w-1/2 overflow-hidden p-8  bg-white">
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
      <div className="p-8 w-1/2 bg-white">
    {/* Product Title */}
    <div>
      <h1 className="text-2xl font-bold mb-2">Kequel Mini Smart Side Table</h1>
      <p className="text-gray-600 mb-4">470 x 450 x 470 cm (WxDxH)</p>

      {/* Rating */}
      <div className="flex items-center mb-4">
        <div className="text-yellow-400 text-lg">
          ⭐⭐⭐⭐⭐
        </div>
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
      <div className=" pt-4 ">
        <p className="text-lg font-semibold mb-2">How to get</p>
        <div className="bg-white border border-gray-300 pt-11 pl-20 rounded-md p-4">
  <p>Kickstarter</p>
  <p className="text-gray-600 pb-11">Back us on Kickstarter to secure your Kequel Mini Bedside Table.</p>
</div>
      </div>
    </div>
  </div>
</div>

<div className="relative w-screen h-screen bg-white">
  <hr className="border-t border-gray-300"></hr>
  <div id="accordion-collapse" data-accordion="collapse">
    <h2 id="accordion-collapse-heading-1">
      <button type="button" className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-poppins text-black dark:text-black hover:bg-white gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
        <span className="text-3xl">Product details</span>
        <svg data-accordion-icon className="w-5 h-5 shrink-0 mr-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
      <div className="p-5 pl-10 pr-10">
        <p className="mb-2 text-black text-xl pl-10 pr-72">The Kequel Smart Bedside Table is a next-generation nightstand that enhances your modern lifestyle. It combines advanced technology with ultimate convenience, ensuring a restful and connected night's sleep.

</p>
<div className="flex space-x-6 pl-5">
<div className="w-[110px] h-[110px]  rounded-lg pt-3">
    <img src="assets/image 92.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
  </div>
  <div className="w-[110px] h-[110px]  rounded-lg pl-5">
    <img src="assets/image 93.png" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
  </div>
  </div>
       {/*  <p className="text-black text-xl pl-5 pr-32">It combines advanced technology with ultimate convenience, ensuring a restful and connected night's sleep.</p>
        <p className="text-black text-xl pl-5 pr-32">The Kequel Smart Bedside Table offers the following features:</p>
        <p className="text-black text-xl pl-5 pt-7 pr-32">- Wireless charging pad<br/>- Multiple USB ports,<br/>- Smart lighting system<br/>- App control<br/>- Air quality monitoring<br/>- Smart aroma diffuser</p>
       */}</div>
    </div>
    <h2 id="accordion-collapse-heading-2">
    <button
  type="button"
  className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-black border-t border-gray-300  dark:text-black gap-3"
  data-accordion-target="#accordion-collapse-body-2"
  aria-expanded="false"
  aria-controls="accordion-collapse-body-2"
>   <span className="text-3xl">What’s included</span>
        <svg data-accordion-icon className="w-5 h-5 shrink-0 mr-9" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
      <div className="p-5 pt-5 pl-20">
        <p className="mb-2 text-black text-xl pl-10 pr-32">The Kequel Smart Bedside Table is made up of multiple components, each designed to enhance your modern lifestyle. You may find the details of these components below:</p>
        <div className="flex flex-col pl-10 space-y-6">
  <div className="flex items-center space-x-6">
    <div className="w-[150px] h-[150px]  pt-3">
      <img src="assets/banner.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <p className="text-black">Power Sockets</p>
  </div>
  <div className="flex items-center space-x-6">
    <div className="w-[150px] h-[150px]">
      <img src="assets/banner2.png" alt="Image 2" className="w-full h-full object-cover rounded-lg" />
    </div>
    <p className="text-black">USB and Type-C Charging Module</p>
  </div>
  <div className="flex items-center space-x-6">
    <div className="w-[150px] h-[150px] pt-3">
      <img src="assets/banner3.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <p className="text-black">Ambient and Motion Detection Lights</p>
  </div>
 
  <div className="flex items-center space-x-6">
    <div className="w-[150px] h-[150px]  pt-3">
      <img src="assets/banner4.png" alt="Image 1" className="w-full h-full object-cover rounded-lg" />
    </div>
    <p className="text-black">Smart Compartment</p>
  </div>
 
</div>

      </div>
    </div>
    <h2 id="accordion-collapse-heading-3">
      <button type="button" className="flex items-center pl-20 justify-between w-full p-5 font-medium rtl:text-right text-black border-t border-gray-300   dark:text-black gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
        <span className="text-3xl">Specification’s</span>
        <svg data-accordion-icon className="w-5 h-5  mr-9 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
      <div className="p-5">
        {/* <ul className="list-disc pl-20">
  <li>Now this is a story all about how, my life got flipped-turned upside down</li>

</ul>*/} <div className="container mx-auto ">
    <div className="grid grid-cols-2 gap-4">
    <ul className="list-disc pl-5 space-y-2 text-gray-700">
      <li className="text-3xl text-bold font-medium">PRODUCT</li>
      <div className="flex justify-between items-center">
      <div className="font-medium">Dimensions (W x D x H)</div>
      <h2 className="text-left">470 x 450 x 470</h2>
    </div>
    <div className="flex justify-between">
      <div className="font-medium">Rated Power</div>
      <h2 className="text-left">100w</h2>
    </div>
    <div className="flex justify-between items-center">
      <div className="font-medium">Rated Voltage</div>
      <h2 className=" text-center pl-60 ">00-240V, 50/60Hz</h2>
    </div>
   
     
     
    
      <li className="text-3xl text-bold font-medium pt-5">CONTROL</li>
      <div className="flex justify-between items-center">
      <div className="font-medium">Method</div>
      <h2 className="text-left">Smart Knob, Smartphone App Control(Wifi)</h2>
    </div>
      <li className="text-3xl text-bold font-medium pt-5">Charging</li>
      <div className="flex justify-between items-center">
      <div className="font-medium">Wireless Charging Output</div>
      <h2 className="text-left">15W</h2>
    </div>
    <div className="flex justify-between">
      <div className="font-medium">USB A and USB C Power Output(PD)</div>
      <h2 className="text-left">20W (PD Supported)</h2>
    </div>
    <div className="flex justify-between items-center">
      <div className="font-medium">Multiple Protections</div>
      <h2 className=" text-center pl-60 ">Overvoltage, overcurrent, short circuit, overtemperature, etc</h2>
    </div>
      <li className="text-3xl text-bold font-medium pt-5">Light</li>
      <div className="flex justify-between items-center">
      <div className="font-medium">Light Power </div>
      <h2 className="text-left">5W</h2>
    </div>
    </ul>
      
    </div>
  </div>
</div> 
    </div>
    <h2 id="accordion-collapse-heading-4">
      <button type="button" className="flex items-center justify-between w-full p-5 pl-20  font-medium rtl:text-right text-black border border-gray-200  dark:text-black gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
        <span className="text-3xl">Reviews</span>
        <svg data-accordion-icon className="w-5 h-5 mr-9 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
        </svg>
      </button>
    </h2>
    <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
    <p className="mb-2 text-black text-xl pl-20 pr-80 pt-5">Sarah M.⭐⭐⭐⭐⭐  <br></br>
    The wireless charging and smart lighting are incredibly convenient. The air quality monitor gives me peace of mind. Highly recommend!</p>
    <p className="mb-2 text-black text-xl pl-20 pt-5 pr-80">
James R. ⭐⭐⭐⭐⭐ <br></br> 
Everything is integrated into one sleek table. The Kequel App makes controlling the lights and aroma diffuser easy. Perfect for my modern bedroom.</p>
    </div>
  </div>
  

</div>


<hr className="border-t border-gray-300"></hr> 

      <section className="text-center">
        <p className="text-5xl font-normal pt-5 mb-5">"We are open for collaboration"</p>
      </section>
     

      
  
 </div>

           </div>




        


  );
};

export default Main;

