import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

export default function ContactCard() {
  return (
    <div className="w-full bg-white rounded-2xl shadow-sm p-6 border border-gray-200">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact</h2>

      {/* Email */}
      <div className="flex items-start space-x-3 text-gray-700 mb-4">
        <HiOutlineMail className="text-purple-600 text-xl mt-0.5" />
        <span>help@lovebookonline.com</span>
      </div>

      <hr className="my-2 border-gray-200" />

      {/* Phone */}
      <div className="flex items-start space-x-3 text-gray-700 mb-4">
        <FiPhoneCall className="text-purple-600 text-xl mt-0.5" />
        <span>(800) 628-6447</span>
      </div>

      <hr className="my-2 border-gray-200" />

      {/* Address */}
      <div className="flex items-start space-x-3 text-gray-700">
        <GoLocation className="text-purple-600 text-xl mt-0.5" />
        <div>
          <p>321 E. 2nd Street</p>
          <p>48307</p>
          <p>Rochester</p>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
}
