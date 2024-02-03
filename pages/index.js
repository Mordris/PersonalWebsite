// index.js
import Head from "next/head";
import React, { useState } from "react";
import Main from "./main";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>YEG Website</title>
        <meta name="description" content="Yunus Emre Gültepe Website" />
        <link rel="icon" href="/y-intersection.ico" />
      </Head>
      <Main darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
