import Image from "next/image";
import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineVerified } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import Link from "next/link";

const VerifyCompany = () => {
  return (
    <section className="md:p-10 p-5">
      <main className="max-w-[1050px] mx-auto flex md:flex-row flex-col justify-between gap-6">
        <div className="flex md:flex-row flex-col gap-5">
          <Image
            src="/images/love-book-logo.png"
            alt="Logo"
            height={100}
            width={100}
          />
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <h1 className="text-2xl font-bold text-[#323232]">LoveBook</h1>
                <div className="border-1 px-2 gap-2 py-1 rounded-full h-fit border-purple-500 text-purple-600 font-semibold flex items-center">
                  <MdOutlineVerified className="text-purple-500" />
                  <span className="md:block hidden">Verified company</span>
                </div>
              </div>
              <div className="flex items-center">
                <SlLocationPin className="text-gray-500" />
                <span className="text-gray-500 font-bold">
                  Irvine, United States
                </span>
              </div>
            </div>
            <div className="flex  items-center gap-1  bg-white/20 backdrop-blur-md border border-white/30 shadow-lg rounded-full p-3">
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
              <span className="text-gray-400">4.7</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <IoIosLink className="text-purple-500 text-4xl" />
            <div className="flex flex-col">
              <span className="text-gray-400">Visit this website</span>
              <Link className="text-xl text-purple-600 underline" href={""}>
                www.lovebookonline.com
              </Link>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <span className="text-gray-500">Your Review Score</span>
              <span className="text-[#323232] font-bold text-xl">5.0</span>
            </div>
            <div className="flex flex-col border-1 border-l-gray-400 px-2">
              <span className="text-gray-500">Reviews</span>
              <span className="text-[#323232] font-bold text-xl">1,924</span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default VerifyCompany;
