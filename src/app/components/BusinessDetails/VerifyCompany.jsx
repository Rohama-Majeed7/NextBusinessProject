import Image from "next/image";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";

const VerifyCompany = () => {
  return (
      <section className="max-w-[1150px] p-4 md:py-10 mt-[50px] mx-auto flex md:flex-row flex-col justify-between gap-6">
        <div className="flex md:flex-row flex-col gap-7">
          <Image
            src="/images/love-book-logo.png"
            alt="Logo"
            height={130}
            width={130}
            className="object-cover"
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <h1 className="text-3xl font-bold text-[#323232]">LoveBook</h1>
                <div className="border-1 px-2 gap-2 py-1 rounded-full h-fit border-[#713fff] text-[#713fff] font-semibold flex items-center">
                  <MdOutlineVerified className="text-[#713fff]" />
                  <span className="md:block hidden">Verified company</span>
                </div>
              </div>
              <div className="flex items-center">
                <SlLocationPin className="text-[#737373]" />
                <span className="text-[#737373] ">
                  Irvine, United States
                </span>
              </div>
            </div>
            <div className="flex  items-center self-start gap-3  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full p-3">
              <ul className="flex">
                <li>
                  <Image
                    class="star-rating-icon"
                    src="images/rating-star-full.svg"
                    alt="star"
                    height={40}
                    width={40}
                  />
                </li>
                <li>
                  <Image
                    class="star-rating-icon"
                    src="images/rating-star-full.svg"
                    alt="star"
                    height={40}
                    width={40}
                  />
                </li>
                <li>
                  <Image
                    class="star-rating-icon"
                    src="images/rating-star-full.svg"
                    alt="star"
                    height={40}
                    width={40}
                  />
                </li>
                <li>
                  <Image
                    class="star-rating-icon"
                    src="images/rating-star-half.svg"
                    alt="star"
                    height={40}
                    width={40}
                  />
                </li>
                <li>
                  <Image
                    class="star-rating-icon"
                    src="images/rating-star-blank.svg"
                    alt="star"
                    height={40}
                    width={40}
                  />
                </li>
              </ul>
              <span className="text-[#737373]">4.7</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <IoIosLink className="text-[#713fff] font-bold text-4xl" />
            <div className="flex flex-col">
              <span className="text-[#737373]">Visit this website</span>
              <Link className="text-xl font-semibold text-[#713fff] underline" href={""}>
                www.lovebookonline.com
              </Link>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <span className="text-[#737373]">Your Review Score</span>
              <span className="text-[#323232] font-semibold text-2xl">5.0</span>
            </div>
            <div className="flex flex-col border-1 border-l-gray-400 px-2">
              <span className="text-[#737373]">Reviews</span>
              <span className="text-[#323232] font-semibold text-2xl">1,924</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default VerifyCompany;
