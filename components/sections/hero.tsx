import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white p-10">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-12">
        <Image src="/logo.svg" width={200} height={200} alt="logo" />
        <ul className="hidden  md:flex space-x-8">
          <li className="hover:text-orange-500 cursor-pointer text-lg">
            About
          </li>
          <li className="hover:text-orange-500 cursor-pointer text-lg">
            Services
          </li>
          <li className="hover:text-orange-500 cursor-pointer text-lg">
            Offers
          </li>
        </ul>
        <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 text-lg flex items-center space-x-2">
          <span>Free Proposal</span>
          <Image src="/move-up-right.svg" width={20} height={20} alt="arrow" />
        </button>
      </nav>

      {/* Hero Content */}
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            We Built Business Brand And{" "}
            <span className="text-orange-500">Drive Tangible Results.</span>
          </h1>
          <p className="mb-6 text-lg">
            Midcreatives make organic content marketing a whole lot easier,
            automated, predictable, and result-driven.
            <br />
            <br />
            We combine content marketing, digital PR, technical SEO, and paid
            ads in a complete end-to-end service that's generated more client
            millions than most agencies have client accounts.
          </p>

          {/* Button, Profile Images, Ratings, and Text */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 space-x-4">
            <button className="bg-orange-500 text-white px-5 py-2 rounded-md hover:bg-orange-600 text-lg flex items-center space-x-2 flex-shrink-0">
              <span>Free Proposal</span>
              <Image
                src="/move-up-right.svg"
                width={15}
                height={15}
                alt="arrow"
                className="filter invert"
              />
            </button>

            <div className="flex items-center space-x-2 gap-14">
              <div className="flex -space-x-3">
                {/* Profile Images */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <Image
                    key={i}
                    src="/person.png"
                    width={40}
                    height={40}
                    alt={`profile${i}`}
                    className="rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <div className="flex flex-col ml-0 md:ml-5">
                {/* Ratings */}
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={20} color="orange" />
                  ))}
                </div>
                <p className="text-sm text-white">
                  100+ Startup Founders Love Midcreatives
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Section */}
        <div className="hidden md:block">
          <Image src="/hero.svg" width={600} height={600} alt="hero" />
        </div>
        <div className="block mt-8 md:hidden">
          <Image src="/hero-mobile.svg" width={400} height={400} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
