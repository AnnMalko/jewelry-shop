import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./about";
import Shop from "./Shop";
import Contact from "./ContactUs";

function App() {
  return (
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
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
