import "./css/App.css";
import  "./css/ContactUs.css";
import "./css/SliderButton.css";
import "./css/SliderButton.css";
import "./css/Buttons.css";
import "./css/Items.css";
import "./css/Shop.css";
import "./css/About.css";
import "./css/Welcome.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Shop from "./Shop";
import Contact from "./ContactUs";



function App() {

  return (
    <div>

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
