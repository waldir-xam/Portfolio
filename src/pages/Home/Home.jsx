import React from "react";
import "../Home/Home.scss";
import FotoWaldir from "../../img/fotoWaldir.jpg";
import ImgOne from "../../img/img1.png";
import Proyect1 from "../../img/proy1.png";
import Proyect2 from "../../img/proy2.png";
import SkillsLeft from "../../img/skills2.jpg";
import { Link } from "react-router-dom";
import {
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDoubleDown,
  faArrowRight,
  faBookOpen,
  faCode,
  faCodeCommit,
  faDatabase,
  faFileCode,
  faGears,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../../index";
import Typewritter from "typewriter-effect";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO */}
      <div className="hero">
        <div className="hero-aside">
          <div className="aside-line"></div>
          <span>
            <Link
              onClick={() =>
                window.open("https://github.com/waldir-xam", "_blank")
              }
            >
              <Icon css="icon" icon={faGithub} />
            </Link>
            <Link
              onClick={() =>
                window.open(
                  "http://www.discordapp.com/users/597457139736510505",
                  "_blank"
                )
              }
            >
              <Icon css="icon" icon={faDiscord} />
            </Link>
            <Link
              onClick={() =>
                window.open("https://www.linkedin.com/in/waldirxam/", "_blank")
              }
            >
              <Icon css="icon" icon={faLinkedin} />
            </Link>
          </span>
        </div>
        {/* HERO 2 */}
        <div className="hero-left">
          <h1>
            Hi! I'm <span className="hashTag">Waldir Apaza </span>
            {/*     <span className="hashTag"> desarrollador front-end</span> */}
            <br />
            <Typewritter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(750)
                  .deleteAll(50)
                  .typeString("Freelancer")
                  .pauseFor(750)
                  .deleteAll(50)
                  .typeString("FullStack Dev")
                  .pauseFor(750)
                  .deleteAll(50)
                  .start();
              }}
              options={{
                autoStart: true,
                loop: true,
              }}
            />
            {/* Web Developer , Freelancer , FullStack Developer */}
          </h1>

          <p>
            Desarrollo sitios responsive donde la tecnologia conoce la
            creatividad.
          </p>
          <button className="call2action" href="#contact">
            Contact me! <Icon css="icon" icon={faAngleDoubleDown} />
          </button>
        </div>
        <div className="hero-right">
          <img src={FotoWaldir} alt="profile pic" />
          {/*           <span className="status">
            <div className="square-status"></div>
            Actualmente trabajando como<span> Freelance</span>
          </span> */}
        </div>
      </div>

      {/* REFRAN FACHERO*/}
      <div className="hero-center">
        <span className="com1">"</span>
        <h6>Un gran poder conlleva una gran responsabilidad</h6>
        <span className="com2">"</span>
      </div>

      {/* ABOUT ME */}
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
              Soy un desarrollador front-end autodidacta, estudiante del
              bootcamp CodiG0. Ubicado en Arequipa-Perú. Puedo desarrollar
              sitios web receptivos desde cero y convertirlos en experiencias
              web modernas y fáciles de usar.
            </p>
            <p>
              Transformar mi creatividad y conocimiento en un sitio web ha sido
              un hobbie, por más de un año, con el paso del tiempo a la gente le
              agrado mis hazañas que se volvio una fuente de generar ingresos.
              He estado ayudando a varios clientes a establecer su presencia en
              línea. Siempre me esfuerzo por aprender sobre las últimas
              tecnologías y frameworks.
            </p>
            <button className="call2action">
              Leer Más <Icon css="icon" icon={faArrowRight} />
            </button>
          </div>
          <div className="aboutme-home-right">
            <img src={ImgOne} alt="" />
          </div>
        </div>
      </div>

      {/*       <div className="quehago">
        <div className="title-container">
          <h2>
            <span className="hashTag">#</span>que-hago?
          </h2>
          <div className="space-line"></div>
        </div>
        <div className="doing">
          <div className="ux-ui">Diseño UX/UI</div>
          <div className="web">Desarrollo Web</div>
          <div className="movil">
            <div className="soon">PRONTO</div>
            <span>Desarrollo Movil </span>
          </div>
        </div>
      </div> */}

      {/* skills */}
      <div className="skills">
        <div className="title-container">
          <h2>
            <span className="hashTag">#</span>habilidades
          </h2>
          <div className="space-line"></div>
        </div>
        <div className="sector">
          <div className="skills-left">
            <img src={SkillsLeft} alt="skills" />
          </div>
          <div className="skills-right">
            <div className="box-skill">
              <h4>
                <Icon css="icon" icon={faCode} /> Lenguajes
              </h4>
              <ul>
                <li>Javascript</li>
                <li>Pyhton</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <Icon css="icon" icon={faFileCode} /> Otros
              </h4>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Vanilla JS</li>
                <li>SCSS</li>
                <li>REST</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <Icon css="icon" icon={faDatabase} /> Databases
              </h4>
              <ul>
                <li>Mongo</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <Icon css="icon" icon={faBookOpen} /> Librerias
              </h4>
              <ul>
                <li>React</li>
                <li>Vue</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <Icon css="icon" icon={faGears} /> Herramientas
              </h4>
              <ul>
                <li>VSCode</li>
                <li>Figma</li>
                <li>FontAwsome</li>
                <li>BootStrap</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="proyectos">
        <div className="proyectsHead">
          <div className="title-container">
            <h2>
              <span className="hashTag">#</span>Proyectos
            </h2>
            <div className="space-line"></div>
          </div>
          <div className="ver-mas">
            <span>
              Ver todo <Icon css="icon" icon={faArrowRight} />
            </span>
          </div>
        </div>

        <div className="proyect-list">
          {/* proyecto #1 */}
          <div className="proyect-box">
            <img src={Proyect1} style={{ height: "8em" }} />
            <div className="proyect-tools">React,CSS MUI</div>
            <div className="proyect-specs">
              <div className="proyect-title">GitHub Searcher 2.0</div>
              <div className="proyect-description">
                Buscador de usuarios de github, da info,detalles y repos del
                usuario buscado
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>

          {/* proyecto #2 */}
          <div className="proyect-box">
            <img src={Proyect2} style={{ height: "8em" }} />
            <div className="proyect-tools">React,CSS, Tailwind</div>
            <div className="proyect-specs">
              <div className="proyect-title">Portfolio 1.0</div>
              <div className="proyect-description">
                Portfolio con info acerca de mi, proyectos y contacto
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>

          {/* proyecto #3 */}

          <div className="proyect-box">
            <img src={Proyect1} style={{ height: "8em" }} />
            <div className="proyect-tools">React,CSS, Tailwind</div>
            <div className="proyect-specs">
              {" "}
              <div className="proyect-title">Rick & Morti API</div>
              <div className="proyect-description">
                App usando la API fake de Rick & Morty
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>

          {/* proyecto #4 */}

          <div className="proyect-box">
            <img src={Proyect1} style={{ height: "8em" }} />
            <div className="proyect-tools">HTML, CSS , Bootstrap , JS</div>
            <div className="proyect-specs">
              <div className="proyect-title">Portfolio 1.0</div>
              <div className="proyect-description">
                App usando la API de pokemon
              </div>
              <div className="proyect-box-btns">
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-live"
                >
                  Live <Icon css="icon" icon={faCodeCommit} />
                </Link>
                <Link
                  onClick={() =>
                    window.open("https://github.com/waldir-xam", "_blank")
                  }
                  className="proyect-btn-repo"
                >
                  Repo <Icon css="icon" icon={faGithub} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="contact" id="#contact">
        <div className="contact-container">
          <div className="contact-left">
            <div className="title-container">
              <h2>
                <span className="hashTag">#</span>contacto
              </h2>
              <div className="space-line"></div>
            </div>
            <div className="contact-left-content">
              <p>
                Estoy interesado en oportunidades freelance. Sin embargo, si
                tienes otra solicitud o pregunta, no dudes en ponerse en
                contacto conmigo.
              </p>
              <div className="contact-mini-box">
                <h6>Tambien puedes escribirme un mensaje aqui:</h6>
                <ul>
                  <li>
                    <Link
                      onClick={() =>
                        window.open("https://github.com/waldir-xam", "_blank")
                      }
                    >
                      <Icon css="icon" icon={faGithub} /> waldir-xam
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.open(
                          "http://www.discordapp.com/users/597457139736510505",
                          "_blank"
                        )
                      }
                    >
                      <Icon css="icon" icon={faDiscord} /> ratatrampa#7994
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/in/waldirxam/",
                          "_blank"
                        )
                      }
                    >
                      <Icon css="icon" icon={faLinkedin} /> waldirxam
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="contact-right">
            <div className="contact-right-inputContainer">
              <div className="input-row">
                <div className="col-50">
                  <input type="text" placeholder="Nombre" />
                  <input type="text" placeholder="Email" />
                </div>
              </div>
              <div className="col-100">
                <input type="text" placeholder="Asunto" />
                <div className="col-msg">
                  <input type="text" placeholder="Mensaje" />
                </div>
              </div>
            </div>
            <button className="input-send">
              Enviar <Icon css="icon" icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
