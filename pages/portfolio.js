import React, { useState } from "react";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import projectsData from "../data/projects";

const ProjectCard = ({ imgSrc, name, description, githubName }) => {
  const githubLink = `https://github.com/Mordris/${githubName}`;
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const images = imgSrc.map((img) => ({
    original: `/Portfolio/${img}`,
    thumbnail: `/Portfolio/${img}`,
  }));

  const toggleGallery = () => setIsGalleryOpen(!isGalleryOpen);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-teal-400">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="cursor-pointer relative" onClick={toggleGallery}>
          <div className="w-full h-64">
            <Image
              className="object-cover w-full h-full rounded-t-xl"
              src={`/Portfolio/${imgSrc[0]}`}
              alt={`Project: ${name}`}
              fill
              sizes="100% 100%"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 p-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-teal-500 mb-2">
            {name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-800">
            {description}
          </p>
          <div className="flex justify-end">
            <a
              className="text-xs text-blue-600 hover:underline"
              target="_blank"
              href={githubLink}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <div className="max-w-4xl w-full p-4 relative">
            <button
              className="absolute top-0 right-0 m-4 text-white bg-red-500 p-2 rounded-full z-50"
              onClick={toggleGallery}
              style={{ zIndex: 1000 }}
            >
              Close
            </button>
            <ImageGallery items={images} />
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => (
  <section className="py-10">
    <div>
      <h3 className="text-4xl py-2" style={{ textShadow: "1px 1px 1px cyan" }}>
        Portfolio
      </h3>
      <p
        className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200"
        style={{ textShadow: "1px 1px 1px cyan" }}
      >
        As a seasoned software engineer, I specialize in building exceptional
        websites and applications. My portfolio showcases a diverse range of
        projects, each a testament to my skills in creating seamless user
        experiences and solving complex problems.
      </p>
    </div>
    <div className="grid gap-10 md:grid-cols-1 lg:grid-cols-2">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
    <div className="flex items-center justify-center mt-10">
      <p className="text-lg text-gray-800 dark:text-gray-200">
        Other projects will be uploaded soon...
      </p>
    </div>
  </section>
);

export default Portfolio;
