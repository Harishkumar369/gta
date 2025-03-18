"use client";
import Image from "next/image";
import React from "react";

import logo from "@/public/logo.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex items-center justify-between py-3">
      <Link href={"/"} className="flex items-center gap-3">
        <Image className="size-9" src={logo} alt="logo" />
        <h3 className="flex gap-0 leading-5 text-xl font-black tracking-wide">
          <span className="text-lime-500">GoTo</span>
          <span className="text-sky-500">Analyze</span>
        </h3>
      </Link>
      <div className="sm:flex items-center gap-9 hidden">
        <Link
          href={"/services"}
          className={
            pathname === "/services"
              ? "relative inline-block text-black focus:outline-none before:absolute before:top-6 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
              : "hover:text-gray-600"
          }
        >
          Services
        </Link>
        <Link
          href={"/pricing"}
          className={
            pathname === "/pricing"
              ? "relative inline-block text-black focus:outline-none before:absolute before:top-6 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
              : "hover:text-gray-600"
          }
        >
          Pricing
        </Link>
        <Link
          href={"/about"}
          className={
            pathname === "/about"
              ? "relative inline-block text-black focus:outline-none before:absolute before:top-6 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
              : "hover:text-gray-600"
          }
        >
          About
        </Link>
        <Link
          href={"/blog"}
          className={
            pathname === "/blog"
              ? "relative inline-block text-black focus:outline-none before:absolute before:top-6 before:start-0 before:-z-[1] before:w-full before:h-1 before:bg-primary"
              : "hover:text-gray-600"
          }
        >
          Blogs
        </Link>
      </div>
      <div className="sm:flex gap-3 items-center hidden">
        <Button className="" variant={"ghost"}>
          Login
        </Button>
        <Button className="">Book a Demo</Button>
      </div>
      <div className="sm:hidden">
        <Button variant={"outline"} size={"icon"}>
          <AlignJustify />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
