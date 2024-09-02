import { Menu, Bell, Sun, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="light flex itmes-center justify-between mb-7">
      {/* button & searchBar start here */}
      <div className="flex items-center justify-between gap-5">
        {/* menu icon  */}
        <button className="bg-gray-100 hover:bg-blue-100 rounded-full p-3">
          <Menu className="w-4 h-4 " />
        </button>
        {/* menu icon end */}
        {/* searchbar & bell icon  */}
        <div className="relative">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search anything"
            className="w-50 md:w-80 pl-10 pr-4 py-2 border-2 border-gray-300 focus:outline-none focus:border-blue-500 bg-white rounded-lg cursor-pointer"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Bell className="w-4 h-4 text-gray-500" />
          </div>
        </div>
        {/* searchbar & bell icon end */}
      </div>
      {/* button & searchBar end here */}
      {/* notification & settings & user profile start here */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex items-center justify-between gap-5">
          {/* sun icon  */}
          <button>
            <Sun className="cursor-pointer text-gray-500 w-4 h-4" />
          </button>
          {/* sun icon end here */}
          {/* bell icon */}
          <div className="relative">
            <Bell className="text-gray-500 cursor-pointer" size={16} />
            <span className="absolute -top-2 left-2 text-red-100 bg-red-400 rounded-full py-1 px-1.5 text-xs font-semibold leading-none inline-flex justify-center items-center">
              4
            </span>
          </div>
          {/* bell icon and notification */}
          <hr className="w-0 h-8 border border-solid border-l border-gray-300 mx-3" />
          {/* user name & profile picture */}
          <div className="flex items-center gap-x-3 cursor-pointer">
            <div className="w-9 h-9">Image</div>
            <span className="font-semibold">Anik Barua</span>
          </div>
          {/* user & profile picture end here */}
        </div>
        {/* settings  */}
        <Link href={"/settings"}>
          <Settings className={"text-gray-500 cursor-pointer"} size={16} />
        </Link>
      </div>
      {/* notification & settings & user profile end here  */}
    </div>
  );
};

export default Navbar;
