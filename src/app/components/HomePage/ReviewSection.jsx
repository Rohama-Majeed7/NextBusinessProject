import React from "react";
import ReviewSlider1 from "./ReviewSlider1";
import ReviewSlider2 from "./ReviewSilder2";

const ReviewSection = () => {
  return (
    <section>
      <h2 className="text-[#323232] text-3xl md:text-5xl text-center p-3 font-bold mb-4 mt-8">Recent reviews</h2>
      <ReviewSlider1 />
      <ReviewSlider2 />
    </section>
  );
};

export default ReviewSection;
