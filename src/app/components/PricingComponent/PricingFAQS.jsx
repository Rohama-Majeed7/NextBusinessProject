"use client"
import React from "react";
import { useState } from "react";

function PricingFAQS() {
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
    <section className="md:p-14 p-8">
      <div className="max-w-[1050px] mx-auto flex flex-col gap-8">
        <h2 className="text-4xl text-[#323232]">Frequently Asked Questions</h2>
        <div className="bg-white p-7 md:p-10 rounded-lg">
          {faqItems.map((item, index) => (
            <div key={index} className=" overflow-hidden">
              <button
                className="w-full transition-all p-4  flex text-justify gap-3"
                onClick={() => toggleAccordion(index)}
              >
                <span className="`text-4xl font-bold md:block hidden text-gray-500 hover:text-[#713fff] ${activeIndex === index ? text-[#713fff] : text-gray-500}`">
                  {activeIndex === index ? "-" : "+"}
                </span>
                <span className="font-bold md:text-xl text-sm text-[#323232]">
                  {item.question}
                </span>
              </button>
              {activeIndex === index && (
                <div className="">
                  <p className="text-gray-400 w-full transition-all p-4  flex text-justify gap-3">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingFAQS;
