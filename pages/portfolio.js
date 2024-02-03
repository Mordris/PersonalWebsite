// portfolio.js
import React from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";

const ProjectCard = ({ imgSrc, name, description }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-teal-400">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-96 w-full object-cover md:h-full md:w-96"
            src={`/Portfolio/${imgSrc}`}
            alt={`Project: ${name}`}
            width={1600}
            height={1280}
          />
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-semibold text-gray-800 dark:text-teal-500">
            {name}
          </h2>
          <p className="mt-2 text-xl text-gray-600 dark:text-gray-800">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects = [
    {
      imgSrc: "Portfolio1.png",
      name: "Country Information App - React.js",
      description:
        "Displays information about countries using an API. Built using React.js with search, sort, and dark mode features.",
    },
    {
      imgSrc: "Portfolio2.png",
      name: "Notepad App - Python",
      description:
        "Allows users to create, edit, and save notes. Built using Python and Tkinter with search and replace functionality.",
    },
    {
      imgSrc: "Portfolio3.png",
      name: "Snake Game - Python",
      description:
        "Allows users to play the classic snake game. Built using Python and Pygame with a score counter and game over screen.",
    },
  ];

  return (
    <section className="py-10">
      <div>
        <h3 className="text-4xl py-2">Portfolio</h3>
        <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200">
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
          Other portfolios will be uploaded soon...
        </p>
      </div>
    </section>
  );
};

export default Portfolio;
