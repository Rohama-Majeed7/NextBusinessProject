import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const WhatCategory = () => {
  return (
    <section className='md:p-10 p-4'>
        <div className="max-w-[1050px] mx-auto p-5 md:p-10 bg-[#ffffff] rounded-lg grid grid-cols-1 md:grid-cols-2 items-center justify-center">
                    <Image src="/images/vector-send_category_suggestion.svg" alt="img" height={400} width={400} />
                    <div className=" flex flex-col md:text-justify text-center gap-3">
                        <h2 className='text-3xl md:text-4xl font-bold text-[#323232]'>Can’t find a category what you are looking </h2>
                        <p className='text-semibold text-gray-500'>Send us a category suggestion...</p>
                        <Link className="bg-[#713fff] w-full my-4 text-center text-white text-xl hover:opacity-50 rounded-full px-4 py-4" href="">Send a Category Suggestion </Link>
        </div>
        </div>
    </section>
  )
}

export default WhatCategory