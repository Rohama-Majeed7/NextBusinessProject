import React from "react";
import Image from "next/image";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

const Categories = () => {
  return (
    <section className="p-2">
      <div className="max-w-[1150px] mx-auto my-6 w-[98%] grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3 xlg:grid-cols-4 ">

        <div className="bg-[#ffffff]  rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-animals.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
              Animals & Pets
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] ">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Animal Health</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Animal Parks & Zoos</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Cats & Dogs</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5] " />
              <span>Horses & Riding</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Pet Services</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Pet Stores</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-beauty.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Beauty & Well-being
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Cosmetics & Makeup</span>
            </li>
            <li className="flex items-center space-x-2 0 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Hair Care & Styling</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Personal Care</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Salons & Clinics</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Tattoos & Piercings</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Wellness & Spa</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Yoga & Meditation</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-business.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Beauty & Well-being
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Administration & Services</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Associations & Centers</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>HR & Recruiting, Import &</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Export</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>IT & Communication</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Office Space & Supplies</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Print & Graphic Design</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Research & Development</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 " />
              <span>Sales & Marketing</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Shipping & Logistics</span>
            </li>
            <li className="flex items-center space-x-2 cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Wholesale</span>
            </li>
          </ul>
        </div>
 
        <div className="bg-[#ffffff] rounded-3xl   p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-construction.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Construction & Manufacturing
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Architects & Engineers</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Building Materials</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Chemicals & Plastic</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Construction Services</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Contractors & Consultants</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Factory Equipment</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Garden & Landscaping</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Industrial Supplies</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Manufacturing</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Production Services</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Tools & Equipment</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-education.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Education & Training
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Colleges & Universities</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Courses & Classes</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Education Services</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Language Learning</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Music & Theater Classes</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>School & High School</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Special Schools</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Vocational Training</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-electrics.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Education & Training
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c]">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Appliances & Electronics</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Audio & Visual</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Computers & Phones</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Internet & Software</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Repair & Services</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-3xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-events.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Events & Entertainment
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c]">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Adult Entertainment</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Children's Entertainment</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Clubbing & Nightlife</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Events & Venues</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Gambling, Gaming</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Museums & Exhibits</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Music & Movies</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Theater & Opera</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Wedding & Party</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-food.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Food, Beverages & Tobacco
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Agriculture & Produce</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Asian Grocery Stores</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Bakery & Pastry</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Beer & Wine</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Beverages & Liquor</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Candy & Chocolate</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Coffee & Tea</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Food Production</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Fruits & Vegetables</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Grocery Stores & Markets</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Lunch & Catering, Meat</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Seafood & Eggs</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Smoking & Tobacco</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#ffffff] rounded-2xl  p-8 w-full max-w-sm shadow-sm">
          <div className="flex items-center space-x-2 mb-6">
            <Image src={"/images/icon-categery-hobbies.svg"} alt="category-svg" height={50} width={50} />
            <h2 className="text-xl font-sem">
            Health & Medical
            </h2>
          </div>

          <ul className="space-y-4 text-[#7c7c7c] text-semibold">
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Art & Handicraft</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Astrology & Numerology</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Fishing & Hunting</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Hobbies, Metal</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Stone & Glass Work</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Music & Instruments</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Needlework & Knitting</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Outdoor Activities</span>
            </li>
            <li className="flex items-center space-x-2  cursor-pointer">
              <IoArrowForwardCircleOutline className="w-4 h-4 text-[#c5c5c5]" />
              <span>Painting & Paper</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Categories;
