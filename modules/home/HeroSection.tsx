import { IoMdCall } from "react-icons/io";
import Button from "../components/Button";
import SocialCard from "../components/SocialCard";

const Hero = () => {
  return (
    <section className="flex-1  mt-14 px-4 sm:px-6 md:px-[50px] mb-[100px]">
      {/* Headings */}
      <div className="flex flex-col gap-4">
        <h1 className="text-[36px] sm:text-[48px] md:text-[78px] font-bold">
          Trusted{" "}
          <span className="bg-[color:var(--text-color)] text-[color:var(--background-color)]  rounded-md leading-32 mr-2 px-2">
            Partner
          </span>
          for
        </h1>
        <h1 className="text-[36px] sm:text-[48px] md:text-[78px] font-bold">
          Your Website{" "}
          <span className="bg-[color:var(--text-color)] text-[color:var(--background-color)]  rounded-md leading-32 mr-2 px-2">
            Develop.
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] mt-10  pt-5 gap-8">
        <div className="flex justify-center md:justify-start">
          <SocialCard />
        </div>
        <div className="flex flex-col gap-8 text-center md:text-left">
          <div className="space-y-2">
            <p className="text-[16px] sm:text-[18px]">
              Building the world's best marketing websites for over a decade.
            </p>
            <p className="text-[16px] sm:text-[18px]">
              Your trusted partner for strategy, design, and dev.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Button text="Schedule a Call" icon={<IoMdCall size={18} />} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
