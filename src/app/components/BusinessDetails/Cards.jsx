"use client";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiThumbsUp, FiShare2, FiFlag } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Cards() {
  return (
    <div className="grid grid-cols-1  gap-6 max-w-6xl mx-auto ">
      {[1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-[20px] p-8 flex flex-col gap-3  w-full"
        >
          {/* Header */}
          <div className="flex  items-start gap-2 flex-row">
            <div className="flex gap-3 items-center">
              <Image
                src="/images/profile-image-3.jpg"
                alt="User"
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12"
              />
            </div>

            <div className="flex justify-between md:items-center gap-3 md:flex-row flex-col  w-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-[#000000]">Gabi Guerra</h3>
                  <span className="text-[#737373] text-sm">1 review</span>
                </div>
                <div className="flex items-center gap-2 text-[#737373] text-sm">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <span className="flex items-center gap-1">
                    <IoLocationOutline />
                    <span className="md:block hidden text-[#737373]">United States</span>
                  </span>
                </div>
              </div>
              <div className="flex md:self-start md:items-center flex-row gap-2 text-sm text-[#737373]">
                <span>10 hours ago</span>
                <span className="flex items-center gap-1 text-[#713fff] border-1 border-[#713fff] px-2 py-1 rounded-full text-xs font-medium">
                  <MdVerified className="text-base text-[#713fff]" />
                  <span className="sm:block hidden"> Verified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm text-[#737373]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer tookLorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>

          {/* Experience Date */}
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <p className="text-sm text-[#737373]">
              Date of experience:{" "}
              <span className="font-semibold text-[#323232]">February 07, 2024</span>
            </p>

            {/* Actions */}
            <div className="flex gap-3 mt-2">
              <button className=" rounded-lg p-2 text-[#737373] border-1 border-[#737373]  hover:border-[#343434] hover:text-[#343434]">
                <FiThumbsUp />
              </button>
              <button className="rounded-lg p-2 text-[#737373] border-1 border-[#737373]  hover:border-[#343434] hover:text-[#343434]">
                <FiShare2 />
              </button>
              <button className="rounded-lg p-2 text-[#737373] border-1 border-[#737373]  hover:border-[#343434] hover:text-[#343434]">
                <FiFlag />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
