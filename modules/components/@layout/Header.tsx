"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "../Button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-[80px] sm:h-[100px] md:h-[114px] bg-[#00000003] rounded-b-[30px] flex items-center justify-between px-4 sm:px-6 md:px-8 z-50 mx-2 sm:mx-4 md:mx-[15px] relative">
      {/* Logo */}
      <div className="text-[18px] font-bold font-bwgradual">DEVELOP.ME</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-center items-center gap-12">
        <ul className="flex gap-10 text-gray-700 text-[16px] font-normal">
          <Link href={"/"}>
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:text-blue-600 cursor-pointer">About</li>
          </Link>
          <Link href={"/protfolio"}>
            <li className="hover:text-blue-600 cursor-pointer">Protfolio</li>
          </Link>
          <Link href={"/blog"}>
            <li className="hover:text-blue-600 cursor-pointer">Blog</li>
          </Link>
        </ul>
        <Button
          text="Start Project"
          icon={<LiaLongArrowAltRightSolid size={18} />}
        />
      </div>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl text-black z-50"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md rounded-b-2xl p-6 flex flex-col gap-4 md:hidden z-40">
          <ul className="flex flex-col gap-4 text-gray-700 text-[16px] font-normal">
            <Link href={"/"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-blue-600 cursor-pointer">Home</li>
            </Link>
            <Link href={"/about"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-blue-600 cursor-pointer">About</li>
            </Link>
            <Link href={"/protfolio"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-blue-600 cursor-pointer">Protfolio</li>
            </Link>
            <Link href={"/blog"} onClick={() => setIsOpen(false)}>
              <li className="hover:text-blue-600 cursor-pointer">Blog</li>
            </Link>
          </ul>
          <Button
            text="Start Project"
            icon={<LiaLongArrowAltRightSolid size={18} />}
          />
        </div>
      )}
    </nav>
  );
};

export default Header;
