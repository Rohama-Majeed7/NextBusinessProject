"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { IoFilterCircleOutline } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Relevant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <div className="flex justify-between my-2 py-2">
      {/* left */}
      <div className="w-full md:w-[400px] flex justify-between items-center gap-3">
        <span className="text-[#b7b9bb] text-nowrap">sort by:</span>
        <div className="flex gap-3 items-center">
          <span className="text-[#343434] text-nowrap font-semibold text-xl">
            Most Relevant
          </span>
        </div>
        <div className="relative w-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center"
          >
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl"
            >
              <FaAngleDown className="text-[#b7b9bb] font-semibold" />
            </motion.span>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  ease: [0.34, 1.56, 0.64, 1], // springy bounce drop
                }}
                className="absolute top-full flex flex-col left-0 w-[150px] mt-2 bg-white border border-gray-200 shadow-xl rounded-sm z-10"
              >
                <p className="font-bold text-[#323232] cursor-pointer hover:bg-[#F6F6F6] p-2">
                  Most Relevant
                </p>
                <hr />
                <p className=" text-[#323232] cursor-pointer hover:bg-[#F6F6F6] p-2">
                  Most Relevant
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-1 items-center">
          <div className="relative w-full">
            <button
              onClick={() => {
                setShow1(!show1);
                if (isOpen === true) {
                  setIsOpen(false);
                }
              }}
              className="flex items-center cursor-pointer"
            >
              <IoFilterCircleOutline className="text-[#b7b9bb] font-semibold" />
            </button>

            <AnimatePresence>
              {show1 && (
                <motion.div
                  initial={{ opacity: 0, x: -120, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{
                    duration: 0.5,
                    ease: [0.34, 1.56, 0.64, 1], // springy bounce drop
                  }}
                  className="absolute top-full flex flex-col left-0 md:w-[200px] mt-2 bg-white border border-gray-200 shadow-xl rounded-sm z-10"
                >
                  <p className=" text-[#323232] cursor-pointer hover:bg-[#F6F6F6] p-2">
                    Action
                  </p>
                  <p className=" text-[#323232] cursor-pointer hover:bg-[#F6F6F6] p-2">
                    Another Action
                  </p>
                  <p className=" text-[#323232] cursor-pointer hover:bg-[#F6F6F6] p-2">
                    Something Else
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span>Filter</span>
        </div>
      </div>
    </div>
  );
};

export default Relevant;
