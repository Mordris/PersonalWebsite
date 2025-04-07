// services.js
import React from "react";
import Image from "next/image";
import webdev from "../public/myservices/webdev.jpg";
import software from "../public/myservices/software.jpg";

const Service = ({ image, title, description, technology }) => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 border bg-gray-100 border-teal-400 dark:bg-gray-900 lg:w-1/2 md:w-3/4 sm:w-full mx-auto">
      <Image className="m-auto" src={image} width={300} alt={title} />
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
      title: "Frontend Web Development",
      description:
        "I specialize in creating visually appealing and user-friendly web applications. I have a strong understanding of HTML, CSS, and JavaScript, and I am proficient in using frameworks like React.js to build dynamic and responsive interfaces. My goal is to deliver high-quality code that meets your needs and exceeds your expectations.",
      technology: [
        "HTML and CSS",
        "JavaScript",
        "React.js and Next.js",
        "Tailwind CSS",
        "Chakra UI and Material UI",
      ],
    },
    {
      image: software,
      title: "Backend Software Development",
      description:
        "I focus on building robust and scalable server-side applications. My expertise lies in designing APIs, managing databases, and ensuring seamless communication between the frontend and backend. Let's work together to create efficient and reliable software solutions.",
      technology: [
        "Node.js and Express.js",
        "Python Flask and FastAPI",
        "MongoDB , PostgreSQL",
        "AWS EC2 and S3",
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
