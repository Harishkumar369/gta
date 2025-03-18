"use client";
import React, { useState } from "react";
import { Cover } from "./ui/cover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Service = () => {
  const [tabs, setTabs] = useState("Analytics");

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-0 py-9 sm:py-12">
      <div className="flex justify-between items-end gap-9">
        <div className="">
          <div className="text-xl font-semibold tracking-tight">
            <Cover>What We Do</Cover>
          </div>
          <h3 className="mt-3 scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl">
            Transforming Businesses with <br />
            <span className="bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent">
              Data, Intelligence, and Innovation
            </span>
          </h3>
        </div>
        <div className="text-gradient-outline text-7xl font-black">
          SERVICES
        </div>
      </div>
      <div className="mt-9">
        <div className="flex gap-9 border-b mb-3 w-full">
          <div
            onClick={() => setTabs("Analytics")}
            className={
              tabs === "Analytics"
                ? "border-b-2 pb-3 border-lime-500 cursor-pointer text-lime-600"
                : "cursor-pointer pb-3"
            }
          >
            <h3 className="font-medium">Analytics</h3>
          </div>
          <div
            onClick={() => setTabs("Business Intelligence")}
            className={
              tabs === "Business Intelligence"
                ? "border-b-2 pb-3 border-lime-500 cursor-pointer text-lime-600"
                : "cursor-pointer pb-3"
            }
          >
            <h3 className="font-medium">Business Intelligence</h3>
          </div>
          <div
            onClick={() => setTabs("Artificial Intelligence")}
            className={
              tabs === "Artificial Intelligence"
                ? "border-b-2 pb-3 border-lime-500 cursor-pointer text-lime-600"
                : "cursor-pointer pb-3"
            }
          >
            <h3 className="font-medium">Artificial Intelligence</h3>
          </div>
          <div
            onClick={() => setTabs("Automation")}
            className={
              tabs === "Automation"
                ? "border-b-2 pb-3 border-lime-500 cursor-pointer text-lime-600"
                : "cursor-pointer pb-3"
            }
          >
            <h3 className="font-medium">Automation</h3>
          </div>
          <div
            onClick={() => setTabs("Consulting")}
            className={
              tabs === "Consulting"
                ? "border-b-2 pb-3 border-lime-500 cursor-pointer text-lime-600"
                : "cursor-pointer pb-3"
            }
          >
            <h3 className="font-medium">Consulting</h3>
          </div>
        </div>

        <div className="mt-6">
          {tabs === "Analytics" ? (
            <div>
              <div className="grid grid-cols-2 gap-9 content-start">
                <Card className="h-[26rem]">
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
                <div className="h-full flex flex-col px-3 justify-start">
                  <h3 className="text-4xl font-bold">
                    Unlock the Power of Data to Drive Success
                  </h3>
                  <Accordion
                    type="single"
                    collapsible
                    className="space-y-3 mt-6"
                  >
                    <AccordionItem
                      value="item-1"
                      className="border rounded-xl shadow-sm px-3 bg-white"
                    >
                      <AccordionTrigger>
                        Gain a deep understanding of your customers and
                        operations.
                      </AccordionTrigger>
                      <AccordionContent>
                        Gain a deep understanding of your customers and
                        operations.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-2"
                      className="border rounded-xl shadow-sm px-3 bg-white"
                    >
                      <AccordionTrigger>
                        Identify growth opportunities and address challenges.
                      </AccordionTrigger>
                      <AccordionContent>
                        Identify growth opportunities and address challenges.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-3"
                      className="border rounded-xl shadow-sm px-3 bg-white"
                    >
                      <AccordionTrigger>
                        Make data-driven decisions to optimize performance.
                      </AccordionTrigger>
                      <AccordionContent>
                        Make data-driven decisions to optimize performance.
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem
                      value="item-4"
                      className="border rounded-xl shadow-sm px-3 bg-white"
                    >
                      <AccordionTrigger>
                        Turn insights into actionable, measurable results.
                      </AccordionTrigger>
                      <AccordionContent>
                        Turn insights into actionable, measurable results.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div className="mt-6">
                <h1 className="text-xl font-semibold">Case Studies</h1>
                <div className="mt-6 flex gap-3 items-center justify-center">
                  <a
                    className="bg-white block border border-gray-200 rounded-xl hover:shadow-sm focus:outline-none"
                    href="#"
                  >
                    <div className="relative flex items-center overflow-hidden">
                      <img
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image"
                      />

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-gray-800">
                            Studio by Mailchimp
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Produce professional, reliable streams easily
                            leveraging Mailchimp's innovative broadcast studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="bg-white block border border-gray-200 rounded-xl hover:shadow-sm focus:outline-none"
                    href="#"
                  >
                    <div className="relative flex items-center overflow-hidden">
                      <img
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image"
                      />

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-gray-800">
                            Studio by Mailchimp
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Produce professional, reliable streams easily
                            leveraging Mailchimp's innovative broadcast studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    className="bg-white block border border-gray-200 rounded-xl hover:shadow-sm focus:outline-none"
                    href="#"
                  >
                    <div className="relative flex items-center overflow-hidden">
                      <img
                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                        src="https://images.unsplash.com/photo-1661956600655-e772b2b97db4?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Image"
                      />

                      <div className="grow p-4 ms-32 sm:ms-48">
                        <div className="min-h-24 flex flex-col justify-center">
                          <h3 className="font-semibold text-sm text-gray-800">
                            Studio by Mailchimp
                          </h3>
                          <p className="mt-1 text-sm text-gray-500">
                            Produce professional, reliable streams easily
                            leveraging Mailchimp's innovative broadcast studio.
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : tabs === "Business Intelligence" ? (
            <div>BI</div>
          ) : tabs === "Artificial Intelligence" ? (
            <div>AI</div>
          ) : tabs === "Automation" ? (
            <div>Automation</div>
          ) : tabs === "Consulting" ? (
            <div>Consulting</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Service;
