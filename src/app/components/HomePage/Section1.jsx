"use client";
import React from "react";
import Image from "next/image";


const Section1 = () => {
  const profiles = [
    { src: "/images/profile-image-6.jpg", size: "w-12" },
    { src: "/images/profile-image-5.jpg", size: "w-16" },
    { src: "/images/profile-image-4.jpg", size: "w-20" }, 
    { src: "/images/profile-image-3.jpg", size: "w-16" },
    { src: "/images/profile-image-2.jpg", size: "w-12" },
  ];

  return (
    <section className="md:p-7 p-4">
      <div className="max-w-[1050px] mx-auto ">
        <h1 className="text-3xl sm:text-4xl py-4 my-6 lg:text-5xl font-bold text-gray-900 mb-4 text-center ">
          Superior Customer Feedback Solutions for Business Growth
        </h1>

        <main className="grid md:grid-cols-2 grid-cols-1 gap-3 justify-center">
          <article className="bg-[#ffffff] flex flex-col gap-5 justify-center  p-6 rounded-lg">
            <p className="text-[#808080] text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Image src={"/images/Screenshot 2025-05-05 215222.png"} width={200} height={200} alt="line"  />
            <div className="flex justify-between">
              <div className="flex items-center flex-col sm:flex-row ">
                <Image src={"/images/icon2.png"} width={100} height={100} alt="icon"/>
                <div className="text-[#474747]">
                  <h3 className="font-bold text-2xl">2K+</h3>
                  <p>Business</p>
                </div>
              </div>
              <div>
                <div className="text-[#474747] flex gap-3 items-center flex-col sm:flex-row">
                  <Image src={"/images/icon.png"} width={100} height={100} alt="icon" />
                  <div>
                    <h3 className="font-bold text-2xl">1K+</h3>
                    <p>Products</p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="bg-[#ffffff] flex flex-col gap-8 justify-center items-center p-6 rounded-lg">
            <div className="text-center">
              <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
                Reviews overview
              </h2>
            </div>

            <div className="flex justify-center items-center ">
              {profiles.map((profile, idx) => (
                <div
                  key={idx}
                  className={`relative -ml-4 first:ml-0 ${profile.size} aspect-square rounded-full overflow-hidden border-2 border-white shadow-md ${profile.z}`}
                >
                  <Image
                    src={profile.src}
                    alt={`Profile ${idx + 1}`}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
            <p className=" text-base text-gray-500 text-center ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className=" grid grid-cols-2 gap-2">
              <div className="bg-[#f5f5f5] rounded-lg  px-6 py-4 text-center border-1 border-gray-50">
                <h1 className="text-3xl font-bold text-black">10M +</h1>
                <p className="mt-2 text-base text-gray-500">Reviews</p>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg  p-4 text-center border-1 border-gray-50">
                <h1 className="text-3xl  font-bold text-black">1M +</h1>
                <p className="mt-2 text-base text-gray-500">Users</p>
              </div>
            </div>
          </article>
          
        </main>
      </div>
    </section>
  );
};

export default Section1;
