// main.js
import React, { useEffect } from "react";
import Header from "./header";
import Introduction from "./introduction";
import Services from "./services";
import Portfolio from "./portfolio";
import Footer from "./footer";

export default function Main({ darkMode, setDarkMode }) {
  const [jobState, setJobState] = React.useState({
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
      <main
        className={`bg-white px-10 md:px-20 lg:px-40 ${
          darkMode ? "dark:bg-gray-900 dark:text-gray-200" : ""
        }`}
        style={{
          // I will fix this for small screens
          backgroundImage: darkMode
            ? "url('/moon.png')"
            : "url('/moon-light.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Introduction jobState={jobState} />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
