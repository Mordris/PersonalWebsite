import React, { useState } from "react";
import Image from "next/image";
import { CircularProgress } from "@mui/material";
import projectsData from "../data/projects";

const ProjectCard = ({ imgSrc, name, description, githubName }) => {
  const githubLink = `https://github.com/Mordris/${githubName}`;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    setCurrentImageIndex(0); // Reset image index when opening modal
  };

  const navigateToPreviousImage = (e) => {
    e.stopPropagation(); // Stop event propagation
    setCurrentImageIndex(
      (currentImageIndex - 1 + imgSrc.length) % imgSrc.length
    );
  };

  const navigateToNextImage = (e) => {
    e.stopPropagation(); // Stop event propagation
    setCurrentImageIndex((currentImageIndex + 1) % imgSrc.length);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-teal-400">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div
          className="col-span-1 md:col-span-1 cursor-pointer relative"
          onClick={toggleModal}
        >
          <div className="w-full h-64 relative">
            <Image
              className="object-cover w-full h-full rounded-t-xl"
              src={`/portfolio/${imgSrc[0]}`} // Only display the first image
              alt={`Project: ${name}`}
              fill
              sizes="100% 100%"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-4">
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
              <a target="_blank" href={githubLink}>
                Learn More
              </a>
            </button>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={toggleModal}
        >
          <div className="max-w-4xl w-full p-4 relative">
            <div style={{ paddingTop: "85%", position: "relative" }}>
              <Image
                src={`/portfolio/${imgSrc[currentImageIndex]}`}
                alt={`Project: ${name}`}
                fill
                sizes="100% 100%"
                style={{ objectFit: "cover" }}
              />
            </div>
            {imgSrc.length > 1 && (
              <div className="flex justify-between mt-2">
                <button
                  className="bg-white bg-opacity-50 p-2 rounded-full border border-teal-500"
                  onClick={navigateToPreviousImage}
                >
                  &lt; Previous
                </button>
                <button
                  className="bg-white bg-opacity-50 p-2 rounded-full border border-teal-500"
                  onClick={navigateToNextImage}
                >
                  Next &gt;
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const projects = projectsData;

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
