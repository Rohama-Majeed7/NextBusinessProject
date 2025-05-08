"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion"
import HomeHeader from "@/app/components/HomePage/HomeHeader"

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState("")
  const heroRef = useRef(null)
  const isInView = useInView(heroRef, { amount: 0.5, once: false })
  const controls = useAnimation()

  // Animation variants for each image based on direction
  const getVariants = (direction, distance) => {
    switch (direction) {
      case "left":
        return {
          hidden: { x: -distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "right":
        return {
          hidden: { x: distance, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        }
      case "top-left":
        return {
          hidden: { x: -distance, y: -distance, opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        }
      case "top-right":
        return {
          hidden: { x: distance, y: -distance, opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        }
      case "bottom-left":
        return {
          hidden: { x: -distance, y: distance, opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        }
      case "bottom-right":
        return {
          hidden: { x: distance, y: distance, opacity: 0 },
          visible: { x: 0, y: 0, opacity: 1 },
        }
      case "bottom":
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
      default:
        return {
          hidden: { y: distance, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        }
    }
  }

  // Trigger animations based on hero section visibility
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [isInView, controls])

  return (
    <div ref={heroRef} className="relative w-full  overflow-hidden ">
        <HomeHeader/>
      {/* Main Content */}
      <div className="container mx-auto px-4 pt-30  pb-24 relative z-20">
        <h1 className="text-3xl md:text-6xl lg:text-5xl font-bold text-center text-gray-800 max-w-4xl mx-auto">
          Make Smarter Choices
          <br />
          with Your Reviews
        </h1>

        <div className="mt-10 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-white py-4 px-6 rounded-full border-0 shadow-lg focus:ring-2 focus:ring-purple-500 outline-none text-lg"
              placeholder="Search a Business or product Name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#AAAAAA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-300">
            List Your Product or Business
          </button>
        </div>
      </div>

      {/* Images with animations */}
      <div className="pointer-events-none z-0 lg:block hidden">
        {/* Top Left Worker Image */}
        <motion.div
          variants={getVariants("top-left", 200)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0, duration: 0.6 }}
          className="fixed bottom-0 left-0 w-[300px] h-[550px] z-20"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="relative top-[100px] ">
            <Image src="/images/object_l_man.png" alt="Worker"  className=" relative right-[55px]" width={250} height={250} />
          </div>
        </motion.div>

        {/* Top Right Worker Image */}
        <motion.div
          variants={getVariants("top-right", 200)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0, duration: 0.6 }}
          className="fixed top-0 right-0 w-[300px] h-[550px] z-20"
          style={{ transform: "translate(50%, -50%)" }}
        >
          <div className="relative top-[100px] w-full h-full">
            <Image src="/images/object_r_lady.png" alt="Person with hat" width={250} height={250}  className=" relative left-[60px]" />
          </div>
        </motion.div>

        {/* Top Left Review Card Image */}
        <motion.div
          variants={getVariants("top-left", 160)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1, duration: 0.6 }}
          className="fixed top-0 left-0 w-[450px] h-[280px]"
          style={{ transform: "translate(-40%, -40%)" }}
        >
          <div className="relative w-full top-[40px] right-[100px] h-full transform -rotate-12 ">
            <Image
              src="/images/object_r1.png"
              alt="Review card 1"
              className="rounded-lg shadow-lg object-cover "
              height={3500}
              width={350}
            />
          </div>
        </motion.div>

        {/* Top Right Review Card Image */}
        <motion.div
          variants={getVariants("top-right", 160)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.1, duration: 0.6 }}
          className="fixed top-0 right-0 w-[450px] h-[280px]"
          style={{ transform: "translate(40%, -40%)" }}
        >
          <div className="relative w-full top-[30px] left-[150px] h-full transform rotate-12">
            <Image
              src="/images/object_b4.png"
              alt="Review card 2"
              className="rounded-lg shadow-lg object-cover"
              height={350}
              width={350}
            />
          </div>
        </motion.div>

        {/* Bottom Left Review Card Image */}
        <motion.div
          variants={getVariants("bottom-left", 160)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.2, duration: 0.6 }}
          className="fixed bottom-0 left-0 w-[450px] h-[280px] z-25"
          style={{ transform: "translate(-40%, 40%)" }}
        >
          <div className="relative w-full top-[100px] right-[100px] h-full transform rotate-6">
            <Image
              src="/images/object_b4.png"
              alt="Review card 3"
              className="rounded-lg shadow-lg object-cover w-full "
              height={350}
              width={350}
            />
          </div>
        </motion.div>

        {/* Bottom Right Review Card Image */}
        <motion.div
          variants={getVariants("bottom-right", 160)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.2, duration: 0.6 }}
          className="fixed bottom-0 right-0 w-[450px] h-[280px] z-25"
          style={{ transform: "translate(40%, 40%)" }}
        >
          <div className="relative w-full top-[100px] left-[100px] h-full transform -rotate-6">
            <Image
              src="/images/object_b5.png"
              alt="Review card 4"
              className="rounded-lg shadow-lg object-cover"
              height={350}
              width={350}
            />
          </div>
        </motion.div>

        {/* Bottom Center Review Card Images */}
        <motion.div
          variants={getVariants("bottom", 160)}
          initial="hidden"
          animate={controls}
          transition={{ type: "spring", damping: 25, stiffness: 100, delay: 0.3, duration: 0.6 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 w-auto"
        >
          <div className="flex gap-2">
            <div className="relative top-[80px] left-[40px]  transform -rotate-3">
              <Image
                src="/images/object_r3.png"
                alt="Review card 5"
                className="rounded-lg shadow-lg object-cover "
                height={350}
                width={350}
              />
            </div>
            <div className="relative top-[70px] transform rotate-3">
              <Image
                src="/images/object_b3.png"
                alt="Review card 6"
                className="rounded-lg shadow-lg object-cover"
                height={300}
                width={300}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}