import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

interface TitleProps {
  text: string;
  color: "black" | "white";
}

const Title = ({ text, color }: TitleProps) => {
  const isWhite = color === "white";
  const textColor = isWhite ? "text-white" : "text-black";
  const borderColor = isWhite ? "border-white" : "border-black";

  return (
    <div className="flex items-center group">
      <div
        className={`w-[44px] h-[44px] rounded-full border-[2px] ${borderColor} 
        flex items-center justify-center transition-transform duration-300 group-hover:translate-x-[5px]`}
      >
        <IoIosArrowRoundDown className={`text-[25px] ${textColor}`} />
      </div>

      <div
        className={`group rounded-full p-4 flex items-center justify-center gap-2 border-[2px] 
        leading-3 transition-all duration-300 hover:pl-2 cursor-pointer ${borderColor}`}
      >
        <span
          className={`text-[16px] ${textColor} group-hover:translate-x-[5px] transition-transform duration-300`}
        >
          {text}
        </span>
      </div>
    </div>
  );
};

export default Title;
