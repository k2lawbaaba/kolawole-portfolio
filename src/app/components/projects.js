"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProjectData from "./projectsData";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(
    ProjectData.slice(0, 2)
  ); // Initially show 2 projects
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => [
      ...prev,
      ...ProjectData.slice(prev.length, prev.length + 5),
    ]);
  };

  useEffect(() => {
    if (inView && visibleProjects.length < ProjectData.length) {
      loadMoreProjects();
    }
  }, [inView]);

  return (
    <div id="projects" className="w-full sm:py-12 py-5 px-6 bg-slate-50">
      <h1 className="font-extrabold sm:text-[35px] text-[25px] text-center text-gray-800 mb-8 font-shantell relative littleLine">
        Projects and Work Experiences
      </h1>

      <section className="sm:space-y-12 ">
        {visibleProjects.map((project, ind) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1 sm:gap-3 place-content-center sm:px-12"
            key={ind}
            ref={ind === visibleProjects.length - 1 ? ref : null} // Attach ref to the last visible item
          >
            <div
              className={`p-6 text-left space-y-4 order-2  ${
                ind % 2 !== 0 ? "sm:order-1" : "sm:order-2"
              }`}
            >
              <h1 className="font-bold text-[22px] font-montserrat">
                {project.name}
              </h1>
              <span className="font-semibold italic text-[14px]">
                {project.duration}
              </span>
              <p className="text-[18px] leading-9 my-2 text-gray-600">
                {project.description}
              </p>
              <div className="grid sm:grid-cols-10 grid-cols-5 gap-2">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="w-[40px] h-[40px]">
                    <Image
                      src={tech.icon}
                      height={50}
                      width={50}
                      alt={tech.name}
                      title={tech.name}
                      loading="lazy"
                      className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 mt-4">
                {project.url && (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 p-2 font-bold border-gray-500 text-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    LIVE SITE
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 p-2 font-bold border-gray-500 text-gray-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    GITHUB
                  </Link>
                )}
              </div>
            </div>
            <div
              className={`flex items-start justify-start order-1 ${
                ind % 2 === 0 ? "sm:order-1" : "sm:order-2"
              }`}
            >
              <Image
                src={project.image}
                height={600}
                width={600}
                alt={project.name || "Project Image"}
                loading="lazy"
                className="transition-transform duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
