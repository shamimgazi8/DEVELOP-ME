import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";

interface NavigationExampleProps {
  onPrev?: () => void;
  onNext?: () => void;
}

export default function NavigationExample({
  onPrev,
  onNext,
}: NavigationExampleProps) {
  return (
    <div className="flex gap-4 mt-[30px]">
      <LeftArrow
        className="text-white border-white h-[60px] w-[60px] cursor-pointer"
        onClick={onPrev}
      />
      <RightArrow
        className="text-white border-white  h-[60px] w-[60px] cursor-pointer"
        onClick={onNext}
      />
    </div>
  );
}
