import Head from "next/head";
import React, { useEffect, useState } from "react";
import Main from "./main";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true); // Set default to true for dark mode
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const isBrowser = typeof window !== "undefined";
      const storedMode = isBrowser ? localStorage.getItem("darkMode") : "";

      // If there's no stored mode, it will default to dark mode.
      const initialMode = storedMode === "dark" || storedMode === null;

      setDarkMode(initialMode);
    } catch (error) {
      console.error("Error setting dark mode:", error);
      setError("An error occurred while setting dark mode.");
    }
  }, []);

  useEffect(() => {
    try {
      const isBrowser = typeof window !== "undefined";
      if (isBrowser) {
        localStorage.setItem("darkMode", darkMode ? "dark" : "light");
      }
    } catch (error) {
      console.error("Error updating dark mode in localStorage:", error);
      setError("An error occurred while updating dark mode.");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Yunus Emre Gültepe</title>
        <meta
          name="description"
          content="Yunus Emre Gültepe Portfolio Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Home;
