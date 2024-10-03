import React from "react";
import { Card } from "../card";

const cardData = [
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",
    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
  {
    name: "Najam ul Hassan",
    profession: "Designer",
    userName: "@najamulhassan",
    profilePic: "/person.png",
    timeAndDate: "7:11 PM - 10 May 2021",
    description:
      "Always learning! just made a contribution to @ohayo_dojo, Thanks to @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com for connecting us in the OSS community!",

    imageUrl: "/social-card.jpg",
  },
];

const Gallery = () => {
  return (
    <div className="relative bg-black px-4 w-full max-h-[900px] mx-auto overflow-hidden">
      {/* Content Layer */}
      <div className="relative z-10">
        <div className="hidden lg:flex space-x-4">
          {[2, 1, 0].map((column) => (
            <div key={column} className="w-1/3">
              {cardData
                .filter((_, index) => index % 3 === column)
                .map((card, index) => {
                  const baseShift = column * 70; // Adjust for staggered effect
                  return (
                    <div
                      key={index}
                      className="transform transition-transform"
                      style={{ transform: `translateY(-${baseShift}px)` }}
                    >
                      <Card {...card} />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
        <div className="hidden md:flex lg:hidden space-x-4">
          {[0, 1].map((column) => (
            <div key={column} className="w-1/2">
              {cardData
                .filter((_, index) => index % 3 === column)
                .map((card, index) => {
                  const baseShift = column * 70; // Adjust for staggered effect
                  return (
                    <div
                      key={index}
                      className="transform transition-transform"
                      style={{ transform: `translateY(-${baseShift}px)` }}
                    >
                      <Card {...card} />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
        <div className="flex md:hidden space-x-4">
          {[0].map((column) => (
            <div key={column} className="w-full">
              {cardData
                .filter((_, index) => index % 3 === column)
                .map((card, index) => {
                  const baseShift = column * 70;
                  return (
                    <div
                      key={index}
                      className="transform transition-transform"
                      style={{ transform: `translateY(-${baseShift}px)` }}
                    >
                      <Card {...card} />
                    </div>
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay Layer */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-custom-gradient"></div>
    </div>
  );
};

export default Gallery;
