import React from "react";
import imgOne from "../../../img/img1.png";
import { Link } from "react-router-dom";
import { Icon } from "../../../index";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.scss";

const About = () => {
  return (
    <div className="aboutme-home">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>sobre-mi
        </h2>
        <div className="space-line"></div>
      </div>
      <div className="sector">
        <div className="aboutme-home-left">
          <p> Hola, soy Waldir!</p>
          <p>
            Soy un desarrollador front-end autodidacta, estudiante del bootcamp
            CodiG0. Ubicado en Arequipa-Perú. Puedo desarrollar sitios web
            receptivos desde cero y convertirlos en experiencias web modernas y
            fáciles de usar.
          </p>
          <p>
            Transformar mi creatividad y conocimiento en un sitio web ha sido un
            hobbie, por más de un año, con el paso del tiempo a la gente le
            agrado mis hazañas que se volvio una fuente de generar ingresos. He
            estado ayudando a varios clientes a establecer su presencia en
            línea. Siempre me esfuerzo por aprender sobre las últimas
            tecnologías y frameworks.
          </p>
{/*           <button className="call2action">
            Leer Más <Icon css="icon" icon={faArrowRight} />
          </button> */}
        </div>
        <div className="aboutme-home-right">
          <img src={imgOne} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
