import React from "react";
import Image from "next/image";
import dlvr5 from "../../public/assets/Dlvr/dlvr5.png";
import dlvrProject8 from "../../public/assets/Dlvr/dlvrProject8.jpeg";

const DlvrIdeation: React.FC = () => {
  return (
    <>
      <div className="w-full py-10">
        <p className="text-2xl font-bold font-inter text-gray-400 px-20 py-5">
          Ideation 1
        </p>
        <div className="flex gap-5 justify-center">
          <Image src={dlvr5} alt="project-image" />
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-5 justify-center">
          <Image src={dlvrProject8} alt="project-image" />
        </div>
      </div>
      <div className="w-full p-12 sm:p-20 sm:px-28 leading-6">
        <p className="font-poppins">
          Showcasing potential features such as magnetic flaps for easy access,
          expandable storage, and a waterproof design. These concepts aim to
          enhance ergonomic support and provide seamless attachment to common
          bike frames, ensuring balanced weight distribution and efficient
          delivery operations.
        </p>
      </div>
    </>
  );
};

export default DlvrIdeation;
