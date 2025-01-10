import Image from "next/image";
import React from "react";
import JqueryLogo from "@/icons/jQuery";
import skills from "./skillsets";

const Skills = () => {
  return (
    <div id="about-me" className="w-full sm:py-12 py-5 px-6  bg-slate-100">
      <h1 className="font-extrabold sm:text-[35px] text-[25px] text-center text-gray-800 mb-8 font-shantell relative littleLine">
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
  );
};

export default Skills;
