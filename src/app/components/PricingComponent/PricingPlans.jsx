"use client";
import React, { useState } from "react";

const PricingPlans = () => {
  const [isEnterprise, setIsEnterprise] = useState(false);

  return (
    <section className="bg-[#f5f5f5]">
      <div className="flex flex-col items-center gap-6 p-6  mx-auto rounded-xl shadow-md">
        {/* Toggle with Labels */}
        <div className="flex items-center flex-col md:flex-row gap-4">
          <span
            className={`text-sm font-medium transition-colors ${
              !isEnterprise ? "text-purple-600 font-semibold" : "text-gray-500"
            }`}
          >
            Plans for Everyone
          </span>

          <div
            className={`w-14 h-7 flex items-center bg-gray-300 rounded-full px-1 cursor-pointer transition ${
              isEnterprise ? "bg-purple-600" : "bg-purple-400"
            }`}
            onClick={() => setIsEnterprise((prev) => !prev)}
          >
            <div
              className={`w-5 h-5 bg-white rounded-full shadow-md transform duration-300 ${
                isEnterprise ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </div>

          <span
            className={`text-sm font-medium transition-colors ${
              isEnterprise ? "text-purple-600 font-semibold" : "text-gray-500"
            }`}
          >
            Plans for Enterprise
          </span>
        </div>

        {/* Toggle Content */}
        <div className="w-full">
          {!isEnterprise ? (
            <div className="flex flex-col md:flex-row gap-3">
              {/* ==================== */}
              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Standard
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm">Start</p>
                  <p className="text-3xl font-bold text-gray-900">
                    $<span className="text-4xl">250</span>
                    <span className="text-base font-normal text-gray-500">
                      /m
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Per Domain</p>
                </div>

                <button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-xl text-sm font-semibold transition">
                  Book Demo
                </button>

                <ul className="mt-6 space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> verified review invitations per month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> additional invitations for past
                      customers in each of your first three months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>8</strong> website widgets to display your star
                      rating and review count
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      An <strong>ad-free</strong> profile page
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Image and video</strong> generators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Social</strong> sharing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Analytics</strong> dashboards to learn more from
                      your feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                      <strong>marketing integrations</strong>
                    </span>
                  </li>
                </ul>

                <button className="mt-6 w-full hover:bg-purple-600 hover:text-white border border-gray-300 text-sm text-gray-700 py-2 rounded-xl  transition">
                  View all features
                </button>
              </div>

              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Plus
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm">Start</p>
                  <p className="text-3xl font-bold text-gray-900">
                    $<span className="text-4xl">250</span>
                    <span className="text-base font-normal text-gray-500">
                      /m
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Per Domain</p>
                </div>

                <button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-xl text-sm font-semibold transition">
                  Book Demo
                </button>

                <ul className="mt-6 space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> verified review invitations per month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> additional invitations for past
                      customers in each of your first three months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>8</strong> website widgets to display your star
                      rating and review count
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      An <strong>ad-free</strong> profile page
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Image and video</strong> generators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Social</strong> sharing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Analytics</strong> dashboards to learn more from
                      your feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                      <strong>marketing integrations</strong>
                    </span>
                  </li>
                </ul>

                <button className="mt-6 hover:bg-purple-600 hover:text-white w-full border border-gray-300 text-sm text-gray-700 py-2 rounded-xl  transition">
                  View all features
                </button>
              </div>

              <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-900">
                  Premimum
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <div className="mt-4">
                  <p className="text-gray-600 text-sm">Start</p>
                  <p className="text-3xl font-bold text-gray-900">
                    $<span className="text-4xl">250</span>
                    <span className="text-base font-normal text-gray-500">
                      /m
                    </span>
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Per Domain</p>
                </div>

                <button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-xl text-sm font-semibold transition">
                  Book Demo
                </button>

                <ul className="mt-6 space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> verified review invitations per month
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>500</strong> additional invitations for past
                      customers in each of your first three months
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>8</strong> website widgets to display your star
                      rating and review count
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      An <strong>ad-free</strong> profile page
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Image and video</strong> generators
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Social</strong> sharing
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      <strong>Analytics</strong> dashboards to learn more from
                      your feedback
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400">◉</span>
                    <span>
                      Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                      <strong>marketing integrations</strong>
                    </span>
                  </li>
                </ul>

                <button className="mt-6 hover:bg-purple-600 hover:text-white w-full border border-gray-300 text-sm text-gray-700 py-2 rounded-xl  transition">
                  View all features
                </button>
              </div>
              {/* ================== */}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-3">
             {[...Array(3)].map((_, starIdx) => (
                          <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 border border-gray-200">
                          <h2 className="text-2xl font-semibold text-gray-900">
                            Test
                          </h2>
                          <p className="text-sm text-gray-500 mt-1">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </p>
          
                          <div className="mt-4">
                            <p className="text-gray-600 text-sm">Start</p>
                            <p className="text-3xl font-bold text-gray-900">
                              $<span className="text-4xl">250</span>
                              <span className="text-base font-normal text-gray-500">
                                /m
                              </span>
                            </p>
                            <p className="text-xs text-gray-400 mt-1">Per Domain</p>
                          </div>
          
                          <button className="w-full mt-6 bg-violet-600 hover:bg-violet-700 text-white py-2.5 rounded-xl text-sm font-semibold transition">
                            Book Demo
                          </button>
          
                          <ul className="mt-6 space-y-4 text-sm text-gray-700">
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>500</strong> verified review invitations per month
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>500</strong> additional invitations for past
                                customers in each of your first three months
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>8</strong> website widgets to display your star
                                rating and review count
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                An <strong>ad-free</strong> profile page
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>Image and video</strong> generators
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>Social</strong> sharing
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                <strong>Analytics</strong> dashboards to learn more from
                                your feedback
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-gray-400">◉</span>
                              <span>
                                Third-party <strong>eCommerce, helpdesk</strong>, and{" "}
                                <strong>marketing integrations</strong>
                              </span>
                            </li>
                          </ul>
          
                          <button className="mt-6 w-full hover:bg-purple-600 hover:text-white border border-gray-300 text-sm text-gray-700 py-2 rounded-xl  transition">
                            View all features
                          </button>
                        </div>
                 
                               ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
