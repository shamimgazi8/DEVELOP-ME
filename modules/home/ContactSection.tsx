import { IoMdCall } from "react-icons/io";
import Button from "../components/Button";
import ContactForm from "../components/ContactForm";
import Title from "../components/Title";

const ContactSection = () => {
  return (
    <section
      data-aos="fade-up"
      className="p-10  grid md:grid-cols-[2fr_1fr] bg-cover bg-no-repeat bg-center section-top-shadow"
      style={{
        backgroundImage: `url('/bg/bg3.png')`,
        backgroundPosition: "center calc(50% - 100px)",
      }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <Title text="Contact" color="black" />
        <h1 className="text-[36px] sm:text-[48px] md:text-[78px] font-bold text-start mt-10 whitespace-nowrap">
          Interested in <br />
          <span className="bg-[color:var(--text-color)] text-[color:var(--background-color)]  rounded-md px-2">
            work
          </span>{" "}
          together?
        </h1>
        <p className="text-start mt-10">
          We start every new client interaction with an in-depth discovery call
          where we get to know each other
        </p>
        <div className="mt-10">
          <Button text="Schedule a Call" icon={<IoMdCall size={18} />} />
        </div>
      </div>

      <div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
