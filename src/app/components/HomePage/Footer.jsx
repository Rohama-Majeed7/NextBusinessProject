"use client";
import { Facebook, Youtube, Linkedin, X as Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-[#303030]">
      <footer className=" max-w-[1150px] mx-auto text-gray-300 px-4  py-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 md:gap-0">
          <div className="flex items-center md:justify-between md:flex-row gap-3 flex-col md:gap-6">
            <div className="flex items-center space-x-4">
              <Image
                src={"/images/logo-your-reivew-white.png"}
                alt="Logo"
                width={200}
                height={200}
                className="h-12 object-cover"
              />
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm font-semibold">
              <Link
                href="/login"
                className="text-[#ffffff] text-xl hover:text-[#b9b9b9]"
              >
                Login
              </Link>
              <span>|</span>
              <Link
                href="/signup"
                className="text-[#ffffff] text-xl hover:text-[#b9b9b9]"
              >
                Signup
              </Link>
            </div>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0 justify-start md:justify-end items-start">
            <Facebook className="h-8 w-8 cursor-pointer bg-[#4c4c4c] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#4c4c4c]" />
            <Twitter className="h-8 w-8 cursor-pointer bg-[#4c4c4c] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#4c4c4c]" />
            <Youtube className="h-8 w-8 cursor-pointer bg-[#4c4c4c] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#4c4c4c]" />
            <Linkedin className="h-8 w-8 cursor-pointer bg-[#4c4c4c] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[##4C4C4C]" />
          </div>
        </div>

        <hr className="border-gray-600 mb-8" />

        <div className="flex md:justify-between flex-col  md:flex-row  gap-8">
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-3">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#">How Your Reviews works</a>
              </li>
              <li>
                <a href="#">Our story</a>
              </li>
              <li>
                <a href="#">What we believe</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Your Review Legal</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-3">Community</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Join the community
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Leave a review
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Search for a company
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-3">Businesses</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Partners
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Agency partners
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Become a partner
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Business Blog
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Webinars and Videos
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Guides and Reports
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Customer Stories
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Developers
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  Tech blog
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  System status
                </Link>
              </li>
              <li>
                <Link className="text-[#b9b9b9] hover:text-[#ffffff]" href="#">
                  API Documentation
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[#ffffff] font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 ">
              <li>
                <Link href="#" className="text-[#b9b9b9] hover:text-[#ffffff]">
                  Contact Sales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#b9b9b9] hover:text-[#ffffff]">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#b9b9b9] hover:text-[#ffffff]">
                  Our offices
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-600 my-8" />

        <div className="text-sm text-[#b9b9b9] flex flex-col md:flex-row justify-between items-center">
          <p>©2024 YourReview Pvt. Ltd. All rights reserved</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <span>|</span>
            <Link href="#">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#">Guidelines for Reviewers</Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
