import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../Home/Home";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <Router>
      <div className="ex-navbar">
        <div className="ex-links-container ex-flex-end">
          <Link to="/">Home</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/work-experience">Work</Link>
          <Link to="/personal-projects">Projects</Link>
          <Link to="/education">Education</Link>
          <Link to="/hobbies">Hobbies</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}

export default Navbar
