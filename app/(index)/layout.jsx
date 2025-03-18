import React from "react";
import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-3 sm:px-0">
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default layout;
