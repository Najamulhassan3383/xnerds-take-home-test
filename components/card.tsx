import Image from "next/image";
import React from "react";

interface CardProps {
  name: string;
  profession: string;
  userName: string;
  profilePic: string;
  timeAndDate: string;
  description: string;
  imageUrl: string;
}

export const Card: React.FC<CardProps> = ({
  name,
  profession,
  userName,
  profilePic,
  timeAndDate,
  description,
  imageUrl,
}) => {
  return (
    <div className="bg-gradient-to-br from-amber-900 to-black rounded-lg overflow-hidden max-w-md mx-auto mb-4 text-white">
      <div className="p-4">
        <div className="flex items-center">
          <Image
            src={profilePic}
            alt={name}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold">{name}</p>
            <p className="text-gray-300 text-sm">{userName}</p>
          </div>
        </div>
        <p className="mt-3 text-sm text-start">{description}</p>
        {imageUrl && (
          <div className="mt-3 rounded-xl overflow-hidden">
            <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
              <Image
                src={imageUrl}
                alt="Post image"
                layout="fill"
                objectFit="cover"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        )}
        <p className="mt-3 text-gray-400 text-sm">{timeAndDate}</p>
      </div>
    </div>
  );
};
