"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ratingsData = [
  { stars: "5-star", percent: 89 },
  { stars: "4-star", percent: 40 },
  { stars: "3-star", percent: 25 },
  { stars: "2-star", percent: 30 },
  { stars: "1-star", percent: 15 },
];
export default function ReviewCard() {
  const [filledPercents, setFilledPercents] = useState(Array(5).fill(0));

  const [checkedStates, setCheckedStates] = useState(
    new Array(ratingsData.length).fill(true)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilledPercents(ratingsData.map((item) => item.percent));
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  const toggleCheckbox = (index) => {
    const newState = [...checkedStates];
    newState[index] = !newState[index];
    setCheckedStates(newState);
  };
  return (
    <section className="md:p-10 p-5">
    <div className="max-w-xl pb-6 mx-auto bg-white shadow-md rounded-2xl p-6 flex md:flex-row flex-col gap-6 items-start">
      {/* Left section */}
      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col items-start gap-3">
          <div className="flex gap-2 items-center">
            <Image
              src="/images/profile-image-3.jpg" // Replace with actual image path
              alt="User Avatar"
              className="w-12 h-12 rounded-full object-cover"
              height={100}
              width={100}
            />
            <h3 className="font-semibold text-[#323232] text-lg">
              Gabi Guerra
            </h3>
          </div>
          <div>
            <p className="text-gray-500 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>

        {/* Stars */}
        <div className="">
          <ul className="flex items-center gap-1 text-yellow-400 text-xl">
            <li className="flex flex-col items-center gap-2">
              <Image
                className="star-rating-icon"
                src="/images/rating-star-full.svg"
                alt=""
                height={50}
                width={50}
              />
              <span className="text-gray-500 font-semibold text-sm">1</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Image
                class="star-rating-icon"
                src="/images/rating-star-full.svg"
                alt=""
                height={50}
                width={50}
              />
              <span className="text-gray-500 font-semibold text-sm">2</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Image
                class="star-rating-icon"
                src="/images/rating-star-full.svg"
                alt=""
                height={50}
                width={50}
              />
              <span className="text-gray-500 font-semibold text-sm">3</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Image
                class="star-rating-icon"
                src="/images/rating-star-half.svg"
                alt=""
                height={50}
                width={50}
              />
              <span className="text-gray-500 font-semibold text-sm">4</span>
            </li>
            <li className="flex flex-col items-center gap-2">
              <Image
                class="star-rating-icon"
                src="/images/rating-star-blank.svg"
                alt=""
                height={50}
                width={50}
              />
              <span className="text-gray-500 font-semibold text-sm">5</span>
            </li>
          </ul>
        </div>

        {/* Review Stats */}
        <div className="flex md:flex-row flex-col gap-3">
          <div className="text-sm text-gray-600">
            <strong>Reviews - 4.7</strong>
            <div>81,909 total</div>
          </div>

          <Link
            href={""}
            className="border border-purple-[#713fff] text-purple-600 font-medium rounded-full px-6 py-3 hover:bg-purple-50 transition"
          >
            Write a review
          </Link>
        </div>
      </div>

      {/* Right section */}
      <div className="w-full">
        <div className="flex flex-col gap-4">
          {ratingsData.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-baseline flex-col gap-2 text-sm text-gray-700"
            >
              <div className="flex items-center gap-2 text-sm text-gray-700">
                {/* Custom checkbox */}
                <button
                  onClick={() => toggleCheckbox(idx)}
                  className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors duration-300
                ${
                  checkedStates[idx]
                    ? "border border-[#713fff] bg-white text-[#713fff]"
                    : "border border-gray-300 bg-pink-50 text-white"
                }
              `}
                >
                  {checkedStates[idx] && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>

                {/* Label */}
                <span className="w-16">{item.stars}</span>
                {/* Percent */}
                <span className="w-10 text-right">{item.percent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#713fff] h-2 rounded-full transition-all duration-1000 ease-in-out"
                  style={{
                    width: `${filledPercents[idx]}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
