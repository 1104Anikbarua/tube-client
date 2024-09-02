import React from "react";
import Navbar from "./(component)/Navbar/Navbar";
import Sidebar from "./(component)/Sidebar/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardWrapper = (props: Props) => {
  const children = props.children;
  return (
    <div className={"light w-full min-h-screen flex bg-red-50 text-green-900"}>
      <Sidebar />
      <main className="px-9 py-7 flex flex-col w-full h-full bg-gray-200 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;
