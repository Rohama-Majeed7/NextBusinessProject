"use client";

import Link from "next/link";
import Image from "next/image";
import { AlignJustify } from "@deemlol/next-icons";
import Sidebar from "@/app/components/HomePage/SideBar";
import { useState } from "react";
const HomeHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#edf0f5] hidden md:block">
        <div className="mx-auto flex items-center justify-evenly px-4 py-3 md:py-5 max-w-[1050px]">

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/pricing"
              className="text-gray-800 hover:text-[#713fff]"
            >
              Plans
            </Link>
            <Link
              href="/reviews"
              className="text-gray-800 hover:text-[#713fff]"
            >
              Reviews
            </Link>
            <Link
              href="/resources"
              className="text-gray-800 hover:text-[#713fff]"
            >
              Resources
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-[#713fff]">
              About
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/join" className="text-gray-800 hover:text-[#713fff]">
              Join
            </Link>
            <span className="h-5 w-px bg-gray-400"></span>
            <Link href="/signin" className="text-gray-800 hover:text-[#713fff]">
              Sign in
            </Link>
            <Link href="" className="text-white bg-[#713fff] hover:opacity-20 py-2 px-3 rounded-full">
             Business
            </Link>
          </div>
        </div>
      </header>

      <header className=" block md:hidden">
        <div className="mx-auto my-4 flex items-center justify-between px-3 py-3 md:py-3 max-w-[1050px] shadow-2xl bg-white rounded-full w-90">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/images/logo-your-reivew.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          <AlignJustify
            className="text-[#878787] h-8 w-8"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default HomeHeader;
