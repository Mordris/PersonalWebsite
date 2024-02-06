import React, { useEffect, useState } from "react";
import Image from "next/image";
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
  const [showScrollButton, setShowScrollButton] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setShowScrollButton(scrollTop > 200); // Adjust this value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

        .scroll-to-top {
          position: fixed;
          bottom: 20px;
          right: 20px;
          cursor: pointer;
          display: ${showScrollButton ? "block" : "none"};
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

      <div className="scroll-to-top" onClick={scrollToTop}>
        <Image
          src="/scrollTop.png"
          alt="Scroll to top"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
}
