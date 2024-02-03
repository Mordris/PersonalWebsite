// header.js
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    // Set the href attribute to the path of your PDF file
    link.href = "/resume/YunusEmreGultepe.pdf";
    // Set the download attribute to specify the file name
    link.download = "YunusEmreGultepe.pdf";
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger the click event on the link
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

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
            className="bg-gradient-to-r from-cyan-500 to-teal-400 px-4 py-2 rounded-md ml-8 hover:shadow-2xl hover:shadow-cyan-600 text-white cursor-pointer  dark:hover:shadow-teal-500  hover:text-gray-800 transition duration-500"
            onClick={handleDownloadResume}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
