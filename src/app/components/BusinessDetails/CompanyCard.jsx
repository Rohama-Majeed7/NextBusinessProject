import Link from "next/link";
import { CiCalendar } from "react-icons/ci";
import { BsSend } from "react-icons/bs";
import { TbMessage } from "react-icons/tb";
import { MdOutlineVerified } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";

export default function CompanyCard() {
  return (
    <div className=" bg-white rounded-[20px] shadow-md p-2 ">
      {/* Header Section */}
      <div className="p-4 border-b ">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#323232]">
            Company activity
          </h2>
          <Link
            href="#"
            className="text-sm text-[#7d7595] underline font-semibold hover:underline"
          >
            Show all
          </Link>
        </div>

        {/* Activity Items */}
        <ul className="my-4 space-y-3 ">
          <li className="flex items-center gap-3 bg-[#f1eef8] px-4 py-2 rounded-full">
            <CiCalendar className="font-semibold text-[#9f96b7] text-xl" />
            <span className="text-[#747474]  text-sm">Claimed profile</span>
          </li>
          <li className="flex items-center gap-3 bg-[#f1eef8] px-4 py-2 rounded-full">
            <BsSend className=" text-[#9f96b7] text-xl" />
            <span className="text-[#747474]  text-sm">Asks for reviews — positive or negative</span>
          </li>
          <li className="flex items-center gap-3 bg-[#f1eef8] px-4 py-2 rounded-full">
            <BiDollarCircle className=" text-[#9f96b7] text-xl" />
            <span className="text-[#747474]  text-sm">Pays for extra features</span>
          </li>
          <li className="flex items-center gap-3 bg-[#f1eef8] px-4 py-2 rounded-full">
            <TbMessage className=" text-[#9f96b7] text-xl" />
            <span className="text-[#747474]  text-sm">Replied to 69% of negative reviews</span>
          </li>
          <li className="flex items-center gap-3 bg-[#f1eef8] px-4 py-2 rounded-full">
            <MdOutlineVerified className=" text-[#9f96b7] text-xl" />
            <span className="text-[#747474]  text-sm">Replies to negative reviews in  2 weeks</span>
          </li>
        </ul>
      </div>

      {/* About Section */}
      <div className="p-4">
        <h3 className=" font-bold text-[#323232] text-bold text-2xl mb-1">
          About LoveBook
        </h3>
        <p className="text-xs text-[#7c7c7c] mb-3">
          Information written by the company
        </p>
        <p className="text-sm text-[#696969] leading-relaxed">
          LoveBook™ began as a simple idea—a handmade notebook listing all the
          reasons why one guy loved his wife. The gift was a hit, giving birth
          to the first "LoveBook". Rob Patterson knew that his wife adored the
          book, but would anyone else? That’s where John Baranowski, Kevin
          Zalewski, and Chris Sonjeow came in. They all saw the potential of the
          present to help people connect with their loved ones in a meaningful
          way. Working 9-5 at a manufacturing company, the guys met after work
          each night to refine the platform meant for the masses. It wasn’t
          until May 2010, when they were contacted by The Today Show to be on a
          gift segment with Kathy Lee and Hoda, that the guys knew this was
          something special. After that, the idea blew up. They were able to
          quit their day jobs and hire two graphic designers. Fast-forward to
          2016, and the company has had major growth, and has hired 9 employees
          (and growing each year). What started as a little side gig, LoveBook
          is now a major contender in the gift category, going up against
          flowers and chocolates (to name a few). John, Chris, Rob and Kevin are
          not quite the Beatles, but this fab four still believed that all you
          need is LOVE...and a little determination.
        </p>
      </div>
    </div>
  );
}
