import React from "react";
import Image from "next/image";

const SecondSection = () => {
  return (
    <section className="relative bg-black text-white p-10">
      <div className="flex justify-center">
        <div className="relative flex items-center justify-center w-full  h-96 mx-auto">
          <Image
            src="/presentation.svg"
            alt="Video thumbnail"
            width={1100}
            height={600}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
