import React from "react";
import Image from "next/image";
import dlvrEase from "../../public/assets/dlvrEase.jpeg";

const DlvrOther: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-10 lg:h-screen">
        <div className="relative h-[80vh] overflow-hidden">
          <Image
            src={dlvrEase}
            alt="DLVR project"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="grayscale"
          />
        </div>
        <div className="px-10 lg:px-32">
          <p className="font-medium font-inter text-justify">
            The redesigned delivery bag and solutions provide a significant
            improvement over existing options by addressing the key pain points
            of delivery personnel. The FOLD concept, in particular, offers a
            versatile and secure option that enhances the daily operations of
            last-mile delivery drivers
          </p>
        </div>
      </div>
      <div className="p-10 md:p-24 text-center">
        <p className="text-lg font-inter">
          To know more about our process from design to execution, for a
          detailed interaction write to us meskolabs@gmail.com
        </p>
      </div>
    </>
  );
};

export default DlvrOther;
