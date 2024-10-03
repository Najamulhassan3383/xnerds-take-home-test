import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const MarketingStrategySection = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center p-10">
      {/* Heading Section */}
      <div className="text-center mb-10 w-full md:w-3/4">
        <h1 className="text-4xl font-bold mb-4">
          Here's How Midcreatives Help You{" "}
          <span className="text-orange-500">
            Lower The Customer Acquisition Cost
          </span>
        </h1>
        <p className="text-lg text-white  mx-auto">
          Midcreatives is the conversion-first agency that helps build traction,
          distribution, and customer acquisition channels that organically
          convert new users without paid ads and expensive marketing methods.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between max-w-7xl mx-auto space-y-8 md:space-y-0 md:space-x-12 py-16 px-4">
        {/* Left Side: Image */}
        <h1 className="text-4xl block md:hidden md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
          Go To Content{" "}
          <span className="text-orange-500">Marketing strategy</span>
        </h1>
        <div className="w-full md:w-1/2">
          <Image
            src="/market-strategy.svg" // Replace with actual path
            alt="Content Marketing"
            width={500}
            height={500} // Changed to ensure consistent aspect ratio
            className="mx-auto"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl hidden md:text-5xl font-bold mb-6 leading-tight text-center md:text-left">
            Go To Content{" "}
            <span className="text-orange-500">Marketing strategy</span>
          </h1>
          <p className="mb-6 text-lg text-center md:text-left">
            We make organic content marketing a whole lot easier, automated,
            predictable, and result-driven.
            <br />
            <br />
            Our team of creators is trained to create videos that feel organic
            while selling your product.
          </p>

          {/* Button */}
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 text-lg flex items-center space-x-2">
              <span>Free Proposal</span>
              <Image
                src="/move-up-right.svg" // Replace with actual path
                width={15}
                height={15}
                alt="arrow"
                className="filter invert"
              />
            </button>
          </div>
        </div>
      </div>
      {/* Chart and Text Section */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-8 space-x-6 md:space-y-0">
        {/* Left - Business Benefits List */}
        <div className="w-full md:w-2/5">
          <h2 className="text-3xl hidden md:block font-bold mb-6">
            Complete End-to-end{" "}
            <span className="text-orange-500">Content Marketing Services</span>
          </h2>
          <p className="text-lg mb-8">
            Work directly with our content creation and marketing team to
            achieve predictable results. We help businesses:
          </p>
          <ul className="text-sm ml-4 space-y-3">
            <li className="flex items-center">
              <Check size={20} />
              <span className="ml-2">
                Attracting & converting brand advocates
              </span>
            </li>
            <li className="flex items-center">
              <Check size={20} />
              <span className="ml-2">Lower the customer acquisition cost</span>
            </li>
            <li className="flex items-center">
              <Check size={20} />
              <span className="ml-2">
                Accelerate & Optimise your advertising
              </span>
            </li>
            <li className="flex items-center">
              <Check size={20} />
              <span className="ml-2">Go To content marketing strategies</span>
            </li>
          </ul>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-md hover:bg-orange-600 text-lg flex items-center space-x-2 mt-6">
            <span>Free Proposal</span>
            <Image
              src="/move-up-right.svg"
              width={20}
              height={20}
              alt="arrow"
              className="filter invert"
            />
          </button>
        </div>

        {/* Right - Flow Chart */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl block md:hidden font-bold mb-6">
            Complete End-to-end{" "}
            <span className="text-orange-500">Content Marketing Services</span>
          </h2>
          <Image
            src="/flow-chart.svg"
            alt="Flow Chart"
            width={500}
            height={500}
            className="mb-8 md:mb-0"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketingStrategySection;
