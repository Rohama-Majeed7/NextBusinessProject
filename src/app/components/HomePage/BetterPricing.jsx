"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const BetterPricing = () => {
  return (
    <section className="md:p-7 p-4">
      <div className="bg-[#ffffff] max-w-[1050px] mx-auto p-8 gap-3 rounded-lg grid md:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="text-[#323232] flex flex-col gap-7">
                <h2 className="text-2xl font-semibold leading-10 md:leading-15 md:text-5xl">
                We providing Better pricing than other competitors
                </h2>
                <p className="text-gray-500">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                  <Link className="bg-[#713fff] my-4 text-center text-white text-xl w-full hover:opacity-50 rounded-full px-4 py-4"
                  href="contact-sales.html">
                    Get Started
                  </Link>
              </div>
            </div>
            <div className="">
              <Image
                className="section-image"
                src="/images/image-better-pricing.svg"
                alt=""
                height={400}
                width={400}
              />
            </div>
          </div>
    </section>
  )
}

export default BetterPricing