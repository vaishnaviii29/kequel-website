import React from "react";
import Image from "next/image";

interface ImageCardProps {
  imgPath: string; // image URL/path
  width: number; // width of the image
  height: number; // height of the image
}

const ImageCard: React.FC<ImageCardProps> = ({ imgPath, width, height }) => {
  return (
    <div className="p-3 sm:p-5">
      <Image src={imgPath} alt="project-image" width={width} height={height} />
    </div>
  );
};

export default ImageCard;
