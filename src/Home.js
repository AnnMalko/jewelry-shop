import "./App.css";
import { useState, useEffect } from "react";
import { item } from "./ImageSlider";
import LoaderPage from "./Loader/LoaderPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPause,
  faPlay,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [items, setItems] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextItems = () => {
    setItems((prevItems) => (prevItems + 1) % item.length);
  };

  const previousItems = () => {
    setItems((prevItems) => (prevItems - 1 + item.length) % item.length);
  };

  const togglePause = () => {
    setIsPaused((prevPaused) => !prevPaused);
  };

  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        nextItems();
      }, 2000);
    }

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div>
      {stateLoader && <LoaderPage />}
      <div className="welcome">
        <p className="first">
          Welcome to Shop, where elegance meets simplicity in every piece.
          Embrace the beauty of minimalism with our curated collection of
          exquisite jewelry. Each design is a celebration of understated
          sophistication, crafted to elevate your style effortlessly.
        </p>
      </div>
      <div className="container">
        <div className="image-wrapper">
          <img
            src={item[items].image}
            width="600px"
            alt="item"
            className="image-transition"
          />
        </div>
      </div>

      <div className="btn">
        <button onClick={previousItems}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={togglePause}>
          {isPaused ? (
            <FontAwesomeIcon icon={faPlay} />
          ) : (
            <FontAwesomeIcon icon={faPause} />
          )}
        </button>
        <button onClick={nextItems}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      <div className="welcome">
        <p className="second">
          At our Shop, we believe in the power of simplicity. Our jewelry
          reflects a timeless aesthetic, perfect for those who appreciate the
          beauty of clean lines and refined details. Explore our range of
          minimalist pieces that seamlessly blend into your everyday wardrobe,
          adding a touch of grace to every moment.
        </p>
        <p className="second">
          <span>Why Choose Us? </span>
        </p>
        <p className="second">
          <span>Timeless Elegance:</span> Our jewelry is designed to stand the
          test of time, combining classic charm with modern simplicity.
          <br />
          <span> Quality Craftsmanship: </span> Each piece is meticulously
          crafted with precision and care, ensuring superior quality and
          durability.
          <br />
          <span> Versatile Styles: </span> From delicate necklaces to subtle
          earrings, our collection offers versatile pieces for any occasion.
          <br />
          <span> Effortless Sophistication: </span> Experience the joy of
          accessorizing with pieces that effortlessly enhance your unique style.
          <br />
          <span>Secure Shopping: </span> Enjoy a secure and convenient online
          shopping experience, with worldwide shipping options available.
          <br />
        </p>
        <p className="second last">
          Indulge in the artistry of minimalism. Elevate your look with our
          Shop, where each piece tells a story of refined elegance. Start
          exploring our collection and embrace the beauty of simplicity today.
          Happy shopping!
        </p>
      </div>
    </div>
  );
}

export default App;
