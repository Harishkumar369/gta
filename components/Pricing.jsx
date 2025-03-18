import React from "react";
import { Cover } from "./ui/cover";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";

export default function Pricing() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12">
      <div className="flex justify-between items-end gap-9">
        <div className="">
          <div className="text-xl font-semibold tracking-tight">
            <Cover>Prices that make sense! </Cover>
          </div>
          <h3 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Choose the best plan
            <br />
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              for your needs
            </span>
          </h3>
        </div>
        <div className="text-gradient-outline text-7xl font-black pb-3">
          Pricing
        </div>
      </div>
      <div className="mt-9">
        <div className="w-full">
          <div className="container mx-auto">
            <div className="flex text-center justify-center items-center gap-4 flex-col">
              <div className="grid text-left w-full grid-cols-3 lg:grid-cols-4 divide-x">
                <div className="col-span-3 lg:col-span-1"></div>
                <div className="px-3 py-1 md:px-6 md:py-4  gap-2 flex flex-col">
                  <p className="text-2xl">Startup</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and
                    faster than ever for everyone and everywhere.
                  </p>
                  <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <Button variant="outline" className="gap-4 mt-8">
                    Try it <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                  <p className="text-2xl">Growth</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and
                    faster than ever for everyone and everywhere.
                  </p>
                  <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <Button className="gap-4 mt-8">
                    Try it <MoveRight className="w-4 h-4" />
                  </Button>
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 gap-2 flex flex-col">
                  <p className="text-2xl">Enterprise</p>
                  <p className="text-sm text-muted-foreground">
                    Our goal is to streamline SMB trade, making it easier and
                    faster than ever for everyone and everywhere.
                  </p>
                  <p className="flex flex-col lg:flex-row lg:items-center gap-2 text-xl mt-8">
                    <span className="text-4xl">$40</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      / month
                    </span>
                  </p>
                  <Button variant="outline" className="gap-4 mt-8">
                    Contact us <PhoneCall className="w-4 h-4" />
                  </Button>
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1  py-4">
                  <b>Features</b>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  SSO
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  AI Assistant
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Minus className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  Version Control
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Minus className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  Members
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <p className="text-muted-foreground text-sm">5 members</p>
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <p className="text-muted-foreground text-sm">25 members</p>
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <p className="text-muted-foreground text-sm">100+ members</p>
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  Multiplayer Mode
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Minus className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 lg:px-6 col-span-3 lg:col-span-1 py-4">
                  Orchestration
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Minus className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div className="px-3 py-1 md:px-6 md:py-4 flex justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
