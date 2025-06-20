import Image from "next/image";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

interface ArrowProps {
  onClick?: () => void;
  className?: string;
}

const LeftArrow = ({ onClick, className = "" }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full border border-black flex items-center justify-center 
        hover:bg-black hover:text-white transition-all duration-300 ${className}`}
      aria-label="Previous"
    >
      <Image
        src={"/arrow.png"}
        height={20}
        width={20}
        alt="arrow"
        className=" rotate-180"
      />
    </button>
  );
};

export default LeftArrow;
