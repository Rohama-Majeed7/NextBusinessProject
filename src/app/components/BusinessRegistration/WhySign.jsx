import React from "react";
import Image from "next/image";
const WhySign = () => {
  return (
    <section className="p-4 py-10 md:p-10">
      <div className="max-w-[1050px]  mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <h1 className="text-[#323232] text-center md:text-left font-bold text-3xl md:text-5xl leading-13">
            Why sign up for a Free Account
          </h1>
        </div>

        <div className="flex flex-col gap-3 p-2 md:border-l-1 md:border-b-0 md:justify-start md:text-left text-center justify-center items-center md:items-start border-b-1 border-[#e0e0e0] ">
          <Image
            src={"/images/card_icon_online_conversion.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center md:text-left flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-[#323232]">
              Increase onsite conversions with YourReview Widgets
            </h2>
            <p className="mt-2 text-sm text-[#868788]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        <div className="flex md:border-l-1 md:border-b-0 p-2 border-b-1 border-[#e0e0e0] flex-col gap-3 md:justify-start justify-center items-center md:items-start">
          <Image
            src={"/images/card_icon_online_conversion.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center md:text-left flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-[#323232]">
              Increase onsite conversions with YourReview Widgets
            </h2>
            <p className="mt-2 text-sm text-[#868788]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        <div className="flex md:border-l-1 md:border-b-0 p-2 border-b-1 border-[#e0e0e0] flex-col gap-3 md:justify-start justify-center items-center md:items-start">
          <Image
            src={"/images/card_icon_customer_review.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center md:text-left flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-[#323232]">
              Learn what your customers really think
            </h2>
            <p className="mt-2 text-sm text-[#868788]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySign;
