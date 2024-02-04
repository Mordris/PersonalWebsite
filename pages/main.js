// main.js
import React, { useEffect, useState } from "react";
import Header from "./header";
import Introduction from "./introduction";
import Services from "./services";
import Portfolio from "./portfolio";
import Footer from "./footer";
import Contact from "./contact";

export default function Main({ darkMode, setDarkMode }) {
  const [jobState, setJobState] = useState({
    title: "Full-Stack Developer",
    color: "yellow",
  });

  useEffect(() => {
    const jobTitleData = [
      { title: "Full-Stack Developer", color: "green" },
      { title: "Web Developer", color: "red" },
      { title: "Software Engineer", color: "blue" },
    ];

    let index = 0;

    const interval = setInterval(() => {
      setJobState(jobTitleData[index]);

      index = (index + 1) % jobTitleData.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <style jsx>{`
        main {
          min-height: 100vh;
          background-image: url(${darkMode ? "/moon.png" : "/moon-light.png"});
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          background-attachment: fixed;
          position: relative;
        }

        main::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: ${darkMode
            ? "rgba(0, 0, 0, 0.5)"
            : "rgba(255, 255, 255, 0.5)"};
          z-index: -1; /* Ensure the overlay is behind the content */
        }
      `}</style>

      <main
        className={`px-10 md:px-20 lg:px-40 ${
          darkMode ? "dark:bg-gray-950 dark:text-gray-200" : ""
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Introduction jobState={jobState} />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
