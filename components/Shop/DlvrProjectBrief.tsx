import React from "react";
import dlvrProject1 from "../../public/assets/Dlvr/dlvrProject1.png";
import Image from "next/image";

const DlvrProjectBrief: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 p-10 sm:p-24 text-center">
        <div className="lg:w-1/6"></div>
        <p className="lg:w-5/6 text-justify sm:px-10 leading-7 font-poppins">
          This project was dedicated to developing innovative solutions for
          delivery personnel by addressing the numerous challenges posed by
          existing delivery bags and methods. Our comprehensive approach focused
          on enhancing ergonomics to reduce physical strain, improving safety
          features to protect both the goods and the delivery personnel,
          simplifying the ease of use for more efficient operations, and
          ensuring all-weather protection to safeguard deliveries in various
          environmental conditions. By reimagining the delivery bag, we aimed to
          significantly improve the daily experience and productivity of
          delivery workers, ultimately contributing to a more efficient and
          reliable delivery system.
        </p>
      </div>
      <div className="relative h-[50vh] w-full">
        <Image
          src={dlvrProject1}
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0 filter grayscale"
        />
        <div
          className="absolute inset-0 flex items-start justify-end z-10 text-white pr-14"
          style={{ top: "20%" }}
        >
          <div className="text-left flex flex-col w-2/3 sm:w-1/3 font-poppins">
            <p className="text-4xl sm:text-5xl mb-5 font-montserrat">
              Empowering Delivery Heroes
            </p>
            <p className="text-lg font-montserrat">
              Aim to make Next-Level
              <span className="font-semibold"> Backpack Solution</span> for
              India's Delivery Mavericks
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 p-5 sm:p-24 text-center">
        <h4 className="text-gray-400 font-inter lg:w-1/6 text-3xl leading-snug text-center lg:text-left font-semibold lg:mt-2">
          Project Brief
        </h4>
        <p className="lg:w-5/6 text-justify px-10 sm:px-20 leading-7 font-medium font-poppins">
          Current Challenges: <br />
          Delivery bags are not waterproof, leading to increased weight when
          wet. Bags often get torn, especially at common weak points. The
          cushion in bag straps crumples, providing inadequate support. Bags are
          disorganized and lack a systematic arrangement for packages. Delivery
          personnel face difficulties with bike balance due to uneven weight
          distribution.
        </p>
      </div>
    </>
  );
};

export default DlvrProjectBrief;
