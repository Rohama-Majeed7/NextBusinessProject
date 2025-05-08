"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilterCircleOutline } from "react-icons/io5";

const Relevant = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <section>
      <main className="flex justify-between">
        {/* left */}
        <div className="relative flex justify-between text-gray-500 gap-3">
          <span>sort by:</span>
          <div className="flex gap-3 items-center">
            <span className="text-[#323232] font-semibold text-xl">
              Most Relevant
            </span>
            <FaAngleDown
              onClick={() => {
                setShow(!show);
              }}
              className="text-gray-500 font-semibold"
            />
          </div>
          <div
            className={`flex ${
              show ? "block" : "hidden"
            } flex-col gap-2 w-fit p-3 rounded-lg shadow-lg bg-white absolute right-0 top-8`}
          >
            <span className="text-[#323232] ">Most Relevant</span>
            <hr />
            <span className="text-[#323232]">Most Relevant</span>
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
              className="text-[#323232] text-xl"
            />
            <span className="text-[#323232] ">Filter</span>
          </div>
          <div
            className={`flex ${
              show1 ? "block" : "hidden"
            } flex-col gap-2 w-fit p-3 rounded-lg shadow-lg bg-white absolute right-0 top-8`}
          >
            <span className="text-[#323232] ">Action</span>
            <hr />
            <span className="text-[#323232]">Another Action</span>
            <hr />
            <span className="text-[#323232]">Something else</span>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Relevant;
