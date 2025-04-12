import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="bg-white text-black dark:bg-black dark:text-white dark:border-b-slate-800 dark:border-b-[0.1px]"
    >
      <section className="w-full sm:px-10 lg:px-16 xl:px-20 mx-auto max-w-[1280px] sm:py-12 py-5 px-6 ">
        <h1 className="font-extrabold sm:text-[35px] text-[30px] text-center bg-white text-gray-800 dark:bg-black dark:text-white mb-8 font-shantell littleLine relative">
          Hello. Meet your Coder 👋
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center justify-center gap-10 px- sm:px-28 py-7">
          <div className="flex justify-center items-center">
            <Image
              src="/images/abbey.jpg"
              alt="nav_image"
              height={200}
              width={350}
              className="sm:rounded-full shadow-lg  h-[400px] w-[500px] sm:h-[500px] sm:w-[500px] mx-6 sm:mx-0"
              loading="lazy"
            />
          </div>

          <div
            id="intro"
            className="text-gray-600 bg-white  dark:bg-black dark:text-gray-300 space-y-4 text-lg leading-relaxed text-left px-4 sm:px-0"
          >
            <p>
              I’m a{" "}
              <span className="font-semibold text-gray-700 bg-white  dark:bg-black dark:text-gray-300">
                Fullstack Web Developer
              </span>
              . From transforming a piece of clothing into a perfectly tailored
              garment as a fashion designer, to writing lines of code, I thrive
              on blending logic with creative design to build visually
              appealing, accessible, and user-friendly websites and
              applications.
            </p>

            <p>
              I’m enthusiastic about learning and implementing new technologies
              to solve real-world challenges. I thrive in team-oriented
              environments and am committed to delivering high-quality results.
            </p>

            <p>
              Explore some of my work in the{" "}
              <Link
                href="#projects"
                className="font-semibold text-gray-700 bg-white  dark:bg-black dark:text-gray-300"
              >
                Projects
              </Link>{" "}
              section.
            </p>

            <p>
              I’m eager to grow as a developer and gain valuable experience in a
              dynamic and challenging work setting. I’m open to job
              opportunities where I can contribute, learn, and evolve. If you
              have an exciting opportunity that matches my skills, don’t
              hesitate to contact me.
            </p>
            <p>
              Other than coding, I love teaching, making male dresses, video
              gaming, and reading.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="#contact"
                className="border-2 sm:p-3 p-2 font-bold rounded-[10px] border-[#7144d2] bg-[#7144d2] text-white  transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                Get in Touch
              </Link>

              <Link
                href="https://docs.google.com/document/d/1_arHUBHGw4wvxG-hxLG1KGgfSgprZGJTe0cI-eQcsM0/edit?usp=sharing"
                // href="/doc/Kolawole_Abiodun_Michael_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 sm:p-3 p-2 font-bold rounded-[10px] border-[#7144d2] bg-[#7144d2] text-white  transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                View Résumé
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
