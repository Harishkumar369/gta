import React from "react";
import { Cover } from "./ui/cover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { WobbleCard } from "./ui/wobble-card";
import Image from "next/image";
import { Button } from "./ui/button";
import business from "@/public/business.png";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12">
      <div className="flex justify-between items-end gap-9">
        <div className="">
          <div className="text-xl font-semibold tracking-tight">
            <Cover>Our Process</Cover>
          </div>
          <h3 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Expert Guidance for <br />
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              Business Growth and Transformation
            </span>
          </h3>
        </div>
        <div className="text-gradient-outline text-7xl font-black">PROCESS</div>
      </div>
      <div className="mt-3 max-w-2xl w-full">
        <p className="font-medium">
          Explore how our tailored approach leverages data, technology, and
          expertise to streamline operations and empower your business to
          thrive.
        </p>
      </div>
      <div className="flex items-center gap-3 mt-3 relative">
        <div className="p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center after:absolute after:content-[''] after:h-12 after:w-px after:bg-lime-500 after:top-6">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <p className="font-medium ">See how it works</p>
      </div>
      <div className="grid grid-cols-2 relative gap-6">
        <div className="absolute top-9 left-14 p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center ">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <div className="absolute top-24  right-1/2 p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center ">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <div className="absolute top-[16.5rem]  right-1/2 p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center ">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-[18.5rem]  right-1/2 p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center ">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <div className="absolute bottom-32  right-1/2 p-1 h-6 w-6 border border-lime-500 rounded-full flex items-center justify-center ">
          <div className="h-3 w-3 bg-lime-500 rounded-full"></div>
        </div>
        <div className="border-t border-r border-lime-500 ml-[0.70rem] mt-12 px-9 py-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
              1
            </div>
            <p className="text-lg font-semibold">We Listen to You</p>
          </div>
          <p className="mt-3">
            Engage in a friendly conversation where we listen to your goals and
            challenges. Gain clarity on how customized insights and strategies
            can help you achieve growth and success.
          </p>
          <Card className="h-[30rem] mt-6">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>

        <div className="flex flex-col gap-9 mt-12 px-6 py-9 items-center justify-center">
          <div className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
                2
              </div>
              <p className="text-lg font-semibold">
                We Bring Everything Together
              </p>
            </div>
            <p className="mt-3">
              Engage in a friendly conversation where we listen to your goals
              and challenges. Gain clarity on how customized insights and
              strategies can help you achieve growth and success.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
                3
              </div>
              <p className="text-lg font-semibold">We Clean Up the Clutter</p>
            </div>
            <p className="mt-3">
              Engage in a friendly conversation where we listen to your goals
              and challenges. Gain clarity on how customized insights and
              strategies can help you achieve growth and success.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
                4
              </div>
              <p className="text-lg font-semibold">
                See Your Business in a New Light
              </p>
            </div>
            <p className="mt-3">
              Engage in a friendly conversation where we listen to your goals
              and challenges. Gain clarity on how customized insights and
              strategies can help you achieve growth and success.
            </p>
          </div>
          <div className="">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
                5
              </div>
              <p className="text-lg font-semibold">Get Actionable Advice</p>
            </div>
            <p className="mt-3">
              Engage in a friendly conversation where we listen to your goals
              and challenges. Gain clarity on how customized insights and
              strategies can help you achieve growth and success.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-sky-600 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="p-6 flex items-center">
            <div className="">
              <div className="flex items-center justify-center p-3 h-12 w-12 text-2xl font-black text-white bg-lime-500 rounded-xl">
                6
              </div>
              <h2 className="mt-3 max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                Always There for You
              </h2>
              <p className="mt-3 max-w-[30rem] text-left  text-base/6 text-neutral-200">
                Engage in a friendly conversation where we listen to your goals
                and challenges. Gain clarity on how customized insights and
                strategies can help you achieve growth and success.
              </p>
              <div>
                <Button className="mt-3">Get Connect Now</Button>
              </div>
            </div>
            <Image
              src={business}
              width={500}
              height={500}
              alt="linear demo image"
              className="absolute -right-10 md:-right-[40%] lg:-right-[0%] top-5 object-contain rounded-2xl"
            />
          </div>
        </WobbleCard>
      </div>
    </div>
  );
};

export default HowItWorks;
