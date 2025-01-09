// import Image from "next/image";
// import Link from "next/link";
import React from "react";
import AboutMe from "./aboutMe";
import Projects from "./projects";
import Skills from "./skill";

const MainBody = () => {
  return (
    <div className="w-full py-10 sm:px-2">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default MainBody;
