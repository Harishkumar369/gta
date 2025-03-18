import React from "react";
import { Cover } from "./ui/cover";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "./ui/textarea";

const ContactUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12 grid grid-cols-2">
      <div className="flex flex-col justify-center gap-9">
        <div className="">
          <div className="text-xl font-semibold tracking-tight">
            <Cover>One Call away</Cover>
          </div>
          <h3 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Get In Touch <br />
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              With us
            </span>
          </h3>
        </div>
        <div className="text-gradient-outline text-7xl font-black">
          Contact Us
        </div>
      </div>
      <div>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Book a Consultation</CardTitle>
            <CardDescription>
              Fill the below details to get started
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="" />
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Email</Label>
                  <Input id="name" placeholder="" />
                </div>
              </div>

              <div className="w-full flex items-start gap-3 mt-3">
                <div className="grid w-full items-center gap-4 w-[70px]">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Code</Label>
                    <Input id="name" placeholder="" />
                  </div>
                </div>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Phone</Label>
                    <Input id="name" placeholder="" />
                  </div>
                </div>
              </div>
              <div className="grid w-full items-center gap-4 mt-3">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Message</Label>
                  <Textarea id="name" placeholder="" />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button>Submit</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
