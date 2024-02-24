import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SliderButton({ prevItems, nextItems, togglePause }) {
  const [isPaused, setIsPaused] = useState(false);

  const handleTogglePauseClick = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(nextItems, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused, nextItems]);

  return (
    <div className="btn">
      <button onClick={prevItems}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button onClick={handleTogglePauseClick}>
        <FontAwesomeIcon icon={isPaused ? faPlay : faPause} />
      </button>
      <button onClick={nextItems}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default SliderButton;
