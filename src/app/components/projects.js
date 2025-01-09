import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectData from "./projectsData";

const Projects = () => {
  return (
    <div id="about-me" className="w-full sm:py-12 py-5 px-6  bg-slate-50">
      <h1 className="font-extrabold text-[20px] text-right text-gray-800 mb-8 relative littleLin">
        Projects and Work experiences
      </h1>

      <section className="space-y-12">
        {ProjectData.map((project, ind) => (
          <div
            className="grid sm:grid-cols-2 grid-cols-1 gap-3 place-content-center sm:px-12"
            key={ind}
          >
            <div className="p-6 text-left space-y-4">
              <>
                <h1 className="font-bold text-[22px] font-montserrat">
                  {project.name}
                </h1>

                <span className="font-semibold italic text-[14px]">
                  {project.duration}
                </span>
              </>

              <p className=" text-[18px] leading-9 my-2 text-gray-600">
                {project.description}
              </p>
              <div className="grid sm:grid-cols-10 grid-cols-5">
                {project.technologies.map((tech, index) => (
                  <div className="" key={index}>
                    <Image
                      src={tech.icon}
                      height={50}
                      width={50}
                      alt={tech.name}
                      title={tech.name}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-8 mt-4">
                {project.url &&
                (
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2  p-2 font-bold border-gray-500  text-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    LIVE SITE
                  </Link>
                )}
                {project.githubUrl &&
                (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2  p-2 font-bold border-gray-500  text-gray-700  transition-transform duration-300 ease-in-out transform hover:scale-105"
                  >
                    GITHUB
                  </Link>
                )}
              </div>
            </div>
            <div className="">
              <Image src={project.image} height={600} width={600} alt="" />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
