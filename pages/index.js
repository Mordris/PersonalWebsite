// pages/index.js
import Head from "next/head";
import React, { useEffect } from "react";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import me from "../public/me.jpg";
import ProjCAdark from "../public/ProjCAdark.png";
import ProjCAlight from "../public/ProjCAlight.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>YEG Website</title>
        <meta name="description" content="Yunus Emre Gültepe Website" />
        <link rel="icon" href="/y-intersection.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-gray-200">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">By Yunus Emre Gültepe</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
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
          <div>
            <h1 className="text-center text-4xl font-bold mb-6 md:text-6xl">
              Hi, I&apos;m Yunus Emre Gültepe
            </h1>
            <h2
              className={`text-2xl text-center font-bold mb-6 md:text-3xl ${jobState.color}`}
            >
              {jobState.title}
            </h2>
            <p className="text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-200">
              I&apos;m a software engineer based in Istanbul, Turkey
              specializing in building exceptional websites, applications, and
              everything in between.
            </p>
          </div>
          <div className="flex justify-center">
            <ul className="flex items-center mt-12 gap-6 py-3 text-gray-600">
              <li>
                <a href="https://instagram.com/emregltp0">
                  <AiFillInstagram className="text-4xl md:text-5xl m-auto" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/yunus-emre-g%C3%BCltepe">
                  <AiFillLinkedin className="text-4xl md:text-5xl ml-6" />
                </a>
              </li>
              <li>
                <a href="https://github.com/Mordris">
                  <AiFillGithub className="text-4xl md:text-5xl ml-6" />
                </a>
              </li>
            </ul>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image
              src={me}
              alt="Yunus Emre Gültepe"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m a software engineer based in Istanbul, Turkey
              specializing in building exceptional websites, applications, and
              everything in between.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="m-auto"
                src={ProjCAlight}
                width={100}
                height={100}
                alt="Project Country App"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 py-1 ">
                Web Development
              </h3>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                I&apos;m a software engineer based in Istanbul, Turkey
                specializing in building exceptional websites, applications, and
                everything in between.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1 dark:text-gray-200">
                  Adobe XD
                </li>
                <li className="text-gray-800 py-1 dark:text-gray-200">Figma</li>
                <li className="text-gray-800 py-1 dark:text-gray-200">
                  Sketch
                </li>
              </ul>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                className="m-auto"
                src={ProjCAdark}
                width={100}
                height={100}
                alt="Project Country App"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 py-1 ">
                Web Development
              </h3>
              <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
                I&apos;m a software engineer based in Istanbul, Turkey
                specializing in building exceptional websites, applications, and
                everything in between.
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <ul>
                <li className="text-gray-800 py-1 dark:text-gray-200">
                  Adobe XD
                </li>
                <li className="text-gray-800 py-1 dark:text-gray-200">Figma</li>
                <li className="text-gray-800 py-1 dark:text-gray-200">
                  Sketch
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m a software engineer based in Istanbul, Turkey
              specializing in building exceptional websites, applications, and
              everything in between.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ProjCAdark}
                alt="Project Country App"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ProjCAdark}
                alt="Project Country App"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ProjCAdark}
                alt="Project Country App"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={ProjCAdark}
                alt="Project Country App"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
