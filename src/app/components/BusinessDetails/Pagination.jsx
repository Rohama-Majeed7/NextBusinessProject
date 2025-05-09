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
    <div className="flex items-center flex-row  justify-between  py-10 ">
      {/* Prev Button */}
      <button
        onClick={handlePrev}
        className="md:py-3 md:px-8 p-4 rounded-full  text-[#737373] hover:border-[#713fff] border-1 hover:text-[#713fff] border-[#737373] flex items-center justify-center disabled:opacity-40"
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
                ? 'text-[#713fff]'
                : page === '...'
                ? 'cursor-default text-[#343434]'
                : 'text-gray-800 hover:text-[#713fff]'
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
        className="md:py-3 md:px-8 p-4 rounded-full  text-[#737373] hover:border-[#713fff] border-1 hover:text-[#713fff] border-[#737373] flex items-center justify-center disabled:opacity-40"
        disabled={currentPage === totalPages}
      >
        <BsArrowRight className='text-2xl' />
      </button>
    </div>
  );
}
