// introduction.js
import React from "react";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import me from "../public/me.jpg";

const Introduction = ({ jobState }) => {
  if (!jobState) {
    return null;
  }

  const { title, color } = jobState;

  return (
    <section className="min-h-screen">
      <div>
        <h1 className="text-center text-4xl font-bold mb-6 md:text-6xl">
          Hi, I&apos;m Yunus Emre Gültepe
        </h1>
        <h2
          className={`text-2xl text-center font-bold mb-6 md:text-3xl ${color}`}
        >
          {title}
        </h2>
        <p className="text-xl py-5 leading-8 font-semibold text-gray-950 md:text-2xl max-w-2xl mx-auto dark:text-gray-200">
          I&apos;m a software engineer based in Istanbul, Turkey specializing in
          building exceptional websites, applications, and everything in
          between.
        </p>
      </div>
      <div className="flex justify-center">
        <ul className="flex items-center mt-12 gap-6 py-3 text-gray-600 dark:text-gray-400">
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
  );
};

export default Introduction;
