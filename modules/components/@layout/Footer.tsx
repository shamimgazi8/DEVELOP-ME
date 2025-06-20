const Footer = () => {
  return (
    <section
      data-aos="zoom-in"
      className="p-6 sm:p-10 bg-black m-4 rounded-[30px] z-50 grid md:grid-cols-[1fr_2fr] gap-8"
    >
      {/* Left Branding */}
      <div className="flex flex-col justify-between gap-6">
        <h1
          className="uppercase font-extrabold text-2xl sm:text-[34px] leading-none text-[#C5FF41]"
          style={{
            fontFamily: "'Bw Gradual DEMO', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          devlop.me
        </h1>
        <h1
          className="text-xl sm:text-[24px] text-white"
          style={{
            fontFamily: "'Bw Gradual DEMO', sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          BESNIK
        </h1>
      </div>

      {/* Right Content */}
      <div className="text-white px-2 sm:px-8">
        {/* Top Heading */}
        <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold mb-8 sm:mb-12 leading-tight">
          As you <span className="font-normal">can</span>
        </h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 text-sm mb-12">
          {/* Say Hello */}
          <div>
            <h3 className="text-gray-400 font-semibold mb-3">Say hello</h3>
            <p className="mb-1">HELLO@DEVLOP.ME.COM</p>
            <p className="mb-4">MAHBUBUL@ME.COM</p>

            <h4 className="text-gray-400 font-semibold mb-3 mt-5">Call</h4>
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
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-xs border-t border-gray-700 pt-5 gap-2">
          <p>© devlop.me 2022</p>
          <p>PRIVACY - TERMS</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
