import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import modhaProject from "../../public/assets/modha-project.png";
import bkpkProject from "../../public/assets/bkpkProject.jpg";
import dlvrEase from "../../public/assets/dlvrEase.jpeg";
import deltaRobots from "../../public/assets/deltaRobots.png";

interface OtherProjectsProps {
  modha?: boolean;
  bkpk?: boolean;
  dlvr?: boolean;
  deltaRobot?: boolean;
}

const OtherProjects: React.FC<OtherProjectsProps> = ({
  modha = false,
  bkpk = false,
  dlvr = false,
  deltaRobot = false,
}) => {
  const router = useRouter();

  const handleProjectClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="p-5 sm:p-10 pb-28">
      <p className="text-2xl py-5 font-semibold font-inter text-center lg:text-left px-16">
        Other projects
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-5 sm:px-16">
        {modha && (
          <div
            className="relative cursor-pointer h-64"
            onClick={() => handleProjectClick("/modha-project")}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 text-xl font-semibold bg-black bg-opacity-50 text-white">
              Modha
            </div>
            <Image
              src={modhaProject}
              alt="modha-project-image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        {bkpk && (
          <div
            className="relative cursor-pointer h-64"
            onClick={() => handleProjectClick("/bkpk")}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 text-xl font-semibold bg-black bg-opacity-50 text-white">
              BKPK
            </div>
            <Image
              src={bkpkProject}
              alt="bkpk-project-image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        {dlvr && (
          <div
            className="relative cursor-pointer h-64"
            onClick={() => handleProjectClick("/dlvr-ease")}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 text-xl font-semibold bg-black bg-opacity-50 text-white">
              DLVR Ease
            </div>
            <Image
              src={dlvrEase}
              alt="dlvr-ease-project-image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        {deltaRobot && (
          <div
            className="relative cursor-pointer h-64"
            onClick={() => handleProjectClick("/")}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10 text-xl font-semibold bg-black bg-opacity-50 text-white">
              Delta Robots
            </div>
            <Image
              src={deltaRobots}
              alt="delta-robots-project-image"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default OtherProjects;
