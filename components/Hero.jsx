import React from "react";
import { BiSearch } from "react-icons/bi";
import Blog from "./Blog";

const Hero = () => {
  return (
    <div className="flex p-10 md:mx-20 md:justify-between max-md:flex-col max-md:items-center">
      <div className=" md:max-w-[45%] flex flex-col items-start max-md:items-center">
        <h1 className="font-semibold text-9xl max-md:text-6xl">
          Thoughts & ideas around the things that actually matter.
        </h1>

        <div className="flex items-center mt-10 md:space-x-7">
          <div className="flex items-center px-4 py-2 bg-gray-100 rounded-full">
            <BiSearch className="text-gray-400 md:h-7 md:w-7" />
            <input
              type="text"
              name=""
              id=""
              className="px-3 py-1 bg-transparent outline-none"
              placeholder="Search here"
            />
          </div>

          <button className="bg-[#719fae] h-full text-white px-6 py-2 rounded-full max-md:hidden ">
            Explore Now
          </button>
        </div>
      </div>

      <div className="flex flex-col md:w-[45%] max-md:mt-20">
        <h1 className="mb-10 text-xl font-semibold">Trending Now</h1>
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default Hero;
