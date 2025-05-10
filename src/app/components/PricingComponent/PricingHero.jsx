"use client"
import Link from "next/link";
import React from "react";
import { Search } from "lucide-react";
const PricingHero = () => {
  return (
    <section class="py-18 px-5">
      <div class="flex flex-col max-w-[1150px] mx-auto gap-10">
        <div className="flex flex-col md:w-[900] mx-auto gap-2 justify-center items-center">
          <h1 className="font-bold text-3xl md:text-5xl text-center text-[#323232]">
            Find the right Plan for you
          </h1>
          <p className="text-[#323232] font-semibold text-center">
            Compare the best product in this category
          </p>
        </div>
        {/* form */}
        <div className="self-center w-full md:w-[50%] my-6">
          <div className="relative w-full ">
            <Search className="absolute right-10 top-1/2 -translate-y-1/2 w-4 h-4 text-white" />
            <input
              type="text"
              placeholder="Search a Business or product Name "
              className="w-full bg-white p-4 rounded-full border-1  border-[#e0e0e0] text-white placeholder:text-gray-400 focus:outline-[#713fff] focus:outline-1"
            />
            <button
              variant="default"
              className="absolute flex items-center rounded-full gap-2 transition justify-center right-4 top-2 md:px-5 md:py-2 p-3  bg-[#713fff]  text-white hover:bg-[#323232]"
            >
              <Search className="text-sm" />
              <span className="text-sm hidden sm:block">Search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
