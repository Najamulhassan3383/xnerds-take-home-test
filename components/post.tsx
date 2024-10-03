import Image from "next/image";
import React from "react";

const SocialMediaPost = () => {
  return (
    <div className="bg-gradient-to-br from-amber-900 to-black rounded-3xl shadow-lg overflow-hidden max-w-md mx-auto text-white p-4">
      <div className="flex items-center">
        <Image
          src="/person.png"
          width={48}
          height={48}
          alt="Profile"
          className=" rounded-full"
        />
        <div className="ml-3">
          <p className="font-semibold">Saim Ali | Clifton Designs</p>
          <p className="text-gray-300 text-sm">@saimali</p>
        </div>
      </div>
      <p className="mt-3 text-sm">
        Always learning! just made a contribution to @ohayo_dojo. Thanks to
        @glihm_and @ammarif_ for their invaluable support, and @onlydust_ com
        for connecting us in the OSS community!
      </p>
      <div className="mt-3 rounded-xl overflow-hidden">
        <Image
          width={350}
          height={200}
          src="/social-card.jpg"
          alt="Colorful abstract art"
          className=""
        />
      </div>
      <p className="mt-3 text-gray-400 text-sm">7:11 PM - 24 July, 2024</p>
    </div>
  );
};

export default SocialMediaPost;
