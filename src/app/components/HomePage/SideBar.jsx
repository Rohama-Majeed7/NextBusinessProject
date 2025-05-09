'use client';

import { X } from "@deemlol/next-icons";
import Link from "next/link";
export default function Sidebar({isOpen,setIsOpen}) {
    const links = [
        { name: 'Plans', href: '/pricing' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Resources', href: '/resources' },
        { name: 'About', href: '/about' },
        { name: 'Join', href: '/join' },
        { name: 'Sign in', href: '/signin' },
      ];
  return (
<>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-end px-4 py-4">
          <button onClick={() => setIsOpen(false)}>
            <X className="w-8 h-8 text-[#8a8a8a]" />
          </button>
        </div>
        <nav className="p-4">
          {links.map((link, idx) => (
            <Link
              key={link.name}
              href={link.href}
              className="block px-2 py-3 text-[#8a8a8a] font-bold border-b-gray-300 border-b-1 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
