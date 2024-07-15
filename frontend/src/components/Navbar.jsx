import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [theme, setIsTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  const handleDarkMode = () => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      setIsTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setIsTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (scrolled) {
      navbar.style.backgroundColor = theme === "dark" ? "#f1f1f1" : "#212529";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  }, [scrolled, theme]);

  useEffect(() => {
    if (theme === "light") {
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }, [theme]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "" : "bg-transparent"
      }`}
      id="navbar"
    >
      <div className="container">
        <button
          className="navbar-toggler order-first"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        <a className="navbar-brand" href="#">
          BookStore
        </a>
        <div
          className="collapse navbar-collapse mx-auto 

          "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/course">
                Course
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                About
              </Link>
            </li>
            <li className="nav-item">
              <form className="d-flex ms-lg-3 search-box" role="search">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn" type="submit">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </form>
            </li>
          </ul>
        </div>
        <div className="btnBox">
          <button
            className="btn fs-4 rounded-pill text-light border-0"
            onClick={handleDarkMode}
            id="darkModeBtn"
          >
            {theme === "dark" ? (
              <i className="fa-regular fa-moon"></i>
            ) : (
              <i className="fa-regular fa-sun"></i>
            )}
          </button>
          <Link to="/login">
            <button className="btn bg-black text-light ms-2" type="button">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
