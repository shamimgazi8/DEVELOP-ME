"use client";
import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function SocialCard() {
  return (
    <div className="text-black md:-rotate-90  w-[200px] h-[100px]">
      <h2 className="text-[18px] font-bold text-gray-800 inline-flex ">
        @williamrey
      </h2>

      <div className="flex justify-start items-center gap-6 mt-4 text-gray-600 dark:text-gray-300 text-xl w-[100px]">
        <p className="text-black">━━</p>
        <a
          href="https://github.com/shamim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="hover:text-blue-600 text-black dark:hover:text-blue-400 transition" />
        </a>
        <a
          href="https://linkedin.com/in/shamim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <RiInstagramFill className="hover:text-blue-600 text-black dark:hover:text-blue-400 transition" />
        </a>
        <a
          href="https://twitter.com/shamim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="hover:text-blue-400 text-black dark:hover:text-blue-300 transition" />
        </a>
      </div>
    </div>
  );
}
