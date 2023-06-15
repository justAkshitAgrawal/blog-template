import React from "react";
import Blog from "./Blog";

const NewsSection = ({ title }) => {
  return (
    <div className="flex p-10 md:mx-20 md:justify-between md:mt-20 md:space-x-20 max-md:flex-col max-md:items-center">
      <div className="flex flex-col items-center md:ml-10 ">
        <h1 className="text-2xl font-semibold md:text-5xl">{title}</h1>
        <div className="flex items-center mx-2 mt-6 ">
          <h1 className="font-semibold text-center md:text-xl">
            41K
            <br />
            Views
          </h1>
          <h1 className="ml-20 font-semibold text-center md:text-xl">
            32K
            <br />
            Likes
          </h1>
        </div>
      </div>
      <div className="flex flex-col max-md:mt-10 md:items-end w-full md:max-w-[1000px]">
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  );
};

export default NewsSection;
