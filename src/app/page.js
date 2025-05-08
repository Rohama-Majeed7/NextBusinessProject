import React from "react";
import Hero from "./components/HomePage/Hero";
import Section1 from "./components/HomePage/Section1";
import ReviewCatogries from "./components/HomePage/ReviewCatogries";
import EasyAndSecure from "./components/HomePage/EasyAndSecure";
import ReviewSection from "./components/HomePage/ReviewSection";
import DetectingDeception from "./components/HomePage/DetectingDeception";
import UserFriendly from "./components/HomePage/UserFriendly";
import BetterPricing from "./components/HomePage/BetterPricing";
import ReviewRating from "./components/HomePage/ReviewRating";
import ReviewFAQS from "./components/HomePage/ReviewFAQS";
import NeedSupport from "./components/HomePage/NeedSupport";
import Animated from "@/app/components/HomePage/Animated"
const page = () => {
  return (
    <section className="bg-[#edf0f5]">
      <Animated />
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
