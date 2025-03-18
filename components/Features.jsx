import React from "react";
import { BentoGridThirdDemo } from "./ui/Bento";
import { Cover } from "./ui/cover";

export const Features = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12">
      <div className="flex justify-between items-end gap-9">
        <div className="">
          <div className="text-xl font-semibold tracking-tight">
            <Cover>Benefits</Cover>
          </div>
          <h3 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Transforming Businesses with <br />
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              Data, Intelligence, and Innovation
            </span>
          </h3>
        </div>
        <div className="text-gradient-outline text-7xl font-black">
          Features
        </div>
      </div>
      <div className="mt-9">
        <BentoGridThirdDemo />
      </div>
    </div>
  );
};
