import React from "react";
import { BsSend } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoIosSend, IoMdCall } from "react-icons/io";
import Button from "./Button";
import { IoMail } from "react-icons/io5";

const ContactForm: React.FC = () => {
  return (
    <div className="bg-black text-white p-8 rounded-[30px] w-full max-w-sm shadow-xl">
      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-gray-700 focus:outline-none focus:border-lime-400 py-2 placeholder-gray-400 focus:placeholder:text-white"
          />
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-b border-gray-700 focus:outline-none focus:border-lime-400 py-2 placeholder-gray-400 focus:placeholder:text-white"
          />
        </div>

        {/* Project Field */}
        <div>
          <input
            type="text"
            placeholder="Describe your project"
            className="w-full bg-transparent border-b border-gray-700 focus:outline-none focus:border-lime-400 py-2 placeholder-gray-400 focus:placeholder:text-white"
          />
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button className=" border  border-white rounded-full py-2 pr-4 flex items-center justify-center gap-2 leading-3 transition-all duration-300 hover:pl-2 cursor-pointer">
            <div
              className="md:w-[38px] md:h-[38px] md:p-0 p-1 rounded-full border border-white flex items-center justify-center 
        transition-transform duration-300 group-hover:translate-x-[5px]"
            >
              <IoIosSend />
            </div>

            {/* Text */}
            <span className="text-[16px] group-hover:translate-x-[5px]  transition-transform duration-300 ">
              {"Send"}
            </span>
          </button>{" "}
          or
          <button className=" border  border-white rounded-full py-2 pr-4 flex items-center justify-center gap-2 leading-3 transition-all duration-300 hover:pl-2 cursor-pointer">
            <div
              className="md:w-[38px] md:h-[38px] md:p-0 p-1 rounded-full border border-white flex items-center justify-center 
        transition-transform duration-300 group-hover:translate-x-[5px]"
            >
              <IoMail />
            </div>

            {/* Text */}
            <span className="text-[12px] group-hover:translate-x-[5px]  transition-transform duration-300 ">
              {"Contact me"}
            </span>
          </button>
        </div>
      </form>

      {/* Footer */}
      <div className="flex flex-col items-center justify-start text-sm gap-3 sm:flex-row sm:justify-start mt-15">
        <span className="text-gray-400">@williamrey</span>
        <div className="flex items-center gap-4 text-lg">
          <p>-------</p>
          <a href="#" className="hover:text-lime-400 transition">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-lime-400 transition">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
