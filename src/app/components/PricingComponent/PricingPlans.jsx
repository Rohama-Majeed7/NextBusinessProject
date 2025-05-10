"use client";
import Link from "next/link";
import React, { useState } from "react";

const PricingPlans = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  return (
    <section className="bg-[#f5f5f5] p-3">
      <div className="flex flex-col gap-6 ">
        <div>
          <h2 className="text-3xl md:text-5xl text-center text-[#323232] pt-[50px] pb-[0px] font-bold">
            Plans for every stage
          </h2>
        </div>

        {/* Toggle with Labels */}
        <div className="flex items-center justify-center flex-col md:flex-row gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isEnterprise ? "text-[#713fff] font-semibold" : "text-gray-500"
            }`}
          >
            Plans for Everyone
          </span>

          <div
            className={`w-[70px] h-[30px] flex items-center bg-white border-1 border-[#713fff] rounded-full px-1 py-2 cursor-pointer transition ${
              isEnterprise ? "bg-[#713fff]" : "bg-[#713fff]"
            }`}
            onClick={() => setIsEnterprise((prev) => !prev)}
          >
            <div
              className={`w-5 h-5 bg-[#713fff] rounded-full shadow-md transform duration-300 ${
                isEnterprise ? "translate-x-9" : "translate-x-0"
              }`}
            />
          </div>

          <span
            className={`text-sm font-medium transition-colors ${
              isEnterprise ? "text-[#713fff] font-semibold" : "text-gray-500"
            }`}
          >
            Plans for Enterprise
          </span>
        </div>
      </div>
      {/* Toggle Content */}
      <div className="w-full flex items-center justify-center py-[60px]">
        {!isEnterprise ? (
          <div className="flex  flex-col md:flex-row gap-3">
            {/* ==================== */}
            <div className="max-w-sm mx-auto bg-white rounded-2xl  p-6 ">
              <h2 className="text-2xl font-semibold text-[#323232]">Standard</h2>
              <p className="text-sm text-[#6d6d6d] mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-4">
                <p className="text-[#6d6d6d] text-sm">Start</p>
                <p className="text-3xl font-bold text-[#323232]">
                  $<span className="text-4xl">250</span>
                  <span className="text-base font-normal text-gray-500">
                    /m
                  </span>
                </p>
                <p className="text-xs text-[#6d6d6d] mt-1">Per Domain</p>
              </div>

              <button className="w-full mt-6 bg-[#713fff] hover:opacity-80 text-white py-3 rounded-full text-sm font-semibold transition">
                Book Demo
              </button>

              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  <span  className="text-[#6d6d6d]">
                    <strong className="text-[#6d6d6d]">500</strong> verified review invitations per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">500</strong> additional invitations for past
                    customers in each of your first three months
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">8</strong> website widgets to display your star
                    rating and review count
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    An <strong  className="text-[#6d6d6d]">ad-free</strong> profile page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Image and video</strong> generators
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Social</strong> sharing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Analytics</strong> dashboards to learn more from
                    your feedback
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                    <strong  className="text-[#6d6d6d]">marketing integrations</strong>
                  </span>
                </li>
              </ul>

              <button  className="mt-6 w-full hover:bg-[#713fff] hover:text-white border-2 border-[#6d6d6d] text-sm text-gray-700 py-2 rounded-sm hover:border-[#713fff] transition">
               <Link href={""}>View all features</Link>
                
              </button>
            </div>

             <div className="max-w-sm mx-auto bg-white rounded-2xl  p-6 ">
              <h2 className="text-2xl font-semibold text-[#323232]">Plus</h2>
              <p className="text-sm text-[#6d6d6d] mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-4">
                <p className="text-[#6d6d6d] text-sm">Start</p>
                <p className="text-3xl font-bold text-[#323232]">
                  $<span className="text-4xl">250</span>
                  <span className="text-base font-normal text-gray-500">
                    /m
                  </span>
                </p>
                <p className="text-xs text-[#6d6d6d] mt-1">Per Domain</p>
              </div>

              <button className="w-full mt-6 bg-[#713fff] hover:opacity-80 text-white py-3 rounded-full text-sm font-semibold transition">
                Book Demo
              </button>

              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  <span  className="text-[#6d6d6d]">
                    <strong className="text-[#6d6d6d]">500</strong> verified review invitations per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">500</strong> additional invitations for past
                    customers in each of your first three months
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">8</strong> website widgets to display your star
                    rating and review count
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    An <strong  className="text-[#6d6d6d]">ad-free</strong> profile page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Image and video</strong> generators
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Social</strong> sharing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Analytics</strong> dashboards to learn more from
                    your feedback
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                    <strong  className="text-[#6d6d6d]">marketing integrations</strong>
                  </span>
                </li>
              </ul>

              <button  className="mt-6 w-full hover:bg-[#713fff] hover:text-white border-2 border-[#6d6d6d] text-sm text-gray-700 py-2 rounded-sm hover:border-[#713fff] transition">
               <Link href={""}>View all features</Link>
                
              </button>
            </div>

             <div className="max-w-sm mx-auto bg-white rounded-2xl  p-6 ">
              <h2 className="text-2xl font-semibold text-[#323232]">Premium</h2>
              <p className="text-sm text-[#6d6d6d] mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-4">
                <p className="text-[#6d6d6d] text-sm">Start</p>
                <p className="text-3xl font-bold text-[#323232]">
                  $<span className="text-4xl">250</span>
                  <span className="text-base font-normal text-gray-500">
                    /m
                  </span>
                </p>
                <p className="text-xs text-[#6d6d6d] mt-1">Per Domain</p>
              </div>

              <button className="w-full mt-6 bg-[#713fff] hover:opacity-80 text-white py-3 rounded-full text-sm font-semibold transition">
                Book Demo
              </button>

              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  <span  className="text-[#6d6d6d]">
                    <strong className="text-[#6d6d6d]">500</strong> verified review invitations per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">500</strong> additional invitations for past
                    customers in each of your first three months
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">8</strong> website widgets to display your star
                    rating and review count
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    An <strong  className="text-[#6d6d6d]">ad-free</strong> profile page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Image and video</strong> generators
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Social</strong> sharing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Analytics</strong> dashboards to learn more from
                    your feedback
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                    <strong  className="text-[#6d6d6d]">marketing integrations</strong>
                  </span>
                </li>
              </ul>

              <button  className="mt-6 w-full hover:bg-[#713fff] hover:text-white border-2 border-[#6d6d6d] text-sm text-gray-700 py-2 rounded-sm hover:border-[#713fff] transition">
               <Link href={""}>View all features</Link>
                
              </button>
            </div>
            {/* ================== */}
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-3">
            {[...Array(3)].map((_, starIdx) => (
               <div className="max-w-sm mx-auto bg-white rounded-2xl  p-6 ">
              <h2 className="text-2xl font-semibold text-[#323232]">Test</h2>
              <p className="text-sm text-[#6d6d6d] mt-1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <div className="mt-4">
                <p className="text-[#6d6d6d] text-sm">Start</p>
                <p className="text-3xl font-bold text-[#323232]">
                  $<span className="text-4xl">250</span>
                  <span className="text-base font-normal text-gray-500">
                    /m
                  </span>
                </p>
                <p className="text-xs text-[#6d6d6d] mt-1">Per Domain</p>
              </div>

              <button className="w-full mt-6 bg-[#713fff] hover:opacity-80 text-white py-3 rounded-full text-sm font-semibold transition">
                Book Demo
              </button>

              <ul className="mt-6 space-y-4 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  <span  className="text-[#6d6d6d]">
                    <strong className="text-[#6d6d6d]">500</strong> verified review invitations per month
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">500</strong> additional invitations for past
                    customers in each of your first three months
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">8</strong> website widgets to display your star
                    rating and review count
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    An <strong  className="text-[#6d6d6d]">ad-free</strong> profile page
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Image and video</strong> generators
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Social</strong> sharing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    <strong  className="text-[#6d6d6d]">Analytics</strong> dashboards to learn more from
                    your feedback
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div>
                   <span className="bg-[#d9d9d9] w-5 h-5 flex items-center justify-center rounded-full">
                    <span className="h-2 w-2 bg-[#adacac] rounded-full"></span>
                  </span>
                  </div>
                  <span  className="text-[#6d6d6d]">
                    Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                    <strong  className="text-[#6d6d6d]">marketing integrations</strong>
                  </span>
                </li>
              </ul>

              <button  className="mt-6 w-full hover:bg-[#713fff] hover:text-white border-2 border-[#6d6d6d] text-sm text-gray-700 py-2 rounded-sm hover:border-[#713fff] transition">
               <Link href={""}>View all features</Link>
                
              </button>
            </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingPlans;
