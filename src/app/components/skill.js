import Image from "next/image";
import React from "react";
import JqueryLogo from "@/icons/jQuery";
import skills from "./skillsets";

const Skills = () => {
  return (
    <div
      id="about-me"
      className="bg-slate-100 text-black dark:bg-black dark:text-white dark:border-b-slate-800 dark:sm:mb-4 dark:border-b-[0.1px]"
    >
      <div className="w-full sm:px-10 lg:px-16 xl:px-20 mx-auto max-w-[1280px] sm:py-12 py-5 px-6 ">
        <h1 className="font-extrabold sm:text-[35px] text-[25px] text-center text-gray-800  dark:bg-black dark:text-white  mb-8 font-shantell relative littleLine">
          Skills
        </h1>
        <section className="grid sm:grid-cols-5 grid-cols-3 place-items-center gap-8 sm:px-20 px-6 py-5">
          {skills.map((skill, index) => (
            <div
              className="flex justify-center gap-0 flex-col items-center w-fit transition-transform duration-300 ease-in-out transform hover:scale-125 cursor-pointer h-[100px]"
              key={index}
            >
              {skill.icon}
              <span className="italic font-shantell">{skill.name}</span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Skills;
