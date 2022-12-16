import React from "react";
import "../styles/home.css";
import FotoWaldir from "../img/fotowaldir.jpg";
import ImgOne from "../img/img1.png";
import Proyect1 from "../img/proy1.png";
import Proyect2 from "../img/proy2.png";
import SkillsLeft from "../img/skills2.jpg";

const Home = () => {
  return (
    <div className="home-container">
      {/* HERO */}
      <div className="hero">
        <div className="hero-aside">
          <div className="aside-line"></div>
          <ul>
            <li>
              <i class="fa-brands fa-github">
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </i>
            </li>
            <li>
              <i class="fa-brands fa-discord"></i>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
        <div className="hero-left">
          <h1>
            Soy <span className="hashTag">diseñador web </span>y
            <span className="hashTag"> desarrollador front-end</span>
          </h1>

          <p>
            Diseño y desarrollo sitios responsive donde la tecnologia conoce la
            creatividad.
          </p>
          <button className="call2action" href="#contact">
            Contactame! <i class="fa-solid fa-angle-down"></i>
          </button>
        </div>
        <div className="hero-right">
          <img src={FotoWaldir} alt="profile pic" />
          <span className="status">
            <div className="square-status"></div>
            Actualmente trabajando como <a href="">Freelance</a>
          </span>
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
              Leer Más <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="aboutme-home-right">
            <img src={ImgOne} alt="" />
          </div>
        </div>
      </div>

      <div className="quehago">
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
      </div>

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
                <i class="fa-solid fa-code"></i> Lenguajes
              </h4>
              <ul>
                <li>Javascript</li>
                <li>Pyhton</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <i class="fa-sharp fa-solid fa-file-code"></i> Otros
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
                <i class="fa-solid fa-database"></i> Databases
              </h4>
              <ul>
                <li>Mongo</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <i class="fa-solid fa-books"></i> Librerias
              </h4>
              <ul>
                <li>React</li>
                <li>Vue</li>
              </ul>
            </div>
            <div className="box-skill">
              <h4>
                <i class="fa-solid fa-gear"></i> Herramientas
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
              Ver todo <i class="fa-solid fa-arrow-right"></i>
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
                <button className="proyect-btn-live">
                  Live <i class="fa-solid fa-code-commit"></i>
                </button>
                <button className="proyect-btn-repo">
                  Repo <i class="fa-brands fa-github"></i>
                </button>
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
                <button className="proyect-btn-live">
                  Live <i class="fa-solid fa-code-commit"></i>
                </button>
                <button className="proyect-btn-repo">
                  Repo <i class="fa-brands fa-github"></i>
                </button>
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
                <button className="proyect-btn-live">
                  Live <i class="fa-solid fa-code-commit"></i>
                </button>
                <button className="proyect-btn-repo">
                  Repo <i class="fa-brands fa-github"></i>
                </button>
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
                <button className="proyect-btn-live">
                  Live <i class="fa-solid fa-code-commit"></i>
                </button>
                <button className="proyect-btn-repo">
                  Repo <i class="fa-brands fa-github"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACTO */}
      <div className="contact" id="#contact">
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
              tienes otra solicitud o pregunta, no dudes en ponerse en contacto
              conmigo.
            </p>
            <div className="contact-mini-box">
              <h6>Tambien puedes escribirme un mensaje aqui:</h6>
              <ul>
                <li>
                  <i class="fa-brands fa-github">
                    <a
                      href="https://google.com"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                  </i>
                  waldir-xam
                </li>
                <li>
                  <i class="fa-brands fa-discord"></i> ratatrampa#7994
                </li>
                <li>
                  <i class="fa-brands fa-linkedin"></i> waldirxam
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
            Enviar <i class="fa-regular fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
