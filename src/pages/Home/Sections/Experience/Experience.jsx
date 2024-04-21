import "./Experience.scss";
import experiences from "../../../../Content/experiences.json";

const Experience = () => {
  return (
    <div className="experience">
      <div className="title-container">
        <h2>
          <span className="hashTag">#</span>experiencia
        </h2>
        <div className="space-line"></div>
      </div>

      <div className="experience-container">
        <ol className="timeline-container">
          {experiences.map((experience) => (
            <li className="timeline-content">
              <div className="timeline-title">
                <div className="timeline-title-content">
                  <div className="one">
                    <h3>{experience.title}</h3>
                    <h4>{experience.company}</h4>
                    <time>{experience.date}</time>
                  </div>
                  <div className="two">
                    <p className="timeline-description">
                      {experience.description.responsibilities}
                      {experience.description.achievements}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Experience;
