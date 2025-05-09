import React from "react";
import Image from "next/image";
import Link from "next/link";
const WhatCategory = () => {
  return (
    <section className="p-3">
      <div className="max-w-[1150px] py-8 gap-5 mx-auto mt-[25px] mb-[70px] p-5 md:p-15 bg-[#ffffff] rounded-lg grid grid-cols-1 md:grid-cols-2">
        <Image
          src="/images/vector-send_category_suggestion.svg"
          alt="img"
          height={449}
          width={449}
          className=""
        />
        <div className=" flex flex-col md:text-left text-center  gap-3">
          <h2 className="text-4xl mt-[10px] md:text-[50px] font-bold text-[#323232]">
            Can’t find a category what you are looking{" "}
          </h2>
          <p className="text-semibold text-[#8b8b8b] text-[20px]">
            Send us a category suggestion...
          </p>
          <Link
            className="bg-[#713fff] w-full mt-[44px] text-center text-white text-xl hover:opacity-85 transition-all rounded-full px-4 py-4"
            href=""
          >
            Send a Category Suggestion{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhatCategory;
