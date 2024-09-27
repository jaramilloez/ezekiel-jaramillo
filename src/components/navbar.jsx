import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm sticky-top">
      <div className="container-fluid px-5 py-2">
        <div id="navName" className="navbar-brand fs-5 fw-bold">
          Ezekiel Jaramillo
        </div>
        <button
          className="navbar-toggler fs-6 border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#hamburger"
          aria-controls="hamburger"
          aria-expanded="false"
          aria-label="Hamburger menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="hamburger"
          className="collapse navbar-collapse text-end justify-content-end"
        >
          <ul className="navbar-nav fs-5 text-nowrap">
            <li className="nav-item">
              <a href="#about" className="navLink">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="navLink">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="navLink">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="navLink">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
