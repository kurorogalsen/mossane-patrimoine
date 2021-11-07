import React, { useState } from "react";
import "./../styles/Header.css";
import logo from "../assets/logo_bg_removed.png";
import { Link } from "react-router-dom";
import Scrollcontact from "./Scrollcontact";

function Navbar() {
  const titre = "Mossane Patrimoine";
  const [open, setOpen] = useState(false);
  const showMenu = () => setOpen(!open);

  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => {
    if (window.scrollY > 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", showNavbar);

  if (document.querySelector("#scrollContactMobile>a")) {
    const scrollContactMobile = document.querySelector("#scrollContactMobile>a");
    scrollContactMobile.addEventListener("click", () => {
      setOpen(!open);
    });
  }

  return (
    <div id="scrollUpAnchor">
      <nav
        className={`${
          navbar
            ? "mossane-navbar container row-between mossane-navbar-reveal"
            : "mossane-navbar container row-between"
        }`}
      >
        <img id="logo" src={logo} alt={titre} />
        <ul className="row">
          <Link to="/">
            <li className="mossane-link mossane-link-active"> Accueil </li>
          </Link>
          <Link to="/cabinet">
            <li className="mossane-link"> Le cabinet </li>
          </Link>
          <li className="mossane-link mossane-dropdown">
            <a href="#">Activités</a>
            <div className="mossane-dropdown-hover column">
              <ul className="container row">
                <Link to="/prive">
                  <li className="mossane-link"> Clientèle privée </li>
                </Link>
                <Link to="/professionnelle">
                  <li className="mossane-link"> Clientèle professionnelle </li>
                </Link>
                <Link to="/formations">
                  <li className="mossane-link"> Séminaire et formations </li>
                </Link>
              </ul>
            </div>
          </li>
          <Link to="/espaceSportif">
            <li className="mossane-link"> Espace sportif </li>
          </Link>
          <Link to="/actualites">
            <li className="mossane-link"> Actualités </li>
          </Link>
          <li className="mossane-link">
            <Scrollcontact />
          </li>
        </ul>
      </nav>

      <nav
        id="mossane-menu-mobile"
        className={`column ${
          open ? "mossane-menu-mobile-close" : "mossane-menu-mobile-open"
        }`}
      >
        <img id="logo" src={logo} alt={titre} />
        <ul className="column">
          <div className="link-parent">
            <Link to="/">
              <li
                className="mossane-link mossane-link-active"
                onClick={showMenu}
              >
                {" "}
                Accueil{" "}
              </li>
            </Link>
          </div>
          <hr className="mossane-divider" />
          <div className="link-parent">
            <Link to="/cabinet">
              <li className="mossane-link" onClick={showMenu}>
                {" "}
                Le cabinet{" "}
              </li>
            </Link>
          </div>
          <hr className="mossane-divider" />

          <li className="mossane-link mossane-dropdown">
            <a href="#">Activités</a>
            <div className="mossane-dropdown-hover column">
              <ul className="container row">
                <div className="link-parent">
                  <Link to="/prive">
                    <li className="mossane-link" onClick={showMenu}>
                      {" "}
                      Clientèle privée{" "}
                    </li>
                  </Link>
                </div>
                <div className="link-parent">
                  <Link to="/professionnelle">
                    <li className="mossane-link" onClick={showMenu}>
                      {" "}
                      Clientèle professionnelle{" "}
                    </li>
                  </Link>
                </div>
                <div className="link-parent">
                  <Link to="/formations">
                    <li className="mossane-link" onClick={showMenu}>
                      {" "}
                      Séminaire et formations{" "}
                    </li>
                  </Link>
                </div>
              </ul>
            </div>
          </li>

          <hr className="mossane-divider" />
          <div className="link-parent">
            <Link to="/espaceSportif">
              <li className="mossane-link" onClick={showMenu}>
                {" "}
                Espace sportif{" "}
              </li>
            </Link>
          </div>

          <hr className="mossane-divider" />
          <div className="link-parent">
            <Link to="/actualites">
              <li className="mossane-link" onClick={showMenu}>
                {" "}
                Actualités{" "}
              </li>
            </Link>
          </div>

          <hr className="mossane-divider" />
          <div className="link-parent">
            <li
              id="scrollContactMobile"
              className="mossane-link"
              onClick={showMenu}
            >
              <Scrollcontact />
            </li>
          </div>
        </ul>
      </nav>

      <div
        id="mossane-btn-burger"
        className={`column ${open ? "burger-anim-true" : "burger-anim-false"}`}
        onClick={showMenu}
      ></div>
    </div>
  );
}

export default Navbar;
