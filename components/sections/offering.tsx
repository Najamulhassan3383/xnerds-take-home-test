import React from "react";
import Image from "next/image";

// Card Component
const Card = ({ title, description, buttonText, rating, reviews, bg }) => {
  return (
    <div className="bg-gradient-to-b from-[#4a2800] to-[#1a0f00] p-6 rounded-lg shadow-lg text-center text-white w-full max-w-sm relative space-y-12 overflow-hidden">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-24 h-24 rounded-full flex items-center justify-center">
          <div
            className={`w-24 h-24 bg-${bg} rounded-full flex items-center justify-center`}
          >
            <Image
              src="/card-internel-icon.svg"
              width={60}
              height={60}
              alt="Bookmark"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8 space-y-8">
        <h4 className="text-orange-500 text-md uppercase mb-2">
          HIRE US TO DO YOUR
        </h4>
        <h3 className="text-4xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 text-md mb-6">{description}</p>
        <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 w-full mb-4">
          {buttonText}
        </button>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-yellow-400 text-sm flex items-center">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {index < Math.floor(rating) ? "★" : index < rating ? "☆" : "☆"}
              </span>
            ))}
          </span>
          <p className="text-gray-400 text-sm">
            {rating} stars out of {reviews} reviews
          </p>
        </div>
      </div>
    </div>
  );
};

// Offerings Section remains unchanged
const Offerings = () => {
  return (
    <section className="bg-black py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 text-center text-white  leading-tight">
          Our <span className="text-orange-500"> Offerings</span>
        </h1>
        <div className="flex flex-col md:flex-row  items-center justify-center gap-6">
          <Card
            title="PRODUCTION"
            description="Managed and 'done-for-you' digital marketing
                          services for mid-to-large companies looking to
                          accelerate 'hyper-growth'. And yes, we guarantee
                          results and smell fantastic 'wink'."
            buttonText="Get Started"
            rating={4.5}
            reviews={383}
            bg={"black"}
          />
          <Card
            title="MARKETING"
            description="Managed and 'done-for-you' digital marketing
                          services for mid-to-large companies looking to
                          accelerate 'hyper-growth'. And yes, we guarantee
                          results and smell fantastic 'wink'."
            buttonText="Get Started"
            rating={4.9}
            reviews={883}
            bg={"white"}
          />
        </div>
      </div>
    </section>
  );
};

export default Offerings;
