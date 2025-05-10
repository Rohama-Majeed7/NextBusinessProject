"use client";

import Link from "next/link";
import Image from "next/image";
import Sidebar from "@/app/components/HomePage/SideBar";
import { HiBars3 } from "react-icons/hi2";

import { useState } from "react";
const PricingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className=" hidden md:block bg-[#ffffff]">
        <div className="mx-auto flex items-center justify-between px-4 py-3 md:py-5 max-w-[1150px]">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/images/logo-your-reivew.png"}
              alt="logo"
              width={200}
              height={200}
              className="object-cover"
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-[#323232]">
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
          <div className="hidden md:flex items-center space-x-4 text-sm font-semibold text-[#323232]">
            <Link href="/join" className="text-gray-800 hover:text-[#713fff]">
              Join
            </Link>
            <span className="h-5 w-px bg-gray-400"></span>
            <Link href="/signin" className="text-gray-800 hover:text-[#713fff]">
              Sign in
            </Link>
          </div>
        </div>
      </header>

      <header className=" block md:hidden p-4">
        <div className="mx-auto my-4 flex items-center justify-between px-3 py-3 md:py-3 max-w-[1050px] bg-white rounded-full ">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={"/images/logo-your-reivew.png"}
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          <HiBars3
            className="text-[#343434] h-8 w-8"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </header>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default PricingHeader;
