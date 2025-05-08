"use client"
import { useState } from 'react';
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function Pagination({ totalPages = 25 }) {
  const [currentPage, setCurrentPage] = useState(1);

  const generatePages = () => {
    let pages = [];

    if (totalPages <= 5) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      if (currentPage <= 3) {
        pages = [1, 2, 3, 4, 5, '...', totalPages];
      } else if (currentPage >= totalPages - 2) {
        pages = [1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
      } else {
        pages = [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
      }
    }

    return pages;
  };

  const handleClick = (page) => {
    if (page === '...') return;
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex items-center md:flex-row flex-col justify-between  py-10 ">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="py-3 px-8 rounded-full  hover:border-purple-500 border border-gray-300 flex items-center justify-center disabled:opacity-40"
        disabled={currentPage === 1}
      >
        <BsArrowLeft className='text-2xl' />
      </button>

      {/* Pages */}
      <div className="flex items-center space-x-6">
        {generatePages().map((page, index) => (
          <button
            key={index}
            onClick={() => handleClick(page)}
            className={`text-lg font-semibold ${
              page === currentPage
                ? 'text-purple-600'
                : page === '...'
                ? 'cursor-default text-gray-500'
                : 'text-gray-800 hover:text-purple-600'
            }`}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="py-3 px-8 rounded-full  hover:border-purple-500 border border-gray-300 flex items-center justify-center disabled:opacity-40"
        disabled={currentPage === totalPages}
      >
        <BsArrowRight className='text-2xl' />
      </button>
    </div>
  );
}
