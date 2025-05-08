"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const DetectingDeception = () => {
  return (
    <section className="md:p-7 p-4">
      <div className="bg-[#ffffff] max-w-[1050px] mx-auto p-8 gap-3 rounded-lg grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="text-[#323232] flex flex-col gap-7">
            <h2 className="text-3xl font-semibold leading-12 md:leading-15 md:text-5xl">
              Detecting Deception: Our <span>AI</span> Review Analysis
            </h2>
            <p className="text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <li className="flex gap-3 items-center">
                <Image
                  src="/images/icongray-sentiment_analysis.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="md:w-[50px] md:h-[50px]"
                />{" "}
                <span className="font-semibold text-xl md:text-sm">
                  Advanced Sentiment Analysis
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Image
                  src="/images/icongray-machine_leaning.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="w-[50px] h-[50px]"
                />{" "}
                <span className="font-semibold text-xl md:text-sm">
                  Machine Learning Algorithms
                </span>
              </li>
              <li className="flex gap-3  items-center">
                <Image
                  src="/images/icongray-data_analysis.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="md:w-[50px] md:h-[50px]"
                />{" "}
                <span className="font-semibold text-xl md:text-sm">
                  Historical Data Analysis
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Image
                  src="/images/icongray-user_behavior_analysis.svg"
                  alt=""
                  height={50}
                  width={50}
                  className="md:w-[50px] md:h-[50px]"
                />{" "}
                <span className="font-semibold text-xl md:text-sm">
                  User Behavior Analysis
                </span>
              </li>
            </ul>
            <Link className="font-bold my-4" href="#">
              Know more about AI features
            </Link>
          </div>
        </div>
        <div className="md:relative">
          <Image
            className="self-end md:absolute md:top-0 md:right-0"
            src="/images/image-ai_review_analysis.svg"
            alt=""
            height={400}
            width={400}
          />
        </div>
      </div>
    </section>
  );
};

export default DetectingDeception;
