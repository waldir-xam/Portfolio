import { About, Projects } from "../../index";
import "../Home/Home.scss";
import Experience from "./Sections/Experience/Experience";
import Hero from "./Sections/Hero/Hero";

const Home = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="home-background">
      <div className="home-container">
        <Hero />
        <Experience />
        <Projects />
        <About />
      </div>
    </div>
  );
};

export default Home;
