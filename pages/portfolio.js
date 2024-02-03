// portfolio.js
import React from "react";
import Image from "next/image";

const PortfolioItem = ({ ProjectName, ProjectImg, ProjectDescription }) => {
  return (
    <div className="basis-1/3 flex-1">
      <Image
        className="rounded-lg object-cover object-center w-full h-64 sm:h-80 md:h-96 lg:h-80 xl:h-96"
        width={500} // Replace with your desired width in pixels
        height={400} // Replace with your desired height in pixels
        layout="responsive"
        src={`/Portfolio/${ProjectImg}`}
        alt={`Project: ${ProjectName}`}
      />
      <h3 className="text-lg font-medium pt-8 pb-2 py-1">{ProjectName}</h3>
      <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
        {ProjectName} is a project {ProjectDescription}
      </p>
    </div>
  );
};

const Portfolio = () => {
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200">
          As a seasoned software engineer, I specialize in the art of building
          exceptional websites and applications. With a deep-rooted passion for
          technology and a commitment to delivering cutting-edge solutions, I
          navigate the digital landscape with creativity and precision. My
          portfolio reflects a diverse range of projects, each a testament to my
          skills in creating seamless user experiences and solving complex
          problems. From intuitive interfaces to robust backend systems, I take
          pride in crafting digital solutions that leave a lasting impact. Join
          me on a journey through my portfolio, where innovation meets
          functionality, and explore the world of possibilities in web
          development.
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <PortfolioItem
          ProjectImg="Portfolio1.png"
          ProjectName="Country Information App - React.js"
          ProjectDescription="that displays information about countries using an API. It was built using React.js. It allows users to search for countries with sort functionality and view details such as population, area, and languages spoken. The app also features a dark mode."
        />
        <PortfolioItem
          ProjectImg="Portfolio2.png"
          ProjectName="Python Notepad App - Python"
          ProjectDescription="that allows users to create, edit, and save notes. It was built using Python and Tkinter. The app also has a search and replace functionality"
        />
        <PortfolioItem
          ProjectImg="Portfolio3.png"
          ProjectName="Project 3"
          ProjectDescription=""
        />
        <PortfolioItem
          ProjectImg="Portfolio4.png"
          ProjectName="Project 4"
          ProjectDescription=""
        />
      </div>
    </section>
  );
};

export default Portfolio;
