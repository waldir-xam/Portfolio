import React from "react";
import "./Experience.scss";
import { useState } from "react";

import { experience } from "../../../../Content/experience.js";

export default function ListExperience() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const listItems = experience.map((work) => (
    <li key={work.id} className="timeline-content">
      <div className="timeline-title">
        <div className="timeline-title-content">
          <div className="one">
            <h3>{work.title}</h3>
            <h4>{work.company}</h4>
            <time>{work.date}</time>
          </div>
          <div className="two">
            <p className="timeline-description">
              {showMore ||
              work.description.responsibilities.split(" ").length <= 30
                ? work.description.responsibilities
                : `${work.description.responsibilities
                    .split(" ")
                    .slice(0, 30)
                    .join(" ")}...`}
              {work.description.responsibilities.split(" ").length > 30 && (
                <button onClick={toggleShowMore}>
                  {showMore ? "Ver menos" : "Saber más >"}
                </button>
              )}
            </p>
          </div>
        </div>
      </div>
    </li>
  ));
  return <ol className="timeline-container">{listItems}</ol>;
}
