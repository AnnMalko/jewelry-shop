import "./App.css";
// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./ContactUs";
// import LoaderPage from "./Loader/LoaderPage";


function App() {

  return (
    <div>
      {/* {stateLoader && <LoaderPage />} */}

      <Router>
        <nav>
          <Link to="/home" className="link">
            Welcome
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/shop" className="link">
            Shop
          </Link>
          <Link to="/contact" className="link">
            Contact Us
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
