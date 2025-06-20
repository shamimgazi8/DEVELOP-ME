import React from "react";
import { IoIosArrowRoundDown } from "react-icons/io";

interface TitleProps {
  text: string;
  color: string; // e.g. "black", "red", etc.
}

const Title = ({ text, color }: TitleProps) => {
  return (
    <div className="flex items-center  group">
      <div
        className={`w-[44px] h-[44px] rounded-full border-[2px]  border-[color:var(--text-color)] flex items-center justify-center 
        transition-transform duration-300 group-hover:translate-x-[5px]`}
      >
        <IoIosArrowRoundDown className="text-[25px]" />
      </div>

      <div
        className={`group  rounded-full p-4 flex items-center justify-center gap-2  border-[2px]  leading-3 
        transition-all duration-300 hover:pl-2 cursor-pointer border-[color:var(--text-color)]`}
      >
        <span className="text-[16px] group-hover:translate-x-[5px] transition-transform duration-300">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Title;
