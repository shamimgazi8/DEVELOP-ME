import Title from "../components/Title";
import WorkedOn from "./WorkedOn";

const About = () => {
  return (
    <section
      data-aos="fade-up"
      className="relative  bg-no-repeat bg-left bg-cover pt-20 px-6 section-top-shadow md:-translate-y-32 z-[-1004]"
      style={{
        backgroundImage: "url('/bg/bg2.png')",
        backgroundPosition: "left 50px",
      }}
    >
      <div className="  md:m-[200px] flex justify-end flex-col items-end">
        <Title text="About" color="" />
        {/* Headings */}
        <div className="mt-10 text-end">
          <h1 className="text-[36px] sm:text-[48px] md:text-[78px] font-bold mb-5">
            I’ve been
            <span className="bg-[color:var(--text-color)] text-[color:var(--background-color)]  rounded-md leading-32 mr-2 px-2">
              Developing
            </span>
          </h1>
          <h1 className="text-[36px] sm:text-[48px] md:text-[75px] font-bold">
            Websites since
            <span className="bg-[color:var(--text-color)] text-[color:var(--background-color)]  rounded-md leading-32 mr-2 px-2">
              2013
            </span>
          </h1>
          <p className=" text-center mt-5 w-[80%] m-auto">
            We start every new client interaction with an in-depth discovery
            call where we get to know each other and recommend the best course
            of action.
          </p>
        </div>
      </div>
      <div className=" md:ml-[200px]">
        <WorkedOn />
      </div>
    </section>
  );
};

export default About;
