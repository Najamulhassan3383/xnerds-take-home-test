import React from "react";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="relative bg-black text-white p-10">
      {/* Video Section */}
      <div className="flex justify-center">
        <div
          className="relative w-full max-w-4xl h-96 mx-auto
        "
        >
          <Image
            src="/presentation.jpg"
            alt="Video thumbnail"
            width={790}
            height={400}
            className="rounded-lg mx-auto"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white rounded-full p-4">
              <Image
                src="/play-button.svg"
                width={50}
                height={50}
                alt="Play button"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Flowchart Lines */}
      <div className="hidden md:flex justify-center items-center mt-12">
        <div className="w-full max-w-4xl flex justify-center">
          <Image
            src="/cards-and-arrows.png"
            width={1000}
            height={500}
            alt="line"
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
