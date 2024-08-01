import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

interface ProjectCardProps {
  imgPath: string; //  image URL/path
  title: string; // title of project
  description: string;
  buttonNavigation: string; // URL to navigate to on button click
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imgPath,
  title,
  description,
  buttonNavigation,
}) => {
  const router = useRouter();

  const navigateToPage = () => {
    router.push(buttonNavigation);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="relative w-full h-80 overflow-hidden shadow-md rounded-lg">
        <Image
          src={imgPath}
          alt={title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="w-full"
          loading="lazy"
        />
      </div>
      <h3 className="text-3xl font-semibold mt-3 font-inter">{title}</h3>
      <p className="text-gray-400 text-lg font-inter">{description}</p>
      <div>
        <button
          className="bg-black text-white p-2 px-5 text-xs rounded-lg hover:bg-white hover:text-black border-2 border-black mt-1 font-inter"
          onClick={navigateToPage}
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
