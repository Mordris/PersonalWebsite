// header.js
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons">By Yunus Emre Gültepe</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-2 rounded-md ml-8 text-white"
            href="#"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
