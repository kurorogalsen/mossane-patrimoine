import "./../styles/Header.css";
import Navbar from "./Navbar";
import React from "react";
import { scroller } from "react-scroll";
import { scrollToSection } from "react-scroll";
import TypewriterComponent from "typewriter-effect";
import {Link} from 'react-scroll';

function Header() {
  let scrollToSection = () => {
    scroller.scrollTo("#main-app", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <header className="mossane-header container column column-left">
      <Navbar />
      <hgroup>
        <h1>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.changeDelay(100).typeString("MOSSANE").start();
            }}
          />
        </h1>
        <h2>
          <TypewriterComponent
            onInit={(typewriter) => {
              typewriter.changeDelay(90).typeString("Patrimoine").start();
            }}
          />
        </h2>
      </hgroup>
      <p>
        <TypewriterComponent
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1750)
              .changeDelay(50)
              .typeString("À vos côtés pour la réussite <br /> de vos projets.")
              .start();
          }}
        />
      </p>
      <div className="mossane-scrolldown">
        <Link to="main-app" smooth={true} duration={1000}>Balayez vers le bas</Link>
        <div className="mossane-scrolldown-anim"> </div>
      </div>
    </header>
  );
}
export default Header;
