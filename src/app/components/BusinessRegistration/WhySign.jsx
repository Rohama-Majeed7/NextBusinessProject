import React from "react";
import Image from "next/image";
const WhySign = () => {
  return (
    <section className="p-4 md:p-10">
      <div className="max-w-[1050px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <h1 className="text-[#323232] text-center md:text-justify font-bold text-3xl md:text-5xl leading-13">
            Why sign up for a Free Account
          </h1>
        </div>

        <div className="flex flex-col gap-3 p-2 md:border-l-1 border-b-1 border-gray-400 md:justify-start justify-center items-center md:items-start">
          <Image
            src={"/images/card_icon_online_conversion.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Increase onsite conversions with YourReview Widgets
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        <div className="flex md:border-l-1 p-2 border-b-1 border-gray-400 flex-col gap-3 md:justify-start justify-center items-center md:items-start">
          <Image
            src={"/images/card_icon_online_conversion.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
            Increase onsite conversions with YourReview Widgets
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
        </div>

        <div className="flex md:border-l-1 p-2 border-b-1 border-gray-400 flex-col gap-3 md:justify-start justify-center items-center md:items-start">
          <Image
            src={"/images/card_icon_customer_review.svg"}
            alt="sign-img"
            height={120}
            width={120}
          />
          <div className="text-center flex flex-col gap-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Learn what your customers really think
            </h2>
            <p className="mt-2 text-sm text-gray-600">
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
