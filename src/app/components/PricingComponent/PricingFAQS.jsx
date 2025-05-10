"use client";
import React from "react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

function PricingFAQS() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What types of reviews does your platform support?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How does your AI detect fake reviews?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can businesses respond to reviews on your platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can users report suspicious reviews?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "How can businesses integrate your review analysis into their systems?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How does your AI detect fake reviews?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can businesses respond to reviews on your platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Can users report suspicious reviews?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "How can businesses integrate your review analysis into their systems?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="md:p-14 p-3">
      <div className="max-w-[1150px] mx-auto flex flex-col gap-8">
        <h2 className="text-3xl md:text-5xl font-bold md:py-[20px] py-[0px] text-[#323232]">
          Frequently Asked Questions
        </h2>
        <div className="bg-white p-5 md:p-10 rounded-[20px] md:px-[70px]">
          {faqItems.map((item, index) => {
            const isActive = activeIndex === index;
            return (
              <div key={index} className="overflow-hidden my-3 ">
                <button
                  className="w-full transition-all p-4 flex text-justify gap-3 items-start"
                  onClick={() => toggleAccordion(index)}
                >
                  <span
                    className={`text-xl font-bold md:block hidden text-[#b9b9b9] hover:text-[#713fff] transition-colors ${
                      isActive ? "text-[#713fff]" : "text-gray-500"
                    }`}
                  >
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </span>
                  <span className="font-bold md:text-xl text-sm text-[#323232] text-left">
                    {item.question}
                  </span>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-[#a1a1a1] w-full p-4 px-6 md:ml-[20px] text-justify">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingFAQS;
