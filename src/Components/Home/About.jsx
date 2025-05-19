import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLightbulb,
  faHandshake,
  faComments,
  faCertificate,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";
import AnimatedUnderline from "../../Animations/AnimatedUnderline";

const sections = [
  {
    icon: faUsers,
    title: "Our Team",
    content:
      "Meet our dedicated team of professionals who are passionate about software development and design.",
    link: "#",
  },
  {
    icon: faCogs,
    title: "Our Services",
    content:
      "Discover a wide range of services we offer, including software development, web and mobile app development.",
    link: "#",
  },
  {
    icon: faLightbulb,
    title: "Innovative Solutions",
    content:
      "We're committed to delivering innovative solutions that help your business thrive in the digital world.",
    link: "#",
  },
  {
    icon: faHandshake,
    title: "Client-Centric Approach",
    content:
      "Our client-centric approach ensures that we focus on your specific needs and goals.",
    link: "#",
  },
  {
    icon: faComments,
    title: "Customer Feedback",
    content:
      "We value feedback from our clients and continuously improve our services to exceed your expectations.",
    link: "#",
  },
  {
    icon: faCertificate,
    title: "Commitment to Quality",
    content:
      "We're committed to delivering high-quality solutions that help your business thrive in the digital world.",
    link: "#",
  },
];

const About = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-16 py-10 text-white">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-10 text-center">
          About <AnimatedUnderline>Neurosystems</AnimatedUnderline>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-zinc-800/70 backdrop-blur-lg hover:scale-105 duration-200 w-full max-w-md h-80 text-white p-6 rounded-lg shadow-lg flex flex-col items-center"
          >
            <FontAwesomeIcon
              icon={section.icon}
              className="text-6xl text-indigo-600 mb-4 self-start"
            />
            <h2 className="text-2xl font-semibold mb-2 text-center">{section.title}</h2>
            <p className="text-gray-300 mb-4 text-xl text-center">{section.content}</p>
            <div className="mt-auto flex justify-center w-full">
              <a href={section.link}>
                <button className="bg-indigo-600 hover:bg-indigo-700 hover:scale-105 duration-200 rounded-3xl py-2 px-4">
                  Read more
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
