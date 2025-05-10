"use client";
import React, { useState } from "react";
import Image from "next/image";
const BusinessRegistration = () => {
  const [activeTab, setActiveTab] = useState("business");
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "No file chosen");
  };
  return (
    <section className="md:p-10  p-3 bg-[#f5f5f5]">
      <div>
        <div className="max-w-[1150px] mx-auto md:p-6 p-4 md:pt-[60px] md:mt-[-200px] bg-[#ffffff] shadow-2lg rounded-[20px]">
          {/* Toggle Switch */}
          <div className="flex justify-center mb-6 border-1 border-[#713fff] w-fit rounded-full p-1 mx-auto">
            <button
              onClick={() => setActiveTab("business")}
              className={`px-6 p-3 rounded-full transition font-semibold ${
                activeTab === "business"
                  ? "bg-[#713fff] text-white"
                  : "bg-white text-[#818080]"
              }`}
            >
              Business Registration
            </button>
            <button
              onClick={() => setActiveTab("product")}
              className={`px-6 py-2 rounded-full transition font-semibold ${
                activeTab === "product"
                  ? "bg-[#713fff] text-white"
                  : "bg-white text-[#818080]"
              }`}
            >
              Product Registration
            </button>
          </div>

          {/* Form Content */}
          <form className="space-y-4">
            {activeTab === "business" ? (
              <>
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    className="md:w-1/2 full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Company Name"
                  />
                  <input
                    className="md:w-1/2 full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Email ID"
                  />
                </div>
                <div className="flex gap-4 flex-col md:flex-row">
                  <div class="flex md:w-1/2 w-full items-center border-1 border-[#a1a1a1] focus:outline-0 rounded text-[#8794a4]rounded overflow-hidden">
                    <div className="bg-gray-100 flex h-full items-center justify-center">
                      <div class="flex items-center space-x-1 px-3">
                        <Image
                          src={"/images/flag-usa.png"}
                          alt="usa-flag"
                          height={10}
                          width={10}
                        />
                        <span class="text-gray-700 font-medium">+1</span>
                      </div>
                    </div>

                    <input
                      type="tel"
                      placeholder="Phone Number"
                      class="flex-1  text-gray-500 placeholder-gray-400  focus:outline-none"
                    />
                  </div>
                  <input
                    className="w-full md:w-1/2 border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Website"
                  />
                </div>
                <textarea
                  className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 px-6 py-7 rounded text-[#8794a4]"
                  placeholder="Address"
                />
                <textarea
                  className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 px-6 py-7 rounded text-[#8794a4]"
                  placeholder="About Company"
                />
                <div className="flex gap-4 flex-col md:flex-row">
                  <input
                    className="md:w-1/3 w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Location"
                  />
                  <input
                    className="md:w-1/3 w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="PIN"
                  />
                  <select className="md:w-1/3 w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]">
                    <option>Country</option>
                    <option>USA</option>
                    <option>India</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
                  <select className="w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]">
                    <option>Select Category</option>
                    <option>Retail</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </select>
                  <div className="flex items-start md:items-center flex-col md:flex-row">
                    <label className="text-lg font-medium" htmlFor="fileInput">
                      File Uploader
                    </label>
                    <div className="flex flex-col md:flex-row gap-1">
                      <input
                        type="file"
                        id="fileInput"
                        className="text-sm bg-[#e8e8e8] w-fit p-2 rounded border-1 border-[#323232]"
                        onChange={handleFileChange}
                      />
                      <span className="text-[#713fff] font-medium text-sm">
                        {fileName}
                      </span>
                    </div>
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
                  <button className="mx-auto bg-[#713fff] rounded-full text-white  py-4 md:px-[150px] self-center w-fit hover:opacity-80">
                    Create free account
                  </button>
                  <div className="text-center">
                    <p className="text-[#323232]">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="text-[#713fff] underline">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-[#713fff] underline">
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
                    className="md:w-1/2 full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Product Name"
                  />
                  <input
                    className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                    placeholder="Website Email"
                  />
                </div>
                <input
                  className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]"
                  placeholder="Website"
                />
                <textarea
                  className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 px-7 py-5 rounded text-[#8794a4]"
                  placeholder="Product Description"
                />
                <textarea
                  className="md:w-1/2 w-full border-1 border-[#a1a1a1] focus:outline-0 px-7 py-5 rounded text-[#8794a4]"
                  placeholder="About Product"
                />
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2 items-center">
                  <select className="w-full border-1 border-[#a1a1a1] focus:outline-0 p-4 rounded text-[#8794a4]">
                    <option>Select Category</option>
                    <option>Retail</option>
                    <option>IT</option>
                    <option>Finance</option>
                  </select>

                  <div className="flex items-start md:items-center flex-col md:flex-row">
                    <label className="text-lg font-medium" htmlFor="fileInput">
                      File Uploader
                    </label>
                    <div className="flex flex-col md:flex-row gap-1">
                      <input
                        type="file"
                        id="fileInput"
                        className="text-sm bg-[#e8e8e8] w-fit p-2 rounded border-1 border-[#323232]"
                        onChange={handleFileChange}
                      />
                      <span className="text-[#713fff] font-medium text-sm">
                        {fileName}
                      </span>
                    </div>
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
                  <button className="mx-auto bg-[#713fff] rounded-full text-white px-18 py-4 self-center w-fit hover:opacity-80">
                    Create free account
                  </button>
                  <div className="text-center">
                    <p className="text-[#323232]">
                      This site is protected by reCAPTCHA and the Google{" "}
                      <span className="text-[#713fff] underline">
                        Privacy Policy
                      </span>{" "}
                      and{" "}
                      <span className="text-[#713fff] underline">
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
