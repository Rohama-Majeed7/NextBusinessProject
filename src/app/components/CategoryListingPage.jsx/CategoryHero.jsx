import React from 'react'
import { Search } from 'lucide-react'
const CategoryHero = () => {
  return (
    <section class="md:py-18 md:px-5 p-5 mt-8">
    <div class="flex flex-col max-w-[1050px] mx-auto md:gap-10 gap-4">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="font-bold text-4xl md:text-5xl text-center text-[#323232]">
        What are you looking for?
        </h1>
       
      </div>
      {/* form */}
      <div className="self-center w-full md:w-[75%] max-w-[550px]  my-6">
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Search a Business or product Name "
            className="w-full  bg-white py-4 px-5 md:py-5 md:px-10 rounded-full  border-[#e0e0e0] border-2 text-white placeholder:text-gray-400   focus:outline-[#713fff] focus:outline-1"
          />
          <button
            variant="default"
            className="absolute flex md:w-fit md:h-fit items-center rounded-full justify-center md:top-3 right-2 top-2.5 p-2  bg-[#713fff] text-white hover:text-white hover:bg-[#323232] transition-all"
          >
            <Search className="text-5xl font-bold md:text-sm" />
            <span className="text-sm hidden sm:block">Search</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CategoryHero