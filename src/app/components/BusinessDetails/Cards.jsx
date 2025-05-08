"use client";
import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiThumbsUp, FiShare2, FiFlag } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto p-4">
      {[1, 2, 3, 4].map((_, i) => (
        <div
          key={i}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col gap-3 max-w-2xl w-full"
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
                  <h3 className="font-semibold text-gray-800">Gabi Guerra</h3>
                  <span className="text-gray-500 text-sm">1 review</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="flex text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                  </div>
                  <span className="flex items-center gap-1">
                    <IoLocationOutline />
                    <span className="smd:block hidden">United States</span>
                  </span>
                </div>
              </div>
              <div className="flex md:self-start md:items-center flex-row gap-2 text-sm text-gray-500">
                <span>10 hours ago</span>
                <span className="flex items-center gap-1 text-purple-600 border border-purple-600 px-2 py-1 rounded-full text-xs font-medium">
                  <MdVerified className="text-base" />
                  <span className="sm:block hidden"> Verified</span>
                </span>
              </div>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer tookLorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </p>

          {/* Experience Date */}
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <p className="text-sm text-gray-700">
              Date of experience:{" "}
              <span className="font-semibold">February 07, 2024</span>
            </p>

            {/* Actions */}
            <div className="flex gap-3 mt-2">
              <button className="border rounded-lg p-2 text-gray-500 hover:bg-gray-50">
                <FiThumbsUp />
              </button>
              <button className="border rounded-lg p-2 text-gray-500 hover:bg-gray-50">
                <FiShare2 />
              </button>
              <button className="border rounded-lg p-2 text-gray-500 hover:bg-gray-50">
                <FiFlag />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
