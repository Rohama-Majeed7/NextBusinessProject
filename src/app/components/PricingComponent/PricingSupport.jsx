import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";

const PricingSupport = () => {
  return (
    <section className="px-3 pb-[30px]">
      <div className="max-w-[1150px] gap-3 md:gap-[60px] mb-10 p-6 py-15 rounded-[20px] mx-auto bg-white flex flex-col md:flex-row items-center justify-between">
        <Image
          className="md:order-1 order-2 self-center"
          src="/images/vector-help-centre.svg"
          alt="support"
          height={500}
          width={500}
        />{" "}
        <div className="flex flex-col gap-5 md:order-2 order-1 ">
          <h1 className="text-[#323232]  md:text-4xl  text-2xl text-center md:text-left font-bold  ">
            Get Assistance:<br></br> Explore Our Help Centre Need Support
          </h1>
          <Link
            className="bg-[#713fff] md:self-start self-center my-4 text-center text-white text-xl hover:opacity-80 rounded-full md:px-[70px] px-[70px] py-4"
            href="help-center.html"
          >
            <div className="flex justify-center gap-3 items-center">
                <BiSupport />
            Need Support
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSupport;
