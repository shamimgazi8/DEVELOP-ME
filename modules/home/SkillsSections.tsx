import { useState } from "react";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import NavigationExample from "../components/Navigation";
import TechCard from "../components/TechCard";
import Title from "../components/Title";

const techSkills = [
  {
    title: "React JS",
    icon: FaReact,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
  },
  {
    title: "HTML5",
    icon: FaHtml5,
    description: "Semantic, accessible, and SEO-friendly markup.",
  },
  {
    title: "CSS3",
    icon: FaCss3Alt,
    description: "Responsive layouts with Flexbox, Grid, and animations.",
  },
  {
    title: "JavaScript",
    icon: FaJs,
    description: "Dynamic logic, async handling, and ES6+ syntax.",
  },
];

const Skills = () => {
  const cards = techSkills; // all cards
  const cardsVisible = 3;

  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(cards.length - cardsVisible, 0);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section
      data-aos="fade-down"
      className="p-[50px] bg-black m-[15px] rounded-[40px] z-50"
    >
      <Title text="Why Choose me" color="white" />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <h1 className="text-white text-[36px] md:text-[58px] leading-[46px] md:leading-[86px] mt-[50px]">
          My Extensive <br /> List of Skills
        </h1>
        <div className="flex flex-col justify-end items-start md:items-end mt-[50px]">
          <p className="text-white text-sm md:text-base">
            Building the world’s best marketing <br />
            Your trusted partner for strategy, design, and dev.
          </p>
          <div className="border border-white my-5 w-full"></div>
          <NavigationExample onPrev={prevCard} onNext={nextCard} />
        </div>
      </div>

      {/* Carousel container */}
      <div
        className="mt-[50px] relative w-full overflow-hidden rounded-lg py-5
      shadow-inner carousel-container
      "
      >
        <div
          className="flex gap-2 transition-transform duration-500 ease-in-out"
          style={{
            width: `${(cards.length * 100) / cardsVisible}%`,
            transform: `translateX(-${(currentIndex * 100) / cardsVisible}%)`,
            boxSizing: "border-box",
          }}
        >
          {cards.map((skill, index) => (
            <div key={index} className="flex-shrink-0">
              <TechCard
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
