import React from "react";
import Image from "next/image";
import SeoCard from "../seoCard";

const SeoOptimisationSection = () => {
  return (
    <section className="bg-black text-white p-10 flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center mb-10 w-full md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">
          The <span className="text-orange-500">All-in-one</span> Content
          Marketing Agency
        </h1>
        <p className="text-lg text-gray-300  mx-auto">
          We combine content creation, content marketing & Distribution, Digital
          PR, Technical SEO, and Paid Ads to help scale you 10× faster than your
          competitors.
        </p>
      </div>

      {/* SEO Optimisation Section */}
      <div className="hidden md:flex justify-center items-center space-y-8 space-x-6 md:space-y-0">
        <Image
          src="/seo.svg"
          alt="SEO Optimisation"
          width={2000}
          height={2000}
        />
      </div>
      <div className="flex flex-col md:hidden justify-center items-center space-y-8  md:space-y-0">
        <Image
          src="/content-creation-mobile.svg"
          alt="SEO Optimisation"
          width={1500}
          height={1400}
        />
        <div className="">
          <SeoCard
            imageSrc="/ads-logo.svg"
            heading="Paid Ads"
            description="Lower the customer acquisition cost with conversion-driven ads campaign."
          />
        </div>
        <div className="">
          <SeoCard
            imageSrc="/Seo-optimization-logo.svg"
            heading="SEO Optimization"
            description="Organically grow our traffic, reach, and revenue."
          />
        </div>
        <div className="">
          <SeoCard
            imageSrc="/PR-logo.svg"
            heading="Digital PR"
            description="Get more eyeballs and Be the Only brand in your space."
          />
        </div>
      </div>
    </section>
  );
};

export default SeoOptimisationSection;
