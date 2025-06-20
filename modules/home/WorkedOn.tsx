import React from "react";

const brands = [
  {
    name: "CSSWINNER",
    className: "",
  },
  {
    name: "awwwards.",
    className:
      "rotate-[15deg] bg-[color:var(--text-color)] text-[color:var(--background-color)] z-[6] -translate-x-[115px] -translate-y-[58px]",
  },
  {
    name: "/thoughtworks",
    className: "-rotate-[15deg] -translate-x-[160px] -translate-y-[20px]",
  },
  {
    name: "AUTODESK",
    className: "-translate-x-[200px]",
  },
  {
    name: "facebook",
    className: "-translate-x-[480px] -translate-y-[105px]",
  },
  {
    name: "CSSDesignAwards",
    className: "-translate-x-[518px] -translate-y-[45px] rotate-[28deg]",
  },
];

const WorkedOn = () => {
  return (
    <section className="flex items-start mt-20 gap-[100px] md:flex hidden">
      {/* Left Text */}
      <h2 className="font-extrabold text-3xl whitespace-nowrap leading-tight select- mt-[-30px] ">
        PREVIOUSLY <br /> WORKED ON
      </h2>

      {/* Pills in a Row */}
      <div className="flex  gap-6 ">
        {brands.map(({ name, className }, i) => (
          <div
            key={i}
            className={`${className} px-8 py-5 rounded-full border border-[color:var(--text-color)] font-bold text-base whitespace-nowrap shadow-md cursor-default select-none transition-transform duration-300 ease-in-out hover:scale-[1.05]`}
            style={{
              transformOrigin: "center center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkedOn;
