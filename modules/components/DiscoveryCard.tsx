import React from "react";
import { BsArrowRight } from "react-icons/bs";

interface DiscoveryCardProps {
  title: string;
  description: string;
  link?: string;
}

const DiscoveryCard: React.FC<DiscoveryCardProps> = ({
  title,
  description,
  link = "#",
}) => {
  return (
    <div className="group bg-black text-white p-6 rounded-2xl md:w-[635px] h-[280px] shadow-lg cursor-pointer hover:bg-[#C5FF41] hover:rotate-1 transition-all duration-500 ease-in-out overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="px-4 py-2 rounded-full text-black font-semibold text-sm bg-green-200 group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {title}
        </span>
        <a
          href={link}
          className="flex items-center md:gap-1 gap-5 text-sm text-white group-hover:text-black hover:underline transition-colors duration-300 pb-5"
        >
          <BsArrowRight size={14} />
          Read More
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-[18px] leading-relaxed group-hover:text-black transition-colors duration-300 mt-10 md:line-clamp-5 line-clamp-5">
        {description}
      </p>
    </div>
  );
};

export default DiscoveryCard;
