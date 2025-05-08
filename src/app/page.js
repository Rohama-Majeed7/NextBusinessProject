import React from "react";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import ReviewCatogries from "./components/ReviewCatogries";
import EasyAndSecure from "./components/EasyAndSecure";
import ReviewSection from "./components/ReviewSection";
import DetectingDeception from "./components/DetectingDeception";
import UserFriendly from "./components/UserFriendly";
import BetterPricing from "./components/BetterPricing";
import ReviewRating from "./components/ReviewRating";
import ReviewFAQS from "./components/ReviewFAQS";
import NeedSupport from "./components/NeedSupport";
import Animated from "./components/Animated";

const page = () => {
  return (
    <section className="bg-[#edf0f5]">
      <main>
        <Animated src={"/images/product_image_01.jpg" }  direction="left" />
        <Animated src={"/images/product_image_02.jpg" }  direction="right" />
      </main>
      <Hero />
      <Section1 />
      <ReviewCatogries />
      <EasyAndSecure />
      <ReviewSection />
      <DetectingDeception />
      <UserFriendly />
      <BetterPricing />
      <ReviewRating />
      <ReviewFAQS />
      <NeedSupport />
    </section>
  );
};

export default page;
