import React from "react";
import Image from "next/image";
import dlvrProject9 from "../../public/assets/Dlvr/dlvrProject9.png";
import dlvrProject10 from "../../public/assets/Dlvr/dlvrProject10.png";
import dlvrProject11 from "../../public/assets/Dlvr/dlvrProject11.png";
import dlvr12 from "../../public/assets/Dlvr/dlvr12.png";
import dlvr14 from "../../public/assets/Dlvr/dlvr14.jpg";

const DlvrSolution: React.FC = () => {
  return (
    <div className="w-full py-10">
      <p className="text-2xl font-bold font-inter text-gray-500 px-20 py-5">
        The Solution
      </p>
      <div className="grid grid-cols-1 gap-5">
        <Image src={dlvrProject9} alt="project-image" />
        <Image src={dlvrProject10} alt="project-image" />
      </div>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center p-10">
        <div className="lg:pr-10">
          <Image src={dlvrProject11} alt="project-image" />
        </div>
        <div className="flex items-center gap-5 lg:ml-16">
          <div className="border-2 border-red-600 rounded-xl">
            <Image src={dlvr12} alt="project-image" className="rounded-xl" />
          </div>
          <div>
            <p>
              The Chosen Combination Of Upper Cargo And Lower Side Bags, Keeping
              In Mind The Ease Of
              <span className="font-semibold"> Parcel Storage</span> And
              <span className="font-semibold"> The Maximum Size</span> .
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src={dlvr14} alt="project-image" className="rounded-xl" />
      </div>
    </div>
  );
};

export default DlvrSolution;
