"use client";
import Link from "next/link";
import React from "react";
const NeedSupport = () => {
  return (
    <section className="md:p-10 p-4">
      <div className="max-w-[1050px]  mx-auto gap-5 md:gap-10 grid grid-cols-1 md:grid-cols-2">
        <Link
          className="bg-[#713fff] w-full my-4 text-center text-white text-xl hover:opacity-50 rounded-full px-4 py-4"
          href="help-center.html"
        >
          Need Support
        </Link>
        <div className="flex flex-col  text-xl md:text-3xl font-bold text-[#323232] gap-2">
          <span className="">Get Assistance:</span>
          <h3>Explore Our Help Center</h3>
        </div>
      </div>
    </section>
  );
};

export default NeedSupport;
