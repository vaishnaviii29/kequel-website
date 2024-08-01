"use client";

import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ContactForm } from "../common/contactForm";
import backgroundImage from "../../public/assets/dronesports.png";
import backgroundImage2 from "../../public/assets/kequel.png";
import backgroundImage3 from "../../public/assets/delta.png";
import backgroundImage4 from "../../public/assets/dlvr.png";
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';


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
    <ParallaxProvider>
    <div>
      <Parallax speed={-10}>
        <div className="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
          <div className="snap-start relative w-screen h-screen grid place-items-center">
            <video
              autoPlay
              muted
              loop
              className="absolute inset-0 object-cover w-full h-full"
              style={{
                zIndex: -1,
              }}
            >
              <source src="/bgvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="flex items-center sm:h-screen px-5 sm:px-12">
              <div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-medium font-poppins pr-60 pl-10">
                  <span
                    role="heading"
                    style={{
                      fontSize: "0.8em",
                      display: "inline-block",
                      lineHeight: "1.8",
                      color: "black",
                    }}
                  >
                    Transforming organisations with our comprehensive solutions in
                    the form of{" "}
                    <span style={{ color: "darkblue", fontWeight: "bold" }}>
                      {text}
                    </span>
                    <Cursor />
                  </span>
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-5 left-10 pl-10 pb-40">
                <button className="bg-black text-white p-5 px-10 text-xs rounded-full hover:bg-white hover:text-black border-2 border-black mt-1 font-inter font-medium">
                  Know more about us
                </button>
              </div>
            </div>
          </div>

          {[
            { bgImage: backgroundImage.src, title: "Drone Sports India", subtitle: "A project by Mesckolabs and XCompany's visionary collaboration", link: "/dronesports" },
            { bgImage: backgroundImage2.src, title: "Kequel(Smart Bedside table)", subtitle: "Redefining Smart Functionality and Customization for Modern Lifestyles", link: "/kequel" },
            { bgImage: backgroundImage3.src, title: "Delta Robot", subtitle: "Unleashing Speed and Accuracy with Delta Robotics", link: "/delta-robotics" },
            { bgImage: backgroundImage4.src, title: "DLVR", subtitle: "Friend Of Last Mile Drivers Bringing Smiles back.(Delivery bag)", link: "/dlvr" },
          ].map((section, index) => (
            <div
              key={index}
              className="snap-start grid w-screen h-screen place-items-center text-8xl"
              style={{
                backgroundImage: `url(${section.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${section.bgImage})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100vw",
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div className="flex justify-center items-center h-screen">
                  <div className="px-10 sm:px-8 flex flex-col gap-5 lg:w-6/6">
                    <h2
                      className="text-3xl md:text-4xl pl-80 lg:text-5xl text-white font-medium font-poppins"
                      style={{ lineHeight: "1.4" }}
                      role="heading"
                    >
                      {section.title}
                    </h2>
                    <h2
                      className="text-base md:text-bse pl-80 lg:text-base text-white font-medium font-poppins"
                      style={{ lineHeight: "1.4" }}
                      role="heading"
                    >
                      {section.subtitle}
                    </h2>
                    <div className="pl-80">
                      <a href={section.link}>
                        <button className="bg-white text-black p-5 px-10 text-sm rounded-full hover:bg-white hover:text-black border-2 border-white mt-1 font-inter font-medium">
                          Know more
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div
            id="services"
            className="snap-start grid w-screen h-screen place-items-start text-8xl"
            style={{ backgroundColor: "white" }}
          >
            <div className="space-y-8 pl-20 pt-5 ">
              <h1 className="text-4xl font-bold mt-10 pl-30 animate-bounce">
                Our Services
              </h1>

              {[
                {
                  number: "01",
                  title: "Product Design & Development",
                  description:
                    "From conceptualization to market-ready prototypes, we ensure that every step of the design and development process is meticulously executed.",
                },
                {
                  number: "02",
                  title: "Embedded Hardware & SOFTWARE",
                  description:
                    "We specialize in developing custom hardware solutions that seamlessly integrate with software, providing you with the tools you need to innovate and stay ahead.",
                },
                {
                  number: "03",
                  title: "Website/App Design & Development",
                  description:
                    "Whether you're looking for an e-commerce platform, a dynamic corporate website, or a cutting-edge mobile app, we've got you covered with our web and app development services.",
                },
                {
                  number: "04",
                  title: "Prototype",
                  description: "Dummy Text",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-t border-gray-300 pt-4"
                >
                  <div className="flex space-x-4 items-start">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold">
                        {service.number}
                      </span>
                      <div className="border-l-2 border-gray-300 h-full"></div>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">{service.title}</h2>
                      <p className="text-sm">{service.description}</p>
                    </div>
                  </div>
                  <a href="#contactUs">
                    <button className="bg-black text-white text-sm px-3 py-1.5 rounded-full flex items-center space-x-2">
                      <span>Contact us</span>
                      <span>→</span>
                    </button>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div
            id="contactUs"
            className="snap-start grid w-screen h-screen place-items-start text-8xl"
            style={{ backgroundColor: "white" }}
          >
            <div className="bg-white shadow-md rounded px-6 pr-10 pt-4 pb-6 mb-4 w-full max-w-full h-full flex flex-col justify-center">
              <ContactForm />
            </div>
          </div>
        </div>
      </Parallax>
    </div>
    </ParallaxProvider>
  );
};

export default Main;
