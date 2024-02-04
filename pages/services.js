// services.js
import React from "react";
import Image from "next/image";
import webdev from "../public/webdev.jpg";
import software from "../public/software.jpg";

const Service = ({ image, title, description, technology }) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 border bg-gray-100 border-teal-400 dark:bg-gray-900">
      <Image
        className="m-auto"
        src={image}
        width={300}
        height={300}
        alt={title}
      />
      <h3 className="text-lg font-medium pt-8 pb-2 py-1 ">{title}</h3>
      <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
        {description}
      </p>
      <h4 className="py-4 text-teal-400">Technologies I use</h4>
      <ul>
        {technology.map((technology, index) => (
          <li key={index} className="text-gray-800 py-1 dark:text-gray-200">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const servicesData = [
    {
      image: webdev,
      title: "Web Development",
      description:
        "As a web developer, I specialize in creating dynamic and user-friendly websites. With a focus on crafting visually appealing and functional interfaces, I bring ideas to life by leveraging the latest web technologies. Let's collaborate to build engaging online experiences.",
      technology: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Next.js",
      ],
    },
    {
      image: software,
      title: "Software Engineering",
      description:
        "As a software engineer, I specialize in developing efficient and innovative solutions. With a passion for pushing the boundaries of technology, I'm dedicated to creating impactful software experiences. Let's build something remarkable together.",
      technology: [
        "C++",
        "Python",
        "Java",
        "Spring Boot",
        "MySQL",
        "PostgreSQL",
        "Docker",
      ],
    },
  ];

  return (
    <section>
      <div>
        <h3
          className="text-4xl py-2"
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          Services
        </h3>
        <p
          className="text-lg py-5 leading-8 text-gray-800 dark:text-gray-200 "
          style={{ textShadow: "1px 1px 1px cyan" }}
        >
          I offer a range of services to help you achieve the results
          you&apos;re after. Not sure what you need, or what it costs? I can
          explain what services are right for you and tell you more about our
          fees. Get in touch below.
        </p>
      </div>
      <div className="lg:flex gap-10 ">
        {servicesData.map((service, index) => (
          <Service key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
