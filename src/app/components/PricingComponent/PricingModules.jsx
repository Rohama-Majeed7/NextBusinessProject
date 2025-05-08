import React from "react";
import Image from "next/image";
import { ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const PricingModules = () => {
  return (
    <section className="md:p-10 p-4">
      <div className="flex flex-col gap-2 my-4 text-center">
        <h2 className="text-2xl font-bold text-[#323232]">
          All add-on modules to Standard
        </h2>
        <h3 className="text-sm text-gray-400">
          Amplify your plan with optional add-ons for stronger results in key
          areas.
        </h3>
        <Link className="text-semibold text-[#323232]" href={""}>
          Reach out for pricing and more info.
        </Link>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-center gap-4 max-w-[1050px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/invite--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/convert--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/enhance--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/connect--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/product--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-xl shadow p-6 max-w-sm text-gray-800">
          <div>
            <Image src={"/images/location--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-gray-600 text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <div className="flex items-center hover:relative hover:left-2 transition-all">
                <span className="w-1 h-1 bg-black rounded-full"></span>
                <IoIosArrowRoundForward className="text-3xl" />
              </div>
            </Link>
          </div>
        </div>
        <Link href={""} className="mt-15 text-center mx-auto px-3  hover:bg-purple-600 hover:text-white border border-gray-300 text-sm text-gray-700 py-2 rounded-xl  transition">
        Load More
      </Link>
      </div>
      
    </section>
  );
};

export default PricingModules;
