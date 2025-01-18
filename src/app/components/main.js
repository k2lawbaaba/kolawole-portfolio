import AboutMe from "./aboutMe";
import Projects from "./projects";
import Skills from "./skill";
import Contact from "./contact";

const MainBody = () => {
  return (
    <div className="w-full py-10 sm:px-2" id="home">
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default MainBody;
