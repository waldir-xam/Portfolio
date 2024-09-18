import { About, Projects } from "../../index";
import Experience from "./Sections/Experience/Experience";
import Hero from "./Sections/Hero/Hero";
import MetaTags from "../meta/MetaTags";

import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home-background">
      <MetaTags
        title="Portfolio de Waldir - Desarrollador y programador web con mas de 3 años de experiencia"
        description="Contrata a Waldir para crear tu aplicación web o webapp. Desarrollador Web. Especializado en crear webs y apps únicos."
        url="https://wallydev.dev"
        image="https://i.postimg.cc/s2CN39F3/Screenshot-from-2024-09-17-21-41-35.png"
      />
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
