import DiscoveryCard from "../components/DiscoveryCard";
import Title from "../components/Title";

const cardData = [
  {
    title: "Discovery",
    description:
      "We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.",
  },
  {
    title: "Research",
    description:
      "We gather insights, analyze competitors, and dive into industry trends to build a clear strategic foundation for your project.",
  },
  {
    title: "Design",
    description:
      "After we have a comprehensive understanding of your brand, we'll be ready to move onto design. Each page or will be designed, reviewed, and given your stamp of approval.",
  },
  {
    title: "Build",
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
  },
];

const WorkProcess = () => {
  return (
    <section
      data-aos="fade-down"
      className="p-10 bg-[#141414] mx-4 rounded-[40px] mt-[-128px]"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <Title text="Work Process" color="white" />
        <p className="text-[40px] sm:text-[58px] text-white font-bold mt-4">
          My Work Process
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-2">
        {cardData.map((card, index) => (
          <div key={index} className="w-full sm:w-[45%]">
            <DiscoveryCard title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
