"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ReviewFAQS = () => {
    const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "What types of reviews does your platform support?",
      answer:
        "Our platform supports various types of reviews including product reviews, service reviews, and business reviews.",
    },
    {
      question: "How does your AI detect fake reviews?",
      answer:
        "Our AI uses machine learning algorithms to analyze review patterns, language cues, and user behavior to identify potentially fake or fraudulent reviews.",
    },
    {
      question: "Can businesses respond to reviews on your platform?",
      answer:
        "Yes, businesses can respond to both positive and negative reviews directly through our platform.",
    },
    {
      question: "Can users report suspicious reviews?",
      answer:
        "Absolutely. Users can flag suspicious reviews for our moderation team to investigate.",
    },
    {
      question:
        "How can businesses integrate your review analysis into their systems?",
      answer:
        "We provide API access and dashboard integrations that allow businesses to incorporate our review analysis into their existing systems.",
    },
  ];
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="p-7">
      <div className="bg-[#ffffff] max-w-[1050px] mx-auto p-8 gap-3 rounded-lg grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="flex flex-col text-center md:text-left gap-4">
            <div>
              <Image
                src="/images/faq-image.png"
                alt=""
                width={300}
                height={300}
              />
            </div>
            <h2 className="text-2xl font-semibold text-[#323232] leading-10 md:leading-15 md:text-3xl">
              Explore FAQ’s: Find Solutions Here About{" "}
              <span className="text-[#713fff]">Your.Review</span>
            </h2>
          </div>
        </div>

        {/* FAQS  */}
        <div className="">
          <div className="">
            {faqItems.map((item, index) => (
              <div key={index} className=" overflow-hidden">
                <button
                  className="w-full transition-all p-4  flex text-justify gap-3"
                  onClick={() => toggleAccordion(index)}
                >
                    <span className="`text-2xl font-bold md:block hidden text-gray-500 hover:text-[#713fff] ${activeIndex === index ? text-[#713fff] : text-gray-500}`">
                    {activeIndex === index ? "-" : "+"}
                  </span>
                  <span className="font-medium text-[#323232]">{item.question}</span>
                  
                </button>
                {activeIndex === index && (
                  <div className="">
                    <p className="text-gray-400 w-full transition-all p-4  flex text-justify gap-3">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewFAQS;
