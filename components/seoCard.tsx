import Image from "next/image";
import React from "react";

type CardProps = {
  imageSrc: string;
  heading: string;
  description: string;
};

const SeoCard = ({ imageSrc, heading, description }: CardProps) => {
  const [firstWord, secondWord] = heading.split(" ");

  return (
    <div className="bg-black w-full text-white rounded-lg flex flex-col justify-center items-center space-x-4 p-4">
      <div className="flex-shrink-0">
        <Image src={imageSrc} alt="Card Icon" width={100} height={100} />
      </div>
      <h2 className="text-2xl font-bold w-full text-center">
        {firstWord} <span className="text-orange-500">{secondWord || ""}</span>
      </h2>

      <div className="w-full">
        <p className="text-lg mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default SeoCard;
