"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ContactForm } from "../common/contactForm";
import backgroundImage from "../../public/assets/modha/banner1.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import backgroundImage4 from "../../public/assets/dlvr.png";

const Main: React.FC = () => {

  
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
  
      <div className="">
        <div
            className=" w-screen h-screen place-items-center text-8xl"
            style={{
              backgroundImage: "url('public\assets\modha\banner1.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                // use the src property of the image object
                backgroundImage: `url(${backgroundImage.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="flex pr-80 items-start h-screen w-screen-">
                <div className="pt-60">
                  <h3
                    className="text-xl md:text-xl lg:text-xl pr-80 text-black font-medium font-poppins pl-10"
                    style={{ lineHeight: "1.8" }}
                    role="heading"
                  >
                    Redefining Smart Functionality and Customization for Modern Lifestyles
                  </h3>

                  {/* <p className="text-gray-500 text-lg font-inter"> */}
                  {/* And a subheading describing your site, too                   */}
                  {/* </p> */}
                  <div className="pl-10">
                    <button className="bg-black pl-10 pb-5 text-white p-5 px-10 text-sm rounded-full hover:bg-white hover:text-black border-2 border-black mt-1 font-inter font-medium">
                      Know more
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="relative w-screen h-screen bg-white">
  {/* Image positioned at the top left */}
  <img
    src="assets/symbol.png"  // Replace with your image path
    alt="Top Left Image"
    className="absolute top-0 left-0 m-8"
    style={{ width: '50px', height: '50px' }} // Adjust size as needed
  />
  <div className="p-8">
    {/* Your content goes here */}
    <h2 className="text-xl font-poppins font-normal pt-20">
      Kequel furniture combines cutting-edge design with timeless elegance, offering smart features that enhance comfort and functionality. Each piece is meticulously crafted to elevate your living space, ensuring a blend of style and practicality that exceeds expectations.
    </h2>
  </div>
  <div className="relative w-full flex items-center justify-center h-full">
    <div className="w-[95%] h-[95%] rounded-3xl">
      <img 
        src="assets/keyshot.jpg" 
        alt="Description"
        className="w-full h-full object-cover"
      />
      <h3 className="absolute w-1/2 text-4xl text-white top-5 pl-20 pr-80 pt-20 right-3">
        Customizable Electronic Modules
      </h3>
      <h3 className="absolute w-1/2 text-sm text-white top-5 pl-20 pr-80 pt-40 right-3">
      Elevate your space with Kequel: merging .
      </h3>
      <button className="block mx-auto px-8 py-2 bottom-5 pl-20 pr-80 pt-80 right-3 bg-white border-2 border-black text-black rounded-full">Buy Now</button>
    </div>
  </div>
</div>
    <div className="relative w-screen h-screen bg-white overflow-hidden">
  <div className="absolute top-0 w-full flex flex-col justify-center items-center pt-8 ">
    <h1 className=" pb-10 font-poppins text-4xl  font-bold ">
      Features
    </h1>
    <hr className="border-t border-gray-300 w-5/6"></hr>
  </div>

 
    <video className="w-full pt-40" controls autoPlay muted>
      <source src="assets/modules.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>




       <div>
       <div className=" min-h-screen flex flex-col items-center py-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Customizable Electronic Modules</h1>
        <p className="text-lg text-gray-600 mt-2">Elevate your space with Kequel: merging .</p>
        <button className="mt-6 px-8 py-2 bg-black text-white rounded-full">Know More</button>
      </header>

      {/* Product Section */}
      <section className="flex flex-col md:flex-row gap-8 mb-12 w-full max-w-4xl">
  <div className="bg-white p-2 w-full md:w-1/2 flex flex-col">
    <img
      src="assets/modhabot.png"
      alt="Compact Modha"
      className="w-full h-full max-w-xs object-cover"
    />
    <h2 className="text-center text-xl font-semibold mt-4 mb-2">Compact Modha</h2>
    <p className="text-center text-gray-600 mb-4">470 x 450 x 470 (WxDxH)</p>
    <button className="block mx-auto px-8 py-2 bg-white border-2 border-black text-black rounded-full">
      Buy Now
    </button>
  </div>
  <div className="bg-white w-full md:w-1/2 flex flex-col items-center">
    <img
      src="assets/Bent Plywood.png"
      alt="Standard Modha"
      className="w-full h-full  object-cover"
    />
    <h2 className="text-center text-xl font-semibold mt-4 mb-2">Standard Modha</h2>
    <p className="text-center text-gray-600 mb-4">470 x 600 x 450 (WxDxH)</p>
    <button className="block mx-auto px-8 py-2 bg-white border-2 border-black text-black rounded-full">
      Buy Now
    </button>
  </div>
</section>


      {/* Collaboration Section */}
      <section className="text-center">
        <p className="text-5xl font-normal mb-4">"We are open for collaboration"</p>
      </section>
    </div>
       </div>
</div>
        


  );
};

export default Main;

