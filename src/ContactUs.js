import React, { useState, useEffect } from "react";
import LoaderPage from "./Loader/LoaderPage";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {stateLoader && <LoaderPage />}
      <div className="contact-us-form">
        <p className="contact-us-label">
          Have questions or need assistance?
          <br /> Contact us easily through this page. Our team is ready to
          provide the support and answer your need.
        </p>
      </div>

      <div className="body-form">
        <div className="container-form">
          <h3 className="contact-us">GET IN TOUCH WITH US</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </label>
            <br />
            <button className="send" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
