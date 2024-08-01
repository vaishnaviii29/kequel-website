"use client";

import React, { useState } from "react";
import backgroundImage from "../../public/assets/dronesports/banner1.png";
import backgroundImage2 from "../../public/assets/dronesports/banner2.png";
import backgroundImage3 from "../../public/assets/modha/banner3.png";
import backgroundImage4 from "../../public/assets/modha/banner4.png";
import backgroundImage5 from "../../public/assets/modha/banner5.png";
import backgroundImage6 from "../../public/assets/modha/banner6.gif";
import image1 from "../../public/assets/Dlvr/banner3.png";
import image2 from "../../public/assets/Dlvr/banner3.png";

import Header from "../Header";

interface ImageCardProps {
  image: string; // Assuming 'image' is a string (path to the image)
  title: string;
  description: string;
}

const Main2: React.FC = () => {



  const ImageCard: React.FC<ImageCardProps> = ({
    image,
    title,
    description,
  }) => {
    return (
      <div className="w-full h-full flex flex-col justify-between max-w-sm  overflow-hidden  mx-auto mb-8 ">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  };

  const ImageCardList = () => {
    // Example images (replace with your actual image paths)
    const image1 = "/assets/dronesports/banner3.png";
    const image2 = "/assets/dronesports/banner4.png";

    const image3 = "/assets/dronesports/banner5.png";

    return (
      <div className="flex justify-center items-start space-x-3">
        <ImageCard
          image={image1}
          title=""
          description="The modular nature allows for quick swapping of different end effectors to adapt the robot for various applications"
        />

        <ImageCard
          image={image2}
          title=""
          description="The carbon fiber in delta robot’s arm offers a high strength-to-weight ratio."
        />

        <ImageCard
          image={image3}
          title=""
          description="Offers a flexible structure and accurate placement of the end effector."
        />
      </div>
    );
  };

  return (
    <div>
      <script src="https://cdn.tailwindcss.com"></script>
      <div>
        <div className="snap-y snap-mandatory h-screen w-screen mx:auto overflow-x-hidden">
          {/*  */}
          <div
            className="snap-start grid w-screen h-screen place-items-center text-8xl"
            style={{
              backgroundImage: "url('publicassetsdronesports\banner1.png')",
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
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="flex pr-80 items-center h-screen">
                <div className="pt-2">
                  <h3
                    className="justify-start  text-xl md:text-xl lg:text-xl pr-80 text-white font-medium font-poppins"
                    style={{ lineHeight: "2.4" }}
                    role="heading"
                  >
                    A project by Meskolabs and Xcompany’s visionary
                    collaboration
                  </h3>

                  {/* Uncomment the following lines if you want to add a subheading */}
                  {/* <p className="text-gray-500 text-lg font-inter">
      And a subheading describing your site, too
    </p> */}

                  <div className="pr-80">
                    <button className="bg-white text-black p-5 px-10 text-sm rounded-full hover:bg-white hover:text-black border-2 border-white mt-1 font-inter font-medium">
                      Know more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="snap-start grid w-screen h-screen place-items-center text-8xl"
            style={{
              backgroundImage: "url('publicassetsdronesports\banner2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              className=" object-cover "
              style={{
                // use the src property of the image object
                backgroundImage: `url(${backgroundImage2.src})`,
                // other styles
                backgroundPosition: "center",
                backgroundSize: "90%",
                backgroundRepeat: "no-repeat",
                width: "100vw",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className="flex justify-start items-start h-screen">
                <div className="flex flex-col pl-5">
                  <h2
                    className="text-3xl md:text-4xl lg:text-5xl text-black font-medium font-poppins whitespace-nowrap pt-5 pl-5"
                    style={{ lineHeight: "1.6" }}
                    role="heading"
                  >
                    Innovation in the skies
                  </h2>
                 
                </div>

                <div className="flex flex-col  top-3 right-0">
                  <h2
                    className=" pl-11 pt-5  pr-5 text-base md:text-base lg:text-base text-black font-medium font-poppins whitespace-normal text-justify "
                    style={{ lineHeight: "1.9" }}
                    role="heading"
                  >
                   Experience the thrill of high-speed aerial races and cutting-edge drone technology with Drone Sports India. Join us as we redefine the future of sports with exhilarating competitions and state-of-the-art drones.
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="snap-start grid w-screen h-screen place-items-center text-8xl">
            <div className="justify-items-start h-screen">
              <div className="  lg:w-4/6">
                <h2
                  className=" text-4xl md:text-4xl  lg:text-4xl text-black font-medium font-poppins content-start pl-10"
                  style={{ lineHeight: "1.2" }}
                  role="heading"
                >
                  Discover Innovation in Flight: Our Precision-Driven Drone Hoop
                  Showdown
                </h2>
                <h2
                  className=" pt-5 text-base md:text-bse lg:text-base text-black font-medium font-poppins pl-10"
                  style={{ lineHeight: "1.4" }}
                  role="heading"
                >
                  Unleashing cutting-edge technology for thrilling aerial
                  competitions, where two teams control nimble quadcopter
                  drones. Maneuver through a netted arena and aim for vertical
                  hoops to score.
                </h2>
                {/* <p className="text-gray-500 text-lg font-inter"> */}
                {/* And a subheading describing your site, too                   */}
                {/* </p> */}
              </div>
              <div className="flex justify-center items-center space-x-5 mt-8">
                <ImageCardList />
              </div>
            </div>
          </div>

          <div className="snap-start grid w-screen h-screen place-items-center text-8xl">
            <div className="flex pt-20 w-screen">
              <div className="w-1/2">
                <video className="w-full " controls autoPlay muted>
                  <source src="/assets/Dlvr/vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="w-1/2 flex items-center justify-center">
                <div className="relative w-full h-0 pb-[56%] aspect-w-16 aspect-h-9">
                  <img
                    src="/assets/Dlvr/banner5.png"
                    alt="Your image description"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="text-left">
              <h2
                className="h-screen lg:w-4/6 pt-5 text-base md:text-base lg:text-base text-black font-medium font-poppins pl-5"
                role="heading"
                style={{ lineHeight: 1.8 }}
              >
                Unleashing cutting-edge technology for thrilling aerial
                competitions, where two teams control nimble quadcopter drones.
                Maneuver through a netted arena and aim for vertical hoops to
                score.
              </h2>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};


  
  
    


  
  
    


export default Main2;