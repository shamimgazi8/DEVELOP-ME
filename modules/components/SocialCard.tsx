"use client";

import { FaFacebook } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function SocialCard() {
  return (
    <div className="text-black dark:text-gray-800 md:-rotate-90 w-[200px] h-[100px]">
      <h2 className="text-[18px] font-bold text-[color:var(--text-color)] inline-flex">
        @williamrey
      </h2>

      <div className="flex justify-start items-center gap-6 mt-4 text-xl w-[100px]">
        <p className="text-black dark:text-gray-400">━━</p>
        <a
          href="https://github.com/shamim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <FaFacebook className="text-[color:var(--text-color)]" />
        </a>
        <a
          href="https://linkedin.com/in/shamim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <RiInstagramFill className="text-[color:var(--text-color)]" />
        </a>
        <a
          href="https://twitter.com/shamim"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-blue-400 dark:hover:text-blue-300 transition"
        >
          <FaTwitter className="text-[color:var(--text-color)]" />
        </a>
      </div>
    </div>
  );
}
