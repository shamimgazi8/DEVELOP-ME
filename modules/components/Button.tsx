import React from "react";

interface ButtonProps {
  text: string;
  icon: React.ReactNode;
}

const Button = ({ text, icon }: ButtonProps) => {
  return (
    <button className="group border border-black rounded-full py-2 pr-4 flex items-center justify-center gap-2 leading-3 transition-all duration-300 hover:pl-2 cursor-pointer">
      <div
        className="w-[38px] h-[38px] rounded-full border border-black flex items-center justify-center 
        transition-transform duration-300 group-hover:translate-x-[5px]"
      >
        {icon}
      </div>

      {/* Text */}
      <span className="text-[16px] group-hover:translate-x-[5px]  transition-transform duration-300 ">
        {text}
      </span>
    </button>
  );
};

export default Button;
