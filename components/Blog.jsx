import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Blog = () => {
  return (
    <div className="md:w-[80%] h-[35vh]">
      <div className="relative max-md:h-[60%] h-[70%] bg-gray-200 rounded">
        <div className="absolute top-[50%] translate-y-[-50%] -right-5 cursor-pointer bg-black p-4 rounded-full">
          <BsArrowUpRight className="text-white" />
        </div>
      </div>
      <div className="flex justify-between pb-2 mt-2 border-b">
        <h1 className="font-semibold md:text-3xl">Sample Heading</h1>
        <h1>Date</h1>
      </div>
      <div className="mt-2">
        <h1>Author • 10 min read • News Update</h1>
      </div>
    </div>
  );
};

export default Blog;
