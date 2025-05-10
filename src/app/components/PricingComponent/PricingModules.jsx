import React from "react";
import Image from "next/image";
import { ArrowBigRightIcon } from "lucide-react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const PricingModules = () => {
  return (
    <section className="md:p-10 p-3 bg-[#f5f5f5] flex flex-col ">
      <div className="flex flex-col gap-4  mt-[50px] text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#323232]">
          All add-on modules to Standard
        </h2>
        <h3 className="text-sm text-[#b9b9b9]">
          Amplify your plan with optional add-ons for stronger results in key
          areas.
        </h3>
        <Link className="text-bold text-[#323232]" href={""}>
          Reach out for pricing and more info.
        </Link>
      </div>
      <div className="grid py-[50px] grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-center items-center gap-4 max-w-[1150px] mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/invite--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg text-[##343434] font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/convert--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/enhance--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/connect--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/product--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row  justify-center gap-3 bg-white rounded-[20px] md:p-8 p-6 max-w-sm ">
          <div>
            <Image src={"/images/location--icon.svg"} height={80} width={80} />
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-semibold">Invite</h3>
            <p className="font-semibold text-[#6d6d6d] text-sm">
              Keep your review content fresh with unlimited automated review
              invitations
            </p>
            <p className="text-[##6D6D6D] mt-2 text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              href="#"
              className="text-sm font-semibold text-black flex items-center space-x-1"
            >
              <span className="underline">Learn More</span>
              <Image
                src={"/images/arrow.png"}
                className="hover:translate-x-2 transition-all"
                height={80}
                width={80}
              />
            </Link>
          </div>
        </div>
      </div>

      <Link
        href={""}
        className="mb-[50px] text-center mx-auto px-3  hover:bg-[#713fff] hover:text-white border-2 border-[#6d6d6d] text-sm text-[#323232] font-bold py-2 rounded-sm hover:border-[#713fff]  transition"
      >
        Load More
      </Link>
    </section>
  );
};

export default PricingModules;
