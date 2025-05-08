"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

// import Video from "next-video"
const Hero = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  const handlePause = () => {
    videoRef.current?.pause();
  };
  return (
    <section className="p-4 md:mt-[150px] mt-[0px]">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 max-w-[1050px] mx-auto   justify-center">
        {/* video */}
        <div className="relative self-start w-full  ">
          <div className="relative h-[400px] w-full rounded-lg">
            <video
              ref={videoRef}
              className="h-full w-full rounded-lg"
              controls={false}
              src="/videos/sample-review.mp4"
              poster="/videos/sample-review-tumb.jpg"
            />
          </div>
          <div className="">
            <Image
              onClick={handlePlay}
              onDoubleClick={handlePause}
              src={"/images/button-play.svg"}
              className="absolute top-[35%] left-[45%]"
              width={50}
              height={50}
              alt="start"
            />
          </div>
          <ul className="flex absolute top-[95%] md:left-[30%] left-[25%] gap-1 self-center bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full p-3">
            {[...Array(5)].map((_, starIdx) => (
              <li key={starIdx}>
                <Image
                  src="/images/purple-star-glod.png"
                  alt="star"
                  height={30}
                  width={30}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* ============= */}

        <div className="flex flex-col gap-2">
          <span className="text-semibold text-xl text-[#713fff] p-0">
            elevate your business
          </span>
          <h4 className="text-[#323232] font-bold text-2xl">
            Why we're your best choice
          </h4>
          <p className="text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book.Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link
            className="bg-[#713fff] w-full my-4 text-center text-white text-xl hover:opacity-50 rounded-full px-4 py-4"
            href=""
          >
            Write a review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
