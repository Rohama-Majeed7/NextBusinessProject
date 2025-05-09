"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilterCircleOutline } from "react-icons/io5";

const Relevant = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
      <div className="flex justify-between my-5 py-6">
        {/* left */}
        <div className="relative flex justify-between gap-3">
          <span className="text-[#b7b9bb]">sort by:</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#343434] font-semibold text-xl">
              Most Relevant
            </span>
            <FaAngleDown
              onClick={() => {
                setShow(!show);
              }}
              className="text-[#b7b9bb] font-semibold"
            />
          </div>
          <div
            className={`flex ${
              show ? "block" : "hidden"
            } flex-col gap-2 w-fit p-3 rounded-lg shadow-lg bg-white absolute right-0 top-8`}
          >
            <span className="text-[#343434] hover:bg-[#f6f6f6] p-2 cursor-pointer ">Most Relevant</span>
            
            <hr />
            <span className="text-[#b7b9bb] hover:bg-[#f6f6f6] p-2 cursor-pointer  hover:text-[#343434]">Most Relevant</span>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-1 items-center">
            <IoFilterCircleOutline
              onClick={() => {
                setShow1(!show1);
                if (show === true) {
                  setShow(false);
                }
              }}
              className="text-[#b7b9bb] text-xl"
            />
            <span className="text-[#343434] font-bold ">Filter</span>
          </div>
          <div
            className={`flex ${
              show1 ? "block" : "hidden"
            } flex-col gap-2 w-fit p-3 rounded-lg shadow-lg bg-white absolute right-0 top-8`}
          >
            <span className="text-[#343434] hover:bg-[#f6f6f6] p-2 cursor-pointer text-sm md:text-nowrap">Action</span>
            <hr />
            <span className="text-[#343434] hover:bg-[#f6f6f6] p-2 cursor-pointer text-sm md:text-nowrap">Another Action</span>
            <hr />
            <span className="text-[#343434] hover:bg-[#f6f6f6] p-2 cursor-pointer text-sm md:text-nowrap">Something else</span>
          </div>
        </div>
      </div>
  );
};

export default Relevant;
