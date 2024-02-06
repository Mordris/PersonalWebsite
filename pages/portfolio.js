// portfolio.js
import React from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

const ProjectCard = ({ imgSrc, name, description, githubName }) => {
  const githubLink = `https://github.com/Mordris/${githubName}`;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-teal-400">
      <div className="md:flex h-full">
        <div
          className="md:flex-shrink-0"
          style={{ minWidth: "400px", maxWidth: "700px" }}
        >
          <div className="w-full h-80 md:h-96 relative">
            <Image
              className="object-cover w-full h-full rounded-t-xl"
              src={`/portfolio/${imgSrc}`}
              alt={`Project: ${name}`}
              layout="fill"
            />
          </div>
        </div>
        <div className="p-2 md:p-4 flex flex-col justify-between w-full">
          <div>
            <h2 className="text-lg font-semibold text-gray-800 dark:text-teal-500 mb-2">
              {name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-800">
              {description}
            </p>
          </div>
          <div className="flex justify-end">
            <button className="text-xs text-blue-600 hover:underline">
              <a href={githubLink}>Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      githubName: "CountryApp",
      imgSrc: "project1.png",
      name: "Country Information App - React.js",
      description:
        "Displays information about countries using an API. Built using React.js with search, sort, and dark mode features.",
    },
    {
      githubName: "NotePadApp_WithPython",
      imgSrc: "project2.png",
      name: "Notepad App - Python",
      description:
        "Allows users to create, edit, and save notes. Built using Python and Tkinter with search and replace functionality.",
    },
    {
      githubName: "Snake_Game_With_Python",
      imgSrc: "project3.png",
      name: "Snake Game - Python",
      description:
        "Allows users to play the classic snake game. Built using Python and Pygame with a score counter and game over screen.",
    },
    {
      githubName: "SPMHomework",
      imgSrc: "project4.png",
      name: "Personal Budget App (Group Project) - Spring Boot",
      description:
        "Allows users to manage their personal budget. Built using Spring Boot with user authentication and database storage. I worked on the front-end of the application.",
    },
    {
      githubName: "QRCodeComponent",
      imgSrc: "project5.png",
      name: "QR Code",
      description:
        "A simple application that redirects the user to my website using a QR code. Built using HTML and CSS",
    },
  ];

  return (
    <section className="py-10">
      <div>
        <h3
          className="text-4xl py-2"
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          Portfolio
        </h3>
        <p
          className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200"
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          As a seasoned software engineer, I specialize in the art of building
          exceptional websites and applications. My portfolio showcases a
          diverse range of projects, each a testament to my skills in creating
          seamless user experiences and solving complex problems.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-10">
        <CircularProgress size={30} className="mr-2" />
        <p className="text-lg text-gray-800 dark:text-gray-200">
          Other projects will be uploaded soon...
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
