"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const EasyAndSecure = () => {
  return (
    <section className="bg-[#ffffff] p-10">
      <div className="max-w-[1050px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="">
            <div className="easy-control-image">
              <Image
                className="shadow-2xl border-1 border-purple-500 rounded-lg"
                src="/images/control-panel-image.jpg"
                alt=""
                height={600}
                width={600}
              />
            </div>
          </div>
          <div className="">
            <div className=" flex flex-col gap-2 py-2 px-1">
              <span className="text-[#713fff] text-2xl font-bold">
                Easy and Secure
              </span>
              <h2 className="text-4xl md:text-6xl text-[#323232] font-bold">
                Effortless Management Made Simple!
              </h2>
              <p className="text-gray-400 text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
                <Link
                  className="bg-[#713fff] my-4 text-center text-white text-xl w-full hover:opacity-50 rounded-full px-4 py-4"
                  href="contact-sales.html"
                >
                  Get Started
                </Link>
            </div>
          </div>
          </div>
          <ul className="flex justify-between md:flex-row flex-col w-full gap-10 text-xl text-[#323232] font-bold md:gap-3 my-14 p-3">
              <li className=" flex gap-2">
                <div>
                <div className="w-6 h-6 self-start rounded-full bg-gray-200 flex justify-center items-center">
                    <div className="w-2 h-2  rounded-full bg-gray-400"></div>
                </div>
                </div>
                <p>Integer convallis purus id massa sagittis pretium.</p></li>
              <li className=" flex gap-2">
              <div>
                <div className="w-6 h-6 self-start rounded-full bg-gray-200 flex justify-center items-center">
                    <div className="w-2 h-2  rounded-full bg-gray-400"></div>
                </div>
                </div>
                Nulla accumsan felis at sollicitudin vulputate.</li>
              <li className=" flex gap-2">
              <div>
                <div className="w-6 h-6 self-start rounded-full bg-gray-200 flex justify-center items-center">
                    <div className="w-2 h-2  rounded-full bg-gray-400"></div>
                </div>
                </div>
                Nam consequat tellus vel ante dignissim, sit amet feugiat metus
                volutpat.
              </li>
              <li className=" flex gap-2">
              <div>
                <div className="w-6 h-6 self-start rounded-full bg-gray-200 flex justify-center items-center">
                    <div className="w-2 h-2  rounded-full bg-gray-400"></div>
                </div>
                </div>
                Ut vel ipsum sed quam vulputate sollicitudin eget vel enim.
              </li>
            </ul>
        </div>
    </section>
  );
};

export default EasyAndSecure;
