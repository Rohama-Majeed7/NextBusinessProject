"use client";
import React, { useState } from "react";
import Image from "next/image";
const BusinessRegistration = () => {
  const [activeTab, setActiveTab] = useState("business");

  return (
    <section className="md:p-10 p-4">
      <div>
        <div className="max-w-[1050px] mx-auto p-6 bg-[#ffffff] shadow-2lg rounded-lg">
          {/* Toggle Switch */}
          <div className="flex justify-center mb-6 border-1 border-purple-500 w-fit rounded-full p-1 mx-auto">
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 p-3 rounded-full transition  ${
                activeTab === "business"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Business Registration
            </button>
            <button
              onClick={() => setActiveTab("product")}
              className={`px-6 py-2 rounded-full transition ${
                activeTab === "product"
                  ? "bg-violet-600 text-white"
                  : "bg-white text-gray-700"
              }`}
            >
              Product Registration
            </button>
          </div>

          {/* Form Content */}
          <form className="space-y-4">
            {activeTab === "business" ? (
              <>
                <div className="flex gap-4">
                  <input
                    className="w-1/2 border p-2 rounded text-gray-400"
                    placeholder="Company Name"
                  />
                  <input
                    className="w-1/2 border p-2 rounded text-gray-400"
                    placeholder="Email ID"
                  />
                </div>
                <div class="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                  <div class="flex items-center space-x-1 px-3 py-2 bg-gray-100">
                    <Image
                      src={"/images/flag-usa.png"}
                      alt="usa-flag"
                      height={10}
                      width={10}
                    />
                    <span class="text-gray-700 font-medium">+1</span>
                  </div>

                  <input
                    type="tel"
                    placeholder="Phone Number"
                    class="flex-1 px-4 py-2 text-gray-500 placeholder-gray-400  focus:outline-none"
                  />
                </div>
                <input
                  className="w-full border p-2 rounded text-gray-400"
                  placeholder="Website"
                />
                <textarea
                  className="w-full border p-2 rounded text-gray-400"
                  placeholder="Address"
                />
                <textarea
                  className="w-full border p-2 rounded text-gray-400"
                  placeholder="About Company"
                />
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    className="md:w-1/3 w-full border p-2 rounded text-gray-400"
                    placeholder="Location"
                  />
                  <input
                    className="md:w-1/3 w-full border p-2 rounded text-gray-400"
                    placeholder="PIN"
                  />
                  <select className="md:w-1/3 w-full border p-2 rounded text-gray-400">
                    <option>Country</option>
                    <option>USA</option>
                    <option>India</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
                  <select className="w-full border p-2 rounded text-gray-400">
                    <option>Select Category</option>
                    <option>Retail</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </select>
                  <div className="flex flex-col md:flex-row md:items-center items-start">
                    <span className="text-[#323232] text-nowrap">
                      File Uploader
                    </span>
                    <input
                      type="file"
                      className="w-full border p-2 rounded text-gray-400 self-start"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 my-10">
                  <label className="flex items-center gap-2 justify-center">
                    <input
                      type="checkbox"
                      className="text-gray-500 border-1 border-purple-400"
                    />
                    <span className="text-sm text-[#323232]">
                      I'd like to receive a demo of YourReviews's paid plans.
                    </span>
                  </label>
                  <button className="mx-auto bg-violet-600 rounded-full text-white px-18 py-4 self-center w-fit hover:bg-violet-700">
                    Create free account
                  </button>
                  <div className="text-center">
                    <p className="text-[#323232]">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="text-purple-500 underline">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-purple-500 underline">
                        Terms of Service{" "}
                      </span>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    className="md:w-1/2 w-full border p-3 rounded text-gray-400"
                    placeholder="Product Name"
                  />
                  <input
                    className="md:w-1/2 w-full border p-3 rounded text-gray-400"
                    placeholder="Website Email"
                  />
                </div>
                <input
                  className="w-full border p-3 rounded text-gray-400"
                  placeholder="Website"
                />
                <textarea
                  className="w-full border p-4 rounded text-gray-400"
                  placeholder="Product Description"
                />
                <textarea
                  className="w-full border p-4 rounded text-gray-400"
                  placeholder="About Product"
                />
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
                  <select className="w-full border p-2 rounded text-gray-400">
                    <option>Select Category</option>
                    <option>Retail</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </select>
                  <div className="flex flex-col md:flex-row md:items-center items-start">
                    <span className="text-[#323232] text-nowrap">
                      File Uploader
                    </span>
                    <input
                      type="file"
                      className="w-full border p-2 rounded text-gray-400 self-start"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 my-10">
                  <label className="flex items-center gap-2 justify-center">
                    <input
                      type="checkbox"
                      className="text-gray-500 border-1 border-purple-400"
                    />
                    <span className="text-sm text-[#323232]">
                      I'd like to receive a demo of YourReviews's paid plans.
                    </span>
                  </label>
                  <button className="mx-auto bg-violet-600 rounded-full text-white px-18 py-4 self-center w-fit hover:bg-violet-700">
                    Create free account
                  </button>
                  <div className="text-center">
                    <p className="text-[#323232]">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="text-purple-500 underline">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-purple-500 underline">
                        Terms of Service{" "}
                      </span>{" "}
                      apply.
                    </p>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default BusinessRegistration;
