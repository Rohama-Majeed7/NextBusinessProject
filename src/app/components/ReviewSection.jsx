import React from "react";
import ReviewSlider1 from "./ReviewSlider1";
import ReviewSlider2 from "./ReviewSilder2";

const ReviewSection = () => {
  return (
    <section>
      <h2>Recent reviews</h2>
      <ReviewSlider1 />
      <ReviewSlider2 />
    </section>
  );
};

export default ReviewSection;
