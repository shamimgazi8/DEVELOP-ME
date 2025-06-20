const Footer = () => {
  return (
    <section className="p-[50px] bg-black m-[15px] rounded-[40px] z-50 grid md:grid-cols-[1fr_2fr]">
      <div className=" flex flex-col justify-between">
        <h1
          className="uppercase font-extrabold text-[34px] leading-[34px] text-[#C5FF41]"
          style={{
            fontFamily: "'Bw Gradual DEMO', sans-serif",
            letterSpacing: "-0.02em", // -2% letter spacing
          }}
        >
          devlop.me
        </h1>
        <h1
          className="text-[24px] text-white"
          style={{
            fontFamily: "'Bw Gradual DEMO', sans-serif",
            letterSpacing: "-0.02em", // -2% letter spacing
          }}
        >
          BESNIK
        </h1>
      </div>
      <div className="bg-black text-white p-10 px-16">
        {/* Top Heading */}
        <h1 className="text-white text-[48px] sm:text-[64px] font-bold mb-12 leading-none">
          As you <span className="font-normal">can</span>
        </h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3  gap-8 text-sm mb-16">
          {/* Say Hello */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Say hello</h3>
            <p className="mb-1">HELLO@DEVLOP.ME.COM</p>
            <p className="mb-4">MAHBUBUL@ME.COM</p>

            <h4 className="text-gray-400 font-semibold mb-5 mt-5">Call</h4>
            <p>+784549 4981 00</p>
            <p>+8845 0100 211</p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Menu</h3>
            <ul className="space-y-1">
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PORTFOLIO</li>
              <li>BLOG</li>
            </ul>
          </div>

          {/* Empty column for spacing if needed */}

          {/* Social */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Social</h3>
            <ul className="space-y-1">
              <li>TWITTER</li>
              <li>INSTAGRAM</li>
              <li>FACEBOOK</li>
              <li>BEHANCE</li>
              <li>DRIBBBLE</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs border-t border-gray-700 pt-6">
          <p>© devlop.me 2022</p>
          <p className="mt-2 sm:mt-0">PRIVACY - TERMS</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
