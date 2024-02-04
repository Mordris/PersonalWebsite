// header.js
import React, { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

const Header = ({ darkMode, setDarkMode }) => {
  const [error, setError] = useState(null);

  try {
    const handleDownloadResume = () => {
      try {
        const link = document.createElement("a");
        link.href = "/resume/YunusEmreGultepe.pdf";
        link.download = "YunusEmreGultepe.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error("Error downloading resume:", error);
        setError("An error occurred while downloading the resume.");
      }
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
        {error && <p className="text-red-500">{error}</p>}
      </nav>
    );
  } catch (error) {
    console.error("Error rendering Header:", error);
    setError("An error occurred while rendering the header.");
    return null; // or a fallback UI
  }
};

export default Header;
