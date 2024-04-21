import React, { useState, useEffect } from "react";
import "./Carousel.scss";
import logos from "../../../../Content/logos.json";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    let intervalId;

    if (!isPaused) {
      intervalId = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % logos.length);
      }, 3000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  return (
    <div
      className="carousel"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="carousel-images"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {logos.map((logo, index) => (
          <img
            key={logo.id}
            src={logo.image}
            alt={logo.name}
            className={index === activeIndex ? "active" : ""}
            onMouseEnter={handleMouseEnter}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
