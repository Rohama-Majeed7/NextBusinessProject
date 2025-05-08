import React from "react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Categories = () => {
  return (
    <section>
      <div className="max-w-[1050px] mx-auto my-6  grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">

        <div className="bg-[#ffffff] rounded-2xl   p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-animals.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
              Animals & Pets
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Animal Health</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Animal Parks & Zoos</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Cats & Dogs</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Horses & Riding</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Pet Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Pet Stores</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl   p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-beauty.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Beauty & Well-being
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Cosmetics & Makeup</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Hair Care & Styling</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Personal Care</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Salons & Clinics</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Tattoos & Piercings</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Wellness & Spa</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Yoga & Meditation</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-business.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Beauty & Well-being
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Administration & Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Associations & Centers</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>HR & Recruiting, Import &</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Export</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>IT & Communication</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Office Space & Supplies</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Print & Graphic Design</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Research & Development</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Sales & Marketing</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Shipping & Logistics</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Wholesale</span>
            </li>
          </ul>
        </div>
 
        <div className="bg-[#ffffff] rounded-2xl   p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-construction.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Construction & Manufacturing
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Architects & Engineers</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Building Materials</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Chemicals & Plastic</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Construction Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Contractors & Consultants</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Factory Equipment</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Garden & Landscaping</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Industrial Supplies</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Manufacturing</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Production Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Tools & Equipment</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-education.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Education & Training
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Colleges & Universities</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Courses & Classes</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Education Services</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Language Learning</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Music & Theater Classes</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>School & High School</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Special Schools</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Vocational Training</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-electrics.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Education & Training
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Appliances & Electronics</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Audio & Visual</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Computers & Phones</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Internet & Software</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Repair & Services</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-events.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Events & Entertainment
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Adult Entertainment</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Children's Entertainment</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Clubbing & Nightlife</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Events & Venues</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Gambling, Gaming</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Museums & Exhibits</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Music & Movies</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Theater & Opera</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Wedding & Party</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-food.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Food, Beverages & Tobacco
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Agriculture & Produce</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Asian Grocery Stores</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Bakery & Pastry</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Beer & Wine</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Beverages & Liquor</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Candy & Chocolate</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Coffee & Tea</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Food Production</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Fruits & Vegetables</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Grocery Stores & Markets</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Lunch & Catering, Meat</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Seafood & Eggs</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Smoking & Tobacco</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-hobbies.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-semibold text-gray-800">
            Health & Medical
            </h2>
          </div>

          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Art & Handicraft</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Astrology & Numerology</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Fishing & Hunting</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Hobbies, Metal</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Stone & Glass Work</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Music & Instruments</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Needlework & Knitting</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Outdoor Activities</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-gray-800 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-gray-400" />
              <span>Painting & Paper</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Categories;
