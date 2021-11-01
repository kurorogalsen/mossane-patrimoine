import React, { useState } from "react";
import "./../styles/Header.css";
import logo from "../assets/logo_bg_removed.png";

function Navbar() {
  const titre = "Mossane Patrimoine";
  const [open, setOpen] = useState(false);
  const showMenu = () => setOpen(!open);

  return (
    <div>
      <nav className="mossane-navbar container row-between">
        <img id="logo" src={logo} alt={titre} />
        <ul className="row">
          <li className="mossane-link mossane-link-active">
            <a href="#">Accueil</a>
          </li>
          <li className="mossane-link">
            <a href="#">Le cabinet</a>
          </li>
          <li className="mossane-link mossane-dropdown">
            <a href="#">Activités</a>
            <div className="mossane-dropdown-hover column">
              <ul className="container row">
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="mossane-link">
            <a href="#">Espace sportif</a>
          </li>
          <li className="mossane-link">
            <a href="#">Actualités</a>
          </li>
          <li className="mossane-link">
            <a href="#">Contact</a>
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
          <li className="mossane-link mossane-link-active">
            <a href="#">Accueil</a>
          </li>

          <hr className="mossane-divider" />

          <li className="mossane-link">
            <a href="#">Le cabinet</a>
          </li>

          <hr className="mossane-divider" />

          <li className="mossane-link mossane-dropdown">
            <a href="#">Activités</a>
            <div className="mossane-dropdown-hover column">
              <ul className="container row">
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
                <li className="mossane-link">
                  <a href="#">Clientèle privée</a>
                </li>
              </ul>
            </div>
          </li>

          <hr className="mossane-divider" />

          <li className="mossane-link">
            <a href="#">Espace sportif</a>
          </li>

          <hr className="mossane-divider" />

          <li className="mossane-link">
            <a href="#">Actualités</a>
          </li>

          <hr className="mossane-divider" />

          <li className="mossane-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <div
        id="mossane-btn-burger"
        className={`column ${
          open ? "burger-anim-true" : "burger-anim-false"
        }`}
        onClick={showMenu}
      ></div>
    </div>
  );
}

export default Navbar;