import React from "react";
import { Badge } from "./ui/badge";
import { CardDemo } from "./ui/cards";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import {
  ArrowRight,
  ArrowUp,
  BarChart,
  DollarSign,
  LineChart,
  PieChart,
  Triangle,
} from "lucide-react";
import Link from "next/link";

import first from "@/public/1.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-xl font-semibold tracking-tight">
          <Cover>Innovate, Automate, Succeed.</Cover>
        </div>
        <h1 className="mt-3 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Transform Data into{" "}
          <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
            Opportunities
          </span>
        </h1>
        <p className="leading-7 mt-3">
          From analytics to AI and automation, we provide the tools and
          expertise to elevate your business. Let’s create strategies that
          deliver real impact.
        </p>
      </div>
      <div className="mt-6 flex gap-3 items-center justify-center">
        <Button>Book a Demo</Button>
        <Button variant="link" className="text-sky-500">
          <Link href="/" className="flex items-center gap-1">
            <span>Discover How We Help</span>
            <span className="">
              <ArrowRight />
            </span>
          </Link>
        </Button>
      </div>
      <div className="mt-9 w-full h-[45vh] flex items-center justify-between">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex items-center justify-center relative">
            <div className="h-64 w-64 rounded-full bg-lime-500 border border-lime-500 shadow-sm shadow-lime-100">
              <Image
                src={first}
                alt="first"
                className="h-full w-full object-contain rounded-full"
              />
            </div>
            <div className="border-lime-500 animate-float_one bg-white shadow-sm  absolute top-0 -left-5 border px-2 py-1 rounded-md">
              <p className="text-xs">Poor Strategy</p>
            </div>

            <div className="border-lime-500 animate-float_two bg-white shadow-sm  absolute top-10 -right-10 border px-2 py-1 rounded-md">
              <p className="text-xs">Delayed Insight</p>
            </div>

            <div className="border-lime-500 animate-float_three bg-white shadow-sm absolute bottom-0 -left-5 border px-2 py-1 rounded-md">
              <p className="text-xs">Low Profit</p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-16 h-px bg-lime-500"></div>
            <div className="">
              <Badge
                variant={"outline"}
                className={
                  "bg-gradient-to-r from-primary to-sky-500 text-white"
                }
              >
                Connect
              </Badge>
            </div>
            <div className="w-14 h-px bg-lime-500"></div>
          </div>

          <div className="">
            <CardDemo className="h-full" />
          </div>

          <div className="flex items-center justify-center">
            <div className="w-24 h-px bg-lime-500"></div>
          </div>
          <div className="relative bg-sky-500 rounded-lg p-1 w-full h-72">
            <div className="h-full w-full rounded-lg bg-white p-3">
              <p className="text-lg font-bold">Dashboard</p>

              <div className="h-20 w-32 shadow-md mt-3 rounded-md border"></div>

              <div className="h-32 w-w-full shadow-md mt-3 rounded-md border"></div>
            </div>

            <div className="absolute -top-10 -right-10 border h-30 w-44 shadow-sm rounded-lg bg-white p-3">
              <div className="h-full flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="bg-lime-500 text-white rounded-full p-1">
                      <DollarSign className="size-4" />
                    </div>
                    <p className="text-sm font-medium">Sales</p>
                  </div>
                  <div className="text-lime-500 flex items-center">
                    <ArrowUp className="size-5" />
                    <p>20%</p>
                  </div>
                </div>
                <div className="mt-3 px-1">
                  <p className="text-xl font-black">3690</p>
                  <div className="mt-1">
                    <div className="w-full h-3 rounded-full border">
                      <div className="w-4/5 h-full rounded-full bg-lime-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
