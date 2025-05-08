"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const reviews = Array(6).fill(null); // Sample reviews

const ReviewSlider1 = () => {
  const marqueeRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Handle mobile pause on touch
  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);

    marquee.addEventListener("touchstart", handleTouchStart);
    marquee.addEventListener("touchend", handleTouchEnd);

    return () => {
      marquee.removeEventListener("touchstart", handleTouchStart);
      marquee.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div
        ref={marqueeRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          animationPlayState: isPaused ? "paused" : "running",
        }}
        className="flex gap-4 animate-marquee w-max"
      >
        {[...reviews, ...reviews].map((_, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[350px] bg-white text-[#323232] p-4 rounded-lg shadow "
          >
            {/* img-sec */}
            <div className="flex items-center">
              <div>
                <Image
                  className="rounded-full object-cover"
                  src="/images/profile-image-1.jpg"
                  alt="Reviewer"
                  height={60}
                  width={60}
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <h6 className="font-bold">Gabi Guer </h6>
                  <span className="text-sm">reviewed Post</span>
                  <Link href="#" className="underline font-semibold text-sm">
                    Lake Lending
                  </Link>
                </div>
                <ul className="flex gap-1 self-start border-1 border-[#323232] p-2 rounded-full">
                  {[...Array(5)].map((_, starIdx) => (
                    <li key={starIdx}>
                      <Image
                        src="/images/gray-star_rating.svg"
                        alt="star"
                        height={10}
                        width={10}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* para */}
            <p className="text-sm mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSlider1;
