import { Menu } from "lucide-react";
import React from "react";

const Sidebar = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex items-center md:justify-normal justify-between gap-3 pt-8">
      {/* site name & site logo  */}
      <div>Site Logo</div>
      <h1 className="font-extrabold text-2xl">Site Name</h1>
      {/* site name & site logo  */}
      {/* sidebar hamburger toggle button  */}
      <button className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100">
        <Menu size={16} />
      </button>
      {/* sidebar hamburger toggle button  */}
      {/* route links  */}
      <div></div>
      {/* route links  */}
      <div>
        <p className="text-gray-500 text-xs text-center">&copy; {year}</p>
      </div>
    </div>
  );
};

export default Sidebar;
