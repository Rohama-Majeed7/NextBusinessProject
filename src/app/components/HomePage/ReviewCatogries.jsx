"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const ReviewCatogries = () => {
  return (
    <section className="my-12 md:p-8  p-4">
      <div className="">
        <h2 className="text-[#323232] font-bold text-4xl text-center p-3 my-4">Explore Our Review Categories</h2>
        <div className="max-w-[1050px]  mx-auto my-6">
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] justify-center p-2 gap-4">
            <li className="bg-[#ffffff] flex flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-animals.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Animals & Pets</h6>
            </li>
            <li className="bg-[#ffffff] flex flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-beauty.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Beauty & Well-being</h6>
            </li>
            <li className="bg-[#ffffff] flex flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-business.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Business Services</h6>
            </li>
            <li className="bg-[#ffffff] flex flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-construction.svg" alt="" width={60} height={60} />
              <h6 className="text-gray-500 font-bold">Construction & Manufacturing</h6>
            </li>
            <li className="bg-[#ffffff] flex flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-education.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Education & Training</h6>
            </li>
            
          </ul>
          <ul className="flex flex-col md:flex-row justify-center gap-4">
          <li className="bg-[#ffffff] flex flex-col md:w-[180px] w-full gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-electrics.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Electronics & Technology</h6>
            </li>
            <li className="bg-[#ffffff] flex md:w-[180px] w-full flex-col gap-3 transition-all p-6 rounded-lg border-1  hover:border-black hover:shadow-3xl">
              <Image src="/images/icon-categery-events.svg" alt="" width={60} height={60}/>
              <h6 className="text-gray-500 font-bold">Events & Entertainment</h6>
            </li>
          </ul>

          <div className="text-center mt-5">
            <Link className="text-[#323232] font-bold my-4" href={"/category-listings"}>
              See all categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCatogries;
