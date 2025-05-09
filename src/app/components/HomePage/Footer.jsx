"use client";
import { Facebook, Youtube, Linkedin, X as Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <section className="bg-[#222]">
    <footer className="bg-[#222] max-w-[1150px] mx-auto text-gray-300 px-4  py-10">
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
            <a href="/login">Login</a>
            <span>|</span>
            <a href="/signup">Signup</a>
          </div>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0 justify-start md:justify-end items-start">
          <Facebook className="h-8 w-8 cursor-pointer bg-[#5b5b5b] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#5b5b5b]" />
          <Twitter className="h-8 w-8 cursor-pointer bg-[#5b5b5b] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#5b5b5b]" />
          <Youtube className="h-8 w-8 cursor-pointer bg-[#5b5b5b] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#5b5b5b]" />
          <Linkedin className="h-8 w-8 cursor-pointer bg-[#5b5b5b] p-2 rounded-md hover:bg-[#eaeef4] hover:text-[#5b5b5b]" />
        </div>
      </div>

      <hr className="border-gray-600 mb-8" />

      <div className="flex md:justify-between flex-col  md:flex-row  gap-8">
        <div>
          <h4 className="text-white font-semibold mb-3">About</h4>
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
          <h4 className="text-white font-semibold mb-3">Community</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Join the community</a>
            </li>
            <li>
              <a href="#">Leave a review</a>
            </li>
            <li>
              <a href="#">Search for a company</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Businesses</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Agency partners</a>
            </li>
            <li>
              <a href="#">Become a partner</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Business Blog</a>
            </li>
            <li>
              <a href="#">Webinars and Videos</a>
            </li>
            <li>
              <a href="#">Guides and Reports</a>
            </li>
            <li>
              <a href="#">Customer Stories</a>
            </li>
            <li>
              <a href="#">Developers</a>
            </li>
            <li>
              <a href="#">Tech blog</a>
            </li>
            <li>
              <a href="#">System status</a>
            </li>
            <li>
              <a href="#">API Documentation</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a href="#">Contact Sales</a>
            </li>
            <li>
              <a href="#">Help Center</a>
            </li>
            <li>
              <a href="#">Our offices</a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      <div className="text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>©2024 YourReview Pvt. Ltd. All rights reserved</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms & Conditions</a>
          <span>|</span>
          <a href="#">Guidelines for Reviewers</a>
        </div>
      </div>
    </footer>
    </section>
  );
}
