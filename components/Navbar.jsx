import React from "react";
import { BiMenu, BiSearch } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border-b">
      <h1>LOGO</h1>

      <div className="flex items-center space-x-10 max-md:hidden">
        <h1>Home</h1>
        <h1>News </h1>
        <h1>Events</h1>
        <h1>Jobs</h1>
        <button className="px-3 py-1 border border-black rounded-full cursor-pointer">
          Sign In
        </button>
      </div>

      <div className=" md:hidden">
        <BiMenu className=" h-7 w-7" />
      </div>
    </nav>
  );
};

export default Navbar;
