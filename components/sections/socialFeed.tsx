import React from "react";
import Gallery from "./gallary";

const SocialFeed = () => {
  return (
    <div className="bg-black p-10 text-center text-white">
      {/* Heading Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Our <span className="text-orange-500">Wall Of Love</span>
        </h2>
        <p className="text-lg text-gray-400 mt-2">
          Our team of creators is trained to create videos that feel organic
          while selling your product.
        </p>
      </div>

      {/* Social Feed Image */}
      <Gallery />
    </div>
  );
};

export default SocialFeed;
