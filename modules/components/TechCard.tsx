// components/TechCard.tsx
import { IconType } from "react-icons";

interface TechCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function TechCard({
  title,
  description,
  icon: Icon,
}: TechCardProps) {
  return (
    <div
      className="w-[430px] h-[350px] bg-[#FFFFFF14] rounded-[20px] p-6 flex flex-col items-start justify-center gap-4 shadow-md 
      transform transition-transform duration-500 hover:rotate-[6deg]"
    >
      <div className="relative">
        <Icon className="text-white text-7xl " />
        <div className="absolute top-1/2 left-1/2 w-[10px] h-[10px] bg-lime-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <h2 className="text-white text-2xl font-bold">{title}</h2>

      <p className="text-gray-400 text-sm leading-relaxed w-[280px] text-start">
        {description}
      </p>
    </div>
  );
}
